const { app, autoUpdater, dialog, BrowserWindow, Menu, MenuItem} = require('electron')
require('update-electron-app')({
	repo: 'Sprouse-Websites/imperium-electron',
	updateInterval: '24 hour',
	logger: require('electron-log')
})

const server = 'https://your-deployment-url.com'
const updateURL = `${server}/update/${process.platform}/${app.getVersion()}`

autoUpdater.setFeedURL({ updateURL })

setInterval(() => {
  autoUpdater.checkForUpdates()
}, 8640000)

const url = require('url')
const path = require('path')
// const {ipcMain} = require('electron')

function createWindow () {
	const win = new BrowserWindow({
		width: 2000,
		height: 1800,
		title: "Imperium",
		webPreferences: {
			nodeIntegration: true
		}
	})

	var remote = require('remote');
	var Menu = remote.require('menu');
	var template = [
		{
			label: 'My App',
			submenu: [
				{
					label: 'About my app',
					selector: 'orderFrontStandardAboutPanel:'
				},
				{
					type: 'separator'
				},
				{
					label: 'Quit App',
					selector: 'orderFrontStandardAboutPanel:'
				},
			]
		},
	];
	menu = Menu.buildFromTemplate(template);
	Menu.setApplicationMenu(menu);

	win.loadFile('index.html')
	// win.webContents.openDevTools()
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
		app.quit();
	}
});

app.on('activate', () => {
	if (BrowserWindow.getAllWindows().length === 0) {
		createWindow()
	}
})

autoUpdater.on('update-downloaded', (event, releaseNotes, releaseName) => {
  const dialogOpts = {
    type: 'info',
    buttons: ['Restart', 'Later'],
    title: 'Application Update',
    message: process.platform === 'win32' ? releaseNotes : releaseName,
    detail: 'A new version has been downloaded. Restart the application to apply the updates.'
  }

  dialog.showMessageBox(dialogOpts).then((returnValue) => {
    if (returnValue.response === 0) autoUpdater.quitAndInstall()
  })
})

autoUpdater.on('error', message => {
  console.error('There was a problem updating the application')
  console.error(message)
})
