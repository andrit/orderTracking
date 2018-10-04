export const loadJson = (url, resObj) => {
    return fetch(url, resObj)
        .then(response => {
            if (response.status >= 200 && response.status < 300) {
            return Promise.resolve(response)
            } else {
            return Promise.reject(new Error(response.statusText))
            }
        })
      .then(response => response.json());
  }