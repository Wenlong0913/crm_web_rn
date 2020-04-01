// import AsyncStorage from '@react-native-community/async-storage';
import Tips from 'react-native-root-tips';
import get from 'lodash/get';
function checkStatus(response, tips) {
  Tips.hide(tips)
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  throw response;
}

async function exceptionCodeHandle(response) {
  try {
    const data = await response.json();
    const code = get(data, 'code');
    if (code && code !== 0 && data.error) {
      Tips.show(
        `請求失敗，請稍後重試！
          code: ${code}
          status: ${response.status}
          ${response.url}`,
      );
    }
    return data;
  } catch (error) {
    Tips.show(
      `請求失敗，請稍後重試！
        url: ${response.url}
        status: ${response.status}
        message: ${response.message}`,
    );
    throw error;
  }
}
export default async function customFetch(url, config = {}) {
  const defaultHeaders = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };
  const { headers = {}, body = {}, method = 'GET' } = config;
  // 调用接口时显示 loading
  const tips = Tips.showLoading('loading...', { mask: true, showLoading: true, maskColor: 'gray' })
  return fetch(url, {
    method,
    headers: Object.assign({}, defaultHeaders, headers),
    body: method !== 'GET' ? JSON.stringify(body) : null,
  })
    .then(checkStatus, tips)
    .then(response => response.json())
    .catch(exceptionCodeHandle);
}
