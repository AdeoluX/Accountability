const post = async (url, data, token) => {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });
  return response.json();
};

const patch = async (url, data, token) => {
  const response = await fetch(url, {
    method: 'PATCH',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });
  return response.json();
};

const get = async (url, token) => {
  const response = await fetch(url, {
    headers: {Authorization: `Bearer ${token}`},
  });
  return response.json();
};

export default {post, get, patch};
