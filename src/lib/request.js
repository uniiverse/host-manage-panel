export default (url, options) => {
  const csrfToken = sessionStorage.getItem('csrf_token');
  const newOptions = { ...options, headers: { ...options.headers, 'X-CSRF-Token': csrfToken }};

  return fetch(url, newOptions).then((response) => {
    try {
      sessionStorage.setItem('csrf_token', response.headers.get('X-CSRF-Token'));
    } catch (error) {
      if (error.name === 'QuotaExceededError') {
        // sessionStorage is not available. E.g. in Safari incognito mode
      } else {
        throw error;
      }
    }
    return response;
  });
};
