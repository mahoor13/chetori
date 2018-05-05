// sudo apt install libappindicator1 overlay-scrollbar-gtk2 libcanberra-gtk-module libcanberra-gtk3-module -y
const   {app, BrowserWindow, Menu, Tray, globalShortcut} = require('electron');

var path = require('path');
var iconpath = path.join(__dirname, 'whatsapp.png');

let mainWindow;
let tray;

app.on('window-all-closed', function() {
  app.quit();
});


app.on('ready', function() {
    mainWindow = new BrowserWindow({
        width: 1024,
        height: 768,
        icon: iconpath,
    });
    mainWindow.loadURL('file://' + __dirname + '/browser.html');
    mainWindow.setMenu(null);

    tray = new Tray(iconpath);
    const contextMenu = Menu.buildFromTemplate([
        {label: 'Open Chetori', click: function (){ mainWindow.show() }},
        {label: 'Toggle fullscreen', click: function (){
            mainWindow.setFullScreen(!mainWindow.isFullScreen());
            mainWindow.show();
        }},
        {label: 'Minimize to tray', click: function (){ mainWindow.close() }},
        {label: 'Quit Chetori', click: function (){ app.isQuiting = true; app.quit() }}
    ]);
    tray.setToolTip('Chetori Whatsapp client (web interface)');
    tray.setContextMenu(contextMenu);

    globalShortcut.register('Escape', function(){
        if (mainWindow.isFullScreen()) {
            mainWindow.setFullScreen(false);
        }
    });

    mainWindow.on('close', function (event) {
    	if(!app.isQuiting){
            event.preventDefault();
            mainWindow.hide();
        } else {
            app.quit();
        }
        return false;
    });

    mainWindow.on('minimize', function (event) {
        event.preventDefault();
        mainWindow.minimize();
    });

    mainWindow.on('show', function () {
        tray.setHighlightMode('always');
    });
});
