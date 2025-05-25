const { app, BrowserWindow } = require('electron');

const path = require('path');
console.log("Sistema operativo:", process.platform);

function createWindow() {
  const win = new BrowserWindow({
    show: false,
    webPreferences: {
    nodeIntegration: true,
    contextIsolation: false
    }
  });

  win.maximize();
  win.loadFile('index.html');
  win.once('ready-to-show', () => {
    win.show();           // 👈 Ahora sí mostrarla
  });
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
