import { app, BrowserWindow } from 'electron';
import "reflect-metadata";
import { setupDatabase } from './database/database';
require('dotenv').config()

setupDatabase()

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