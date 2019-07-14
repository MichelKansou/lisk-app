import { Buffer } from 'buffer';
import jpeg from 'jpeg-js';

global.Buffer = Buffer;

const scanImageData = (imageBase64) => {
    const jpegData = Buffer.from(imageBase64, 'base64');
    const rawImageData = jpeg.decode(jpegData);
    
    let clampedArray = new Uint8ClampedArray(rawImageData.data.length);

    for (let i = 0; i < rawImageData.data.length; i++) {
      clampedArray[i] = rawImageData.data[i];
    }

    return Promise.all(clampedArray);
} 

export default scanImageData;