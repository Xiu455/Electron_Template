# Electron模板

| 依賴項 | 安裝指令 | 說明 |
| --- | --- | --- |
| Electron | ```npm install electron --save-dev``` | Electron安裝 |
| Electron Builder | ```npm install electron-builder --dev``` | Electron打包(需要管理員權限) |

## 相關連結
- [打包教學](https://medium.com/something-about-javascript/electron-%E6%89%93%E5%8C%85%E6%88%90%E5%9F%B7%E8%A1%8C%E6%AA%94-e968255ec173)

## package.json設置說明
```json
{
  "name": "src",
  "version": "1.0.0",
  "main": "./Main/main.js", // 主程式路徑
  "scripts": {
    "start": "chcp 65001 && electron .",                    // 開啟程式指令
    "test": "echo \"Error: no test specified\" && exit 1",  // 測試用指令
    "pack": "electron-builder --dir",                       // 打包指令
		"pack-dist": "electron-builder"                         // 打包指令(安裝檔)
  },
  "build": {
		"appId": "com.example.app",         // 打包ID
		"productName": "LiveChatOnline",    // *打包後執行檔名稱
		"directories": {
			"output": "pack"                  // 打包後檔案位置
		},
		"files": [                          // 要打包的檔案
			"**/*",
			"!.vscode",                       // 排除vscode資料夾
			"build/"
		],
		"asar": false,
    "win": {
		  	"icon": "assets/icon.png"       // icon 需要 256*256
		},
		"mac": {  },
		"linux": {  }
	},
  "keywords": [],
  "author": "",
  "license": "ISC",
  "description": "it's a app",          // *打包後執行檔說明
  "devDependencies": {
    "electron": "^33.2.1",
    "electron-builder": "^25.1.8"
  },
  "charset": "UTF-8",
  "dependencies": {  }
}
```