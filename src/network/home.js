import {request} from "./request.js"

export function getHomeMultidata() {
  return request({
		//调用request.js文件中的导出的request方法
    url: '/home/multidata'
  })



}
export function getHomeData(type, page) {
  return request({
    url: '/home/data',
    params: {
      type,
      page
    }
  })
	}