
//       video.onloadeddata = function() {
//       return Promise.resolve(1);

const state = {
  backend: 'webgl'
};
const stats = new Stats();
stats.showPanel(0);
document.body.appendChild(stats.dom);

        async function main() {
            // Load the MediaPipe handpose model.
            // const vids = await video.onloadeddata;
          
            const model = await handpose.load();
          
            
          
            
            // Pass in a video stream (or an image, canvas, or 3D tensor) to obtain a
            // hand prediction from the MediaPipe graph.
            
                
            
            const predictions = await model.estimateHands(video);
            // function hi(){
              var length = predictions.length;
            
             
              predictions.forEach(async function(predictions) {
                         
            
              for (let i = 0; i < length; i++) {
                const keypoints = predictions[i].landmarks;
                console.log(keypoints)
                magic =true;
                // draw();
                console.log(magic);}
              //   console.clear();
              //   const keypoints = predictions.landmarks;
              // console.log(predictions)}
              // else{
              //   console.log("i am empty")
              // }
               if(length == 0){
                magic = false;
                console.log(magic);
                ctx.clearRect(x,y,width,height);
              }
            });
              // setInterval(main,500);}
                
              
              // }
            // }
            
            // hi();
           
            // if (predictions.length > 0) {
        //       // console.log("i am also here")
        //       /*
        //       `predictions` is an array of objects describing each detected hand, for example:
        //       [
        //         {
        //           handInViewConfidence: 1, // The probability of a hand being present.
        //           boundingBox: { // The bounding box surrounding the hand.
        //             topLeft: [162.91, -17.42],
        //             bottomRight: [548.56, 368.23],
        //           },
        //           landmarks: [ // The 3D coordinates of each hand landmark.
        //             [472.52, 298.59, 0.00],
        //             [412.80, 315.64, -6.18],
        //             ...
        //           ],
        //           annotations: { // Semantic groupings of the `landmarks` coordinates.
        //             thumb: [
        //               [412.80, 315.64, -6.18]
        //               [350.02, 298.38, -7.14],
        //               ...
        //             ],
        //             ...
        //           }
        //         }
        //       ]
        //       */
          
              // for (let i = 0; i < predictions.length; i++) {
              //   const keypoints = predictions[i].landmarks;
              //   // console.log(keypoints)
          
              //   // // Log hand keypoints.
              //   for (let i = 0; i < keypoints.length; i++) {
              //     const [x, y, z] = keypoints[i];
              //     console.log(`Keypoint ${i}: [${x}, ${y}, ${z}]`);
              //   }
              // }
        
      
               }
           
              
          
            
          
          video.addEventListener("loadeddata", main);
        