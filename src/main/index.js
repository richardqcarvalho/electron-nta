const {
  app, BrowserWindow, screen, ipcMain,
} = require('electron');
const path = require('path');

app.on('ready', async () => {
  const window = new BrowserWindow({
    width: 700,
    minHeight: 500,
    frame: false,
    x: screen.getPrimaryDisplay().bounds.width - 700,
    y: 0,
    webPreferences: {
      preload: path.resolve(__dirname, 'preload.js'),
    },
  });

  process.env.IS_PROD ? window.loadFile('./build/index.html') : window.loadURL('http://localhost:3000');
});

app.on('window-all-closed', () => app.quit());

ipcMain.on('close-app', () => app.quit());
