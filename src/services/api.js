import HTTPClient from './http';
import qs from 'qs';

export async function startAuthentication() {
  try {
    const config = {
      method: 'get',
      url: '/startAuthentication',
      headers: {},
    };

    const response = await HTTPClient(config);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
