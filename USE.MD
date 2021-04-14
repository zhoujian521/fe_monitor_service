# egg.js 说明文档

## 1：基础功能

### 1.1：内置对象
1： Koa 继承而来的 4 个对象（Application, Context, Request, Response) ;
2：框架扩展的一些对象（Controller, Service, Helper, Config, Logger）;

### 1.2：Controller 
#### 1：职责
1.1: 校验参数
1.2: 组装参数
1.3: 调用 service 进行业务处理
1.4: 设置响应内容和响应状态码
#### 2：获取 HTTP 请求参数
2.1. query
2.2. Router params
2.3. body
2.4. 获取上传的文件
2.5. header
2.6. Cookie
2.7. Session


