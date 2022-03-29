const {
  app,
  BrowserWindow,
  ipcMain,
} = require('electron');
const path = require('path');

app.on('ready', async () => {
  const window = new BrowserWindow({
    width: 700,
    minHeight: 500,
    frame: false,
    webPreferences: {
      preload: path.resolve(__dirname, 'preload.js'),
    },
  });

  process.env.IS_PROD ? window.loadFile('./build/index.html') : window.loadURL('http://localhost:3000');
});

app.on('window-all-closed', () => app.quit());

ipcMain.on('close-app', () => app.quit());
