/**
 * 首页的网络请求
 */

import {request} from './request';


export function getHomeMultiData(){
  return request({
    url: '/home/multidata',
  })
}
