const { ipcRenderer, contextBridge } = require('electron');
const http = require('http');

contextBridge.exposeInMainWorld('electron', {
  send: (channel, data) => ipcRenderer.send(channel, data),
  on: (channel, callback) => ipcRenderer.on(channel, (_, ...args) => callback(args)),
  get: (url, callback) => http.get(url, callback),
  post: (url, callback) => http.post(url, callback),
});
