const { contextBridge, ipcRenderer } = require('electron');

const electronAPI = {
    send: (channel, data) => {
        ipcRenderer.send(channel, data);
    },
    receive: (channel, func) => {
        ipcRenderer.on(channel, (event, ...args) => func(...args));
    },
    invoke: (channel, data) => {
        return ipcRenderer.invoke(channel, data);
    }
};

contextBridge.exposeInMainWorld('electron', electronAPI);