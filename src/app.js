/*
 * @Author: your name
 * @Date: 2021-06-18 17:09:50
 * @LastEditTime: 2021-06-18 17:57:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \koa2-mock\src\app.js
 */
const Koa = require("koa");
const app = new Koa();
const cors = require("koa2-cors"); // 新增部分处理跨域
const index = require("./routes/index");
var http = require("http");
let routerResponse = require("./middleware/routerResponse");
// middlewares
app.use(cors());
app.use(routerResponse());
// logger
app.use(async (ctx, next) => {
  const start = new Date();
  await next();
  const ms = new Date() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});

// routes
app.use(index.routes(), index.allowedMethods());

// server

var server = http.createServer(app.callback());
server.listen(3030, () => {
  console.log(`koa2 Server running on http://localhost:${3030}!`);
});
