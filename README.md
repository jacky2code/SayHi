# sayHi
使用 Solidity + uniapp(vue3) 

创建简单合约并调用，本地测试使用 Ganache

部署可以使用在线 Remix 部署，也可以使用 vscode 中 Remix 插件部署 ，本文中使用插件部署



## 创建 uniapp 项目 sayHi

使用 HBuilderX 创建项目 sayHi（也可以使用 vite 创建 vue3 项目），并使用uni-ui模版



## 创建合约

项目根目录建文件夹 contract，文件夹中简单创建一个 Count number 的合约 Counter.sol
``` Solidity
// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

contract Counter {
    uint private counts;

    constructor() {
        counts = 0;
    }

    function addcounter() public {
        counts++;
    }

    function getcounter() public view returns (uint) {
        
        return counts;
    }
}
```



## 部署合约

- 安装 Ethereum Remix 插件
- 下载安装 Ganache 创建本地测试网络
- 点击 Run & Deploy 选择网络 http://127.0.0.1:7545 并连接。
- 点击 Compile 选择刚创建的合约文件 Counter.sol，并复制生成的 ABI
- 点击 Deploy 并复制 合约部署地址



## 导入 ethers

使用 yarn 导入 ethers，在项目根目录打开终端并输入命令：

``` bash
sayHi % yarn init

sayHi % yarn add ethers

```

