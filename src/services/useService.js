import { API_PATH } from './constant';

function getData(url, callback) {
    fetch(`${API_PATH}${url}`)
        .then((response) => response.json())
        .then(callback);
}

export { getData };
