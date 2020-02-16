const vision = require('@google-cloud/vision')

const client = new vision.ImageAnnotatorClient()

const fileName = 'https://images2.opb.org/c_limit%2Ch_1000%2Cq_90%2Cw_640/4w0c3595_1573153436461.jpg'

let getTextFromImage = async () => {
    const [result] = await client.textDetection(fileName)
    const detections = result.textAnnotations
    console.log(`Text: \n${detections[0].description}`)
}

module.exports = getTextFromImage