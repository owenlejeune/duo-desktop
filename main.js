const {app, BrowserWindow} = require('electron');
var path = require('path');

let win;

function createWindow() {
    win = new BrowserWindow({
        width: 1200,
        height: 800,
        title: 'Duo'
    });

    win.loadURL("https://duo.google.com");

    win.on('closed', () => win=null);
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (win === null) {
        createWindow();
    }
})
