const { ipcRenderer, contextBridge } = require('electron');
const { exec } = require('child_process');

contextBridge.exposeInMainWorld('electron', {
  send: (channel, data) => ipcRenderer.send(channel, data),
  on: (channel, callback) => ipcRenderer.on(channel, (_, ...args) => callback(args)),
  exec,
});
