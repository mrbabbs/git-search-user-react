// eslint-disable-next-line
export const searchUsers =
  (api, baseUrl) => query => api.get(`${baseUrl}${query}`);

export const fetchImages = api => urls => Promise.all(urls.map(api.get));

