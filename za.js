const MIN_ERROR_CODE = 400;

const responseHandler = (response) => {
  const { status } = response;
  const parsedResponse = response.json();

  if (status >= MIN_ERROR_CODE) {
    return Promise.reject(status, parsedResponse);
  }
  return parsedResponse;
};

export const post = ({ url, headers = '', data = {} }) => {
  return fetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
    headers
  }).then(responseHandler);
};

export const put = ({ url, headers = '', data = {} }) => {
  return fetch(url, {
    method: 'PUT',
    body: JSON.stringify(data),
    headers
  }).then(responseHandler);
};

export const get = ({ url, headers = '' }) => {
  return fetch(url, {
    method: 'GET',
    headers,
  }).then(responseHandler);
};

export const destroy = ({ url, headers ='' }) => {
  return fetch(url, {
    method: 'DELETE',
    headers,
  }).then(responseHandler);
}

