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
### 1.3：Service
1：[this.ctx.curl 发起网络调用。](https://www.cnblogs.com/antyhouse/p/13255494.html)
param   | ...
---|:--:|
method  | 请求方法，默认为GET。可以是GET，POST，DELETE或PUT
data	| 要发送的数据。将自动进行字符串化
dataType| 字符串-响应数据的类型。可能是text或json
headers	| 请求标头
timeout	| 请求超时
auth	| username:password在HTTP基本授权中使用
gzip	| 让您在请求连接时获取res对象，默认为false
nestedQuerystring |	urllib默认使用querystring       | 对不支持嵌套对象的表单数据进行字符串化，通过将此选项设置为true，将使用qs而不是querystring支持嵌套对象
**2： this.ctx.service.otherService 调用其他 Service**
**3：this.ctx.db 发起数据库调用等， db 可能是其他插件提前挂载到 app 上的模块**