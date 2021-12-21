import { app, BrowserWindow } from 'electron';
import path from 'path';
import { node } from 'webpack';

let mainWindow: Electron.BrowserWindow | null;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    },
  });

  mainWindow.loadURL('http://localhost:4000')

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

app.on('ready', createWindow);