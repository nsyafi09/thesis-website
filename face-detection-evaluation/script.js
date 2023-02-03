const recordEl = document.getElementById("record")
const stopEl = document.getElementById("stop")

const video = document.getElementById('video')
const recordJSON = []

function startRecrodData() {
  // var cameraOn = true
  Promise.all([
    faceapi.nets.tinyFaceDetector.loadFromUri('/models'),
    faceapi.nets.faceLandmark68Net.loadFromUri('/models'),
    faceapi.nets.faceRecognitionNet.loadFromUri('/models'),
    faceapi.nets.faceExpressionNet.loadFromUri('/models')
  ]).then(startVideo)

  recordData()
  
}

function startVideo() {
  navigator.getUserMedia(
    { video: {} },
    stream => video.srcObject = stream,
    err => console.error(err)
  )
}

function recordData() {
  video.addEventListener('play', () => {
    const canvas = faceapi.createCanvasFromMedia(video)
    document.body.append(canvas)
    const displaySize = { width: video.width, height: video.height }
    faceapi.matchDimensions(canvas, displaySize)
    setInterval(async () => {
      const detections = await faceapi.detectAllFaces(video, new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks().withFaceExpressions()
      const resizedDetections = faceapi.resizeResults(detections, displaySize)
      canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height)
      faceapi.draw.drawDetections(canvas, resizedDetections)
      // faceapi.draw.drawFaceLandmarks(canvas, resizedDetections)
      faceapi.draw.drawFaceExpressions(canvas, resizedDetections)
      try {
        console.log(JSON.stringify(detections[0].expressions))
        recordJSON.push(JSON.stringify(detections[0].expressions)+"\n")
      } catch (error) {
      }
    }, 100)
  })
}

function saveText(text, filename){
  var a = document.createElement('a');
  a.setAttribute('href', 'data:text/plain;charset=utf-8,'+encodeURIComponent(text));
  a.setAttribute('download', filename);
  a.click()
}

function saveRecord() {
  console.log("This is the recorded")
  console.log(recordJSON)
  saveText( recordJSON, "data.json" );
}



// function stopRecord() {
//   cameraOn = false
// }

// cameraOpen()



// Function Starts here

// recordEl.addEventListener("click", function startRecordData() {});