import request from '../utils/fetch';

// 测试接口调用是否成功，等接口开发出来后会删掉 

// post 请求
// export function testRequest() {
//   return request(
//     `http://topt-crm.i-mocca.com/crm_api/crm/index/index`, {
//     method: 'POST',
//     body: {
//       type: 'today'
//     },
//   }
//   );
// }

// get 请求
export function testRequest() {
  return request(
    `https://www.fastmock.site/mock/fc3f7b34095c12cc6267691885677523/api/get_longest_safe_time`
  );
}