const {
    app,
    BrowserWindow
} = require('electron')

function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        frame: false,
        x: 0,
        y: 0
        // transparent: true
    })

    win.loadFile('index.html')
    win.setAlwaysOnTop(true)
}

app.whenReady().then(() => {
    createWindow()
})