const baseURL = 'http://web.beta.sip2sip.net/api/json';

const getQuery = (params) => {
  if (!params) {
    return '';
  }
  let query = '/?';
  const keys = Object.keys(params);
  keys.forEach((key, index) => {
    index + 1 === keys.length
      ? query += `${key}=${params[key]}`
      : query += `${key}=${params[key]};`;
  });

  return query;
};

export default {
  get: (requestRoute, params) => window.electron.get(`${baseURL}${requestRoute}${getQuery(params)}`, (response) => {
    response.on('data', (data) => console.log(data));
  }),
  post: (requestRoute, params) => window.electron.post(`${baseURL}${requestRoute}${getQuery(params)}`, (response) => {
    response.on('data', (data) => console.log(data));
  }),
};
