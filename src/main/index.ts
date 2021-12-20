const {
  app,
  BrowserWindow
} = require('electron')
const path = require('path')

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })

  win.loadURL(`http://localhost:${process.env.ELECTRON_WEBPACK_WDS_PORT}`)
}

app.whenReady().then(() => {
  createWindow()
})