export const post = async ({ url, headers = '', data = {} }) => {
  return new Promise((resolve, reject) => {
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers
    }).then((response) => {
      if (response.status >= 400 && response.status < 600) {
        return reject(response.status, response.json());
      }
      return resolve(response.json());
    })
  });
}

export const put = async ({ url, headers = '', data = {} }) => {
  return new Promise((resolve, reject) => {
    fetch(url, {
      method: 'PUT',
      body: JSON.stringify(data),
      headers
    }).then((response) => {
      if (response.status >= 400 && response.status < 600) {
        return reject(response.status, response.json());
      }
      return resolve(response.json());
    })
  });
}

export const get = async ({ url, headers = '' }) => {
  return new Promise((resolve, reject) => {
    fetch(url, {
      method: 'GET',
      headers,
    }).then((response) => {
      if (response.status >= 400 && response.status < 600) {
        return reject(response.status, response.json());
      }
      return resolve(response.json());
    })
  });
}

export const destroy = async ({ url, headers ='' }) => {
  return new Promise((resolve, reject) => {
    fetch(url, {
      method: 'DELETE',
      headers,
    }).then((response) => {
      if (response.status >= 400 && response.status < 600) {
        return reject(response.status, response.json());
      }
      return resolve(response.json());
    })
  });
}
