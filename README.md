# mini-jianshu

## 快速开始

时间原因，所以使用开发服务进行演示。

### 数据库准备

请提前准备 mongodb 数据库（建议使用 docker 方式安装），安装步骤参考 [mongodb部署](https://blog.csdn.net/weixin_46785144/article/details/117968489)

在 mongodb 中导入演示数据（数据存放位置 db/jianshu.js）

### 使用 docker 启动

直接启动 docker 即可 

命令参考 docker run -itd -e TZ=Asia/Shanghai -p xxxx:8319 -v 路径:/jianshu/server/config.json docker名

### 服务端使用源代码部署

需依赖 node.js 环境，本机测试版本 v16.13。

需确认 config.json 中数据库的配置可用。

```
// 进入文件夹
cd server
// 安装依赖
npm i 
// 启动服务
npm run start
```

### 前端使用源代码部署

需依赖 node.js 环境，本机测试版本 v16.13

使用 vite2 启动开发服务，源代码路由使用 history 模式，

若需使用打包后版本请在静态文件部署后在反向代理服务处增加 history 路由所需配置。

vite.config.js 中代理请求地址需指向前面后端服务起的地址。

```
// 进入文件夹
cd fe
// 安装依赖
npm i 
// 启动服务
npm run dev
```

部署完成后访问开发服务对应地址~

## 效果图

### 首页

![首页](https://blog-img-1252360401.cos.ap-guangzhou.myqcloud.com/jianshu-1.png)

### 文章页

![文章页](https://blog-img-1252360401.cos.ap-guangzhou.myqcloud.com/jianshu-2.png)
