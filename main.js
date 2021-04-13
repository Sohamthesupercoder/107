




Webcam.set({
    width: 320,
    height: 240,
    image_format: 'jpeg',
    jpeg_quality: 90
  });




  camera=document.getElementById("camera");
  Webcam.attach(camera);
  
  console.log("ml5 version: ",ml5.version);
  
  
  function captureImage() {
    Webcam.snap(function(data_uri){
      document.getElementById("result").innerHTML="<img id='captured_photo' src='" + data_uri + "'>";
    });
  
  }
  
  classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/VEPY29Nnw/model.json",modelLoaded);
  
  
  function modelLoaded(){
    console.log("modelLoaded");
  }  


