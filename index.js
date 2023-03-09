import { addImage } from './addImage.js';

export const addImageV2 = url => {
  const promise = new Promise((resolve, reject) => {
    const callback = (error, values) => {
      error ? reject('Image load failed') : resolve(values);
    };
    addImage(url, callback);
  });
  return promise;
};

// examples

const promiseCHeck = addImageV2('https://server.com/image.png');
// promiseCHeck.then(data => console.log(data)); // ==> { width: 200, height: 100 }
// promiseCHeck.catch(error => console.log(error)); // ==> 'Image load failed'
