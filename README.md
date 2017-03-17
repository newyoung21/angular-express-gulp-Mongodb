# angular-express-gulp-Mongodb
前后端分离思想项目结构初探

##简单做了前后端分离作品--登录注册登录页面，前端用angular+gulp搭建，后端用express+mongodb.
## 功能简介
   前台登录或注册，后台接受保存并返回用户信息。
## 项目目录
   ### client 为前端目录
   
       src 为源文件
       dist 为压缩后文件
       
   ### server 为后端目录
   
## 想要源码的可以Git到本地

 ### 前端页面   
    1.在client文件下,加载依赖。
      npm install
      bower install
    2.用gulp 启动 browser-sync本地服务器，输下以下命令，就自动前端打开页面
      
      gulp default
      
 ### 服务器端
    1.在server文件根目录下输入以下命令，加载依赖
    
      npm install
    
    2.启动Mongodb服务器，输入以下命令
    
      mongod --dbpath D:\MongoDB\todo
      
    3.启动node服务器
      
      npm start
      
    4.以上步骤完成后，就可在前台页面注册与登录了。