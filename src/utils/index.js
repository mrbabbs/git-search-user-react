// eslint-disable-next-line
export const searchUsers =
  (api, baseUrl) => query => api.get(`${baseUrl}${query}`);
