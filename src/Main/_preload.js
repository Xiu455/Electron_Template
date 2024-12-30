// 匯入 electron 的模組
const { contextBridge, ipcRenderer } = require('electron');

// 將 ipcRenderer 暴露給前端
contextBridge.exposeInMainWorld('electron', {
    ipcRenderer: ipcRenderer,
});

// 載入完成後執行
window.addEventListener('DOMContentLoaded', () => {
    // 定義一個函式用來替換元素的文字
    const replaceText = (selector, text) => {
        const element = document.getElementById(selector);  // 取得元素
        // 如果元素存在替換元素的文字
        if(element){
            element.innerText = text;
        }
    }

    // 對每個相依套件執行
    for(const dependency of ['chrome', 'node', 'electron']){
        replaceText(`${dependency}-version`, process.versions[dependency]); // 將套件版本顯示在網頁上
    }
});