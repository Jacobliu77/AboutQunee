/*
 * @Author: jacob
 * @Date: 2020-11-25 17:06:01
 * @LastEditTime: 2020-12-02 11:06:59
 * @LastEditors: jacob
 * @Description: home页面请求api方法文件
 */

/**
 * axios请求模块
 */
 import request from '@/utils/request'

 /**
  * 一言请求模块
  * hitokoto(一言)、en(中英文)、social(社会语录)、soup(毒鸡汤)、fart(彩虹屁)、zha(渣男语录)
  */
 export const oneSay = ()=> {
   return request({
     method: 'GET',
     url: 'https://api.uixsj.cn/hitokoto/get?type=fart&code=json'
   })
 }
 /**
  * 本地请求模块
  * /name请求名字  /all 请求所有数据
  */
 export const nameOrAll = ()=> {
  return request({
    method: 'GET',
    url: 'http://localhost:3000/name'
  })
}
