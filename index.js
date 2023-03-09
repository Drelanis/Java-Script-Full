import { addImage } from './addImage.js';

export const addImageV2 = url => {
  const promise = new Promise((resolve, reject) => {
    addImage(url);
    const { width, height } = document.querySelector('img');
    resolve({ width, height });
  });
  return promise;
};

// examples

const promiseCHeck = addImageV2(
  'https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg',
);
promiseCHeck.then(data => console.log(data)); // ==> { width: 200, height: 100 }
promiseCHeck.catch(error => console.log(error)); // ==> 'Image load failed'
