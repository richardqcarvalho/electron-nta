const baseURL = 'http://hosted.nta.co.uk/api/json';

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
  fetch: (requestRoute, params) => fetch(`${baseURL}${requestRoute}${getQuery(params)}`).then((response) => response.json()),
};
