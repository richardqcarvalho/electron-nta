const { ipcRenderer, contextBridge } = require('electron');
const ps = require('ps-node');

contextBridge.exposeInMainWorld('electron', {
  send: (channel, data) => ipcRenderer.send(channel, data),
  on: (channel, callback) => ipcRenderer.on(channel, (_, ...args) => callback(args)),
  getTabs: () => {
    ps.lookup({
      command: 'chrome.exe',
      psargs: 'ux',
    }, (err, resultList) => {
      if (err) {
        throw new Error(err);
      }

      resultList.forEach((process) => {
        if (process) {
          console.log('PID: %s, COMMAND: %s, ARGUMENTS: %s', process.pid, process.command, process.arguments);
        }
      });
    });
  },
});
