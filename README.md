# Chetori

A multi platform and portable Whatsapp messenger client, based on electron webview.
This application fully tested on Ubuntu 18.04 LTS.
It has a tray icon with the following options:
- Open application
- Toggle Fullscreen
- Minimize to tray
- Quit Application

## How to RUN
Just download and install electron from https://github.com/electron/electron-api-demos/releases
and then run
```
electron path/to/chetori.asar
```

## Install electron on ubuntu
```
sudo apt install npm -y
sudo npm install -g electron
```

## Install depandencies on ubuntu
```
sudo apt install libappindicator1 overlay-scrollbar-gtk2 libcanberra-gtk-module libcanberra-gtk3-module -y
```

## Wishlist
- Proxy option
- Keyboard Shortcuts
- Run at startup option
- Add pre-builded packages for Linux, Windows and Mac OSX
