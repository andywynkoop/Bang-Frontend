import axios from 'axios';

// for biscuit encryption
const transform = (string, key, decrypting) => {
  const charArray = key.split('');
  return string.split('').map((char, idx) => {
    let offset = charArray[idx % charArray.length].charCodeAt();
    let num = char.charCodeAt();
    let charCode = decrypting ? num - offset : num + offset
    let newChar = String.fromCharCode(charCode);
    return newChar
  }).join('');
}

const key = "BarkingIrons";

const encrypt = (biscuitString) => transform(biscuitString, key);

const decrypt = (biscuitString) => transform(biscuitString, key, true);

const _request = (method, relativeURL, data = {}) => {
  let biscuits = {};
  if (window.localStorage._biscuits) {
    let biscuitString = decrypt(window.localStorage._biscuits);
    biscuits = JSON.parse(biscuitString);
  }

  let newData = Object.assign({}, { biscuits });

  let path;
  if (relativeURL[0] === "h") {
    // allow the path to not be relative
    path = relativeURL;
  } else {
    if (relativeURL[0] != '/') {
      relativeURL = `/${relativeURL}`
    }
    path = `https://buttermybiscuits.herokuapp.com${relativeURL}`;
  }

  let url = `${path}?data=${JSON.stringify(newData)}`;

  let reqParams = {
    method,
    url,
    data,
    mode: 'cors'
  }

  return new Promise((resolve, reject) => {
    axios(reqParams).then(
      res => {
        const { biscuits, body } = res.data;
        let jString = JSON.stringify(biscuits);
        window.localStorage._biscuits = encrypt(jString);
        resolve(body)
      },
      err => reject(err)
    );
  });
}

const get = (...args) => _request("get", ...args);
const post = (...args) => _request("post", ...args);
const patch = (...args) => _request("patch", ...args);
const _delete = (...args) => _request("delete", ...args);

export default {
  get,
  post,
  patch,
  delete: _delete
}