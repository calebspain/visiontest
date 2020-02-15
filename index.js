const vision = require('@google-cloud/vision');

const client = new vision.ImageAnnotatorClient();

const fileName = './tates2.jpg';

async function getTextFromImage() {
    const [result] = await client.textDetection(fileName);
    const detections = result.textAnnotations;
    console.log(`Text: \n${detections[0].description}`);
}

getTextFromImage();