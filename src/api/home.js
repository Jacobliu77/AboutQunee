/*
 * @Author: jacob
 * @Date: 2020-11-25 17:06:01
 * @LastEditTime: 2020-11-25 17:35:24
 * @LastEditors: jacob
 * @Description: home页面请求api方法文件
 */

/**
 * axios请求模块
 */
 import request from '@/utils/request'

 /**
  * 一言请求模块
  */
 export const oneSay = ()=> {
   return request({
     method: 'GET',
     url: 'https://api.uixsj.cn/hitokoto/get?type=fart&code=json'
   })
 }