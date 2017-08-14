const post = async ({ url, headers = '', data = {} }) => {
  return fetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
    headers
  }).then((response) => {
    if (response.status >= 400 && response.status < 600) {
      return Promise.reject(response.status, response.json());
    }
    return Promise.resolve(response.json());
  })
}

const put = async ({ url, headers = '', data = {} }) => {
  return fetch(url, {
    method: 'PUT',
    body: JSON.stringify(data),
    headers
  }).then((response) => {
    if (response.status >= 400 && response.status < 600) {
      return Promise.reject(response.status, response.json());
    }
    return Promise.resolve(response.json());
  })
}

const get = async ({ url, headers = '' }) => {
  return fetch(url, {
    method: 'GET',
    headers,
  }).then((response) => {
    if (response.status >= 400 && response.status < 600) {
      return Promise.reject(response.status, response.json());
    }
    return Promise.resolve(response.json());
  })
}

const destroy = async ({ url, headers ='' }) => {
  return fetch(url, {
    method: 'DELETE',
    headers,
  }).then((response) => {
    if (response.status >= 400 && response.status < 600) {
      return Promise.reject(response.status, response.json());
    }
    return Promise.resolve(response.json());
  })
}

export default { get, put, post, destroy };

