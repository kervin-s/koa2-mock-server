/*
 * @Author: your name
 * @Date: 2021-06-18 17:12:58
 * @LastEditTime: 2021-06-18 17:40:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \koa2-mock\src\routes\index.js
 */
const router = require("koa-router")();
var Mock = require("mockjs"); //引入mockjs
router.get("/", (ctx, next) => {
  ctx.success(
    Mock.mock({
      "object|2-8": {
        310000: "上海市",
        320000: "江苏省",
        330000: "浙江省",
        340000: "安徽省",
        380000: "湖南省",
        339000: "广东省",
        340400: "山西省",
      },
    })
  );
});
module.exports = router;
