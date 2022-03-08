const { app, BrowserWindow, screen } = require('electron');

app.on('ready', async () => {
  const window = new BrowserWindow({
    width: 500,
    minHeight: 500,
    frame: false,
    x: screen.getPrimaryDisplay().bounds.width - 500,
    y: 0,
  });

  process.env.IS_PROD ? window.loadFile('./build/index.html') : window.loadURL('http://localhost:3000');
});

app.on('window-all-closed', () => app.quit());
