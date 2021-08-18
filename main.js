const {
    app,
    BrowserWindow,
    screen
} = require('electron')

const loudness = require("loudness")

function createWindow() {
    const {
        width,
        height
    } = screen.getPrimaryDisplay().workAreaSize


    const win = new BrowserWindow({
        width: width,
        height: 190,
        frame: false,
        x: 0,
        y: 0,
        roundedCorners: false,
        transparent: true
    })

    win.loadFile('index.html')
    win.setAlwaysOnTop(true)
    win.center();

    win.setPosition(win.getPosition()[0], height - 10)
    const contents = win.webContents
    var currentVolume = 0;
    setInterval(async () => {
        var vol = await loudness.getVolume()
        if (vol != currentVolume) {
            currentVolume = vol
            var commandString = "document.getElementById('volumeIndicator').style.width = '" + (vol) + "%'; volumeChange()"


            contents.executeJavaScript(commandString, (err, result) => {
                if (err) {
                    console.log(err)
                } else {
                    console.log(result)
                }
            })
        }
    }, 100)

}


app.on('window-all-closed', function () {
    // On OS X it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.whenReady().then(() => {
    createWindow()
})