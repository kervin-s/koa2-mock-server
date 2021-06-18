/*
 * @Author: kerivn
 * @Date: 2021-06-18 17:13:12
 * @LastEditTime: 2021-06-18 17:14:47
 * @LastEditors: Please set LastEditors
 * @Description: 统一设置返回数据格式
 * @FilePath: \koa2-mock\src\middleware\routerResponse.js
 */
function routerResponse(option = {}) {
  return function (ctx, next) {
    ctx.success = function (data) {
      ctx.type = option.type || "json";
      ctx.body = {
        code: option.successCode || 200,
        msg: option.successMsg || "success",
        data: data,
      };
    };

    ctx.fail = function (msg, code) {
      ctx.type = option.type || "json";
      ctx.body = {
        code: code || option.failCode || 0,
        msg: msg || option.successMsg || "fail",
      };
    };

    next();
  };
}

module.exports = routerResponse;
