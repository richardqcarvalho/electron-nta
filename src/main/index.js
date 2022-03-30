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

  process.env.NODE_ENV === 'development' ? window.loadURL('http://localhost:3000') : window.loadFile('./build/index.html');
});

app.on('window-all-closed', () => app.quit());

ipcMain.on('close-app', () => app.quit());
