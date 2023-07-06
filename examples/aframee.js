


// import { RGBELoader } from "https://cdn.skypack.dev/three@0.136/examples/jsm/loaders/RGBELoader.js";
const nav = document.querySelector("#myNav")
// nav.setAttribute("gltf-model" , "#my-nav-lower")



const navElement = document.querySelector("#myNav");
const navMeshes = [
  "./optional Assets/lowernav.glb",
  "./optional Assets/uppernav1.glb"
];
navElement.setAttribute("gltf-model", navMeshes[0]);
let currentNavMeshIndex = 0;



var scene = document.querySelector('a-scene');
const preloader = document.querySelector(".preloader")
if (scene.hasLoaded) {
  run();
  preloader.style.display = "none"
} else {
  scene.addEventListener('loaded', run);
}

function run () {
  // // var entity = scene.querySelector('a-entity');
  // // entity.setAttribute('material', 'color', 'red');



  const videos = document.querySelectorAll("video")
 console.log(videos)
  for (let i = 0; i < videos.length; i++) {
    
    videos[i].play()
    // videos[i].autoplay = true
    videos[i].muted = true
    videos[i].setAttribute("playsinline", true);
    videos[i].setAttribute("controls", true);
    videos[i].setAttribute("preload", "auto");
    
  }

const iframeVideo = document.querySelector("#iframe")
iframeVideo.pause()
  console.log('Scene Was Loaded')
  preloader.style.display = "none"
}


// AFRAME.scenes[0].addEventListener('loaded', function() {


AFRAME.registerComponent('click-animation', {
    init: function () {
      // Add a click event listener to the entity
// const camera = document.querySelector
      const elevator = document.querySelector("#elevator")
const camera = document.querySelector("#rig")
const camera1 = document.querySelector("#player")
const btn = document.querySelector("#floorbtn")
// const nav = document.querySelector("#myNav")
const door = document.querySelector("#elevatorDoor")
const model = document.querySelector("#myModel")
const allVideos = document.querySelector("#vids")
const texts = document.querySelector("#allTexts")


      this.el.addEventListener('click', function () {
        console.log("CLICKED")
        // Set the animation property on the entity

        camera.setAttribute('animation', {
          property: 'position',
          to: '-0.8 0 21',
          loop: false,
          dur: 0
        });



        navElement.setAttribute("gltf-model", navMeshes[1]);
setTimeout( function () {
  


        elevator.setAttribute('animation', {
          property: 'position',
          to: '0 10 0',
          loop: false,
          dur: 5000
        });

        // btn.setAttribute('animation', {
        //     property: 'position',
        //     to: '1.25971 11.07728 22.3114',
        //     loop: false,
        //     dur: 5000
        //   });


          camera1.setAttribute('animation', {
            property: 'position',
            to: '0 11.5 0',
            loop: false,
            dur: 5000
          });

          door.setAttribute('animation', {
            property: 'position',
            to: '0 9 -1.65',
            loop: false,
            dur: 5000
          });

    


        },2000)
       

  
   nav.setAttribute("gltf-model" , "#my-nav-upper")
   console.log(nav.attributes)

          door.setAttribute('animation', {
            property: 'position',
            to: '0 -1 -1.65',
            loop: false,
            dur: 2000
          });


        

          camera.setAttribute('animation' , {
            property: 'position',
                      to: '-0.1 0.14367 21.31478',
                      loop: false,
                      dur: 9500
           })



setTimeout( function () {
  door.setAttribute('animation', {
    property: 'position',
    to: '0 9 -3.75',
    loop: false,
    dur: 2000
  });

},7500)

nav.removeAttribute("gltf-model")


      });
    }
  });



  AFRAME.registerComponent('play-pause', {
    init: function () {
        var myVideo = document.querySelector('#iframe');
        var videoControls = document.querySelector('#videoControls');
   
        this.el.addEventListener('click', function () {
            if (myVideo.paused) {
                myVideo.play();
                videoControls.setAttribute('src', '#pause');
        
            } else {
                myVideo.pause();
                videoControls.setAttribute('src', '#play');
               
            }

            console.log("clicked")
        });


    
    }
});

if (AFRAME.utils.device.isMobile()) {
  // Mobile device detected
  console.log('Mobile device detected');
  const camera = document.querySelector("#rig")
  camera.setAttribute('movement-controls' , 'speed: 0.23; constrainToNavMesh: true')

} else {
  // Desktop or non-mobile device detected
  console.log('Desktop or non-mobile device detected');
  // Add your desktop-specific code or logic here
}






AFRAME.registerComponent('vr-mode-ui-if-headset', {
  dependencies: ['vr-mode-ui'],
  init: function () {
    if (!AFRAME.utils.device.checkHeadsetConnected()) {
      this.el.setAttribute('vr-mode-ui', 'enabled', false);
    }
  }
})









AFRAME.registerComponent('click-animation2', {
  init: function () {
    // Add a click event listener to the entity
// const camera = document.querySelector
    const elevator = document.querySelector("#elevator")
const camera = document.querySelector("#rig")
const camera1 = document.querySelector("#player")
const btn = document.querySelector("#floorbtn")
// const nav = document.querySelector("#myNav")
const door = document.querySelector("#elevatorDoor")
const model = document.querySelector("#myModel")
const allVideos = document.querySelector("#vids")
const texts = document.querySelector("#allTexts")


    this.el.addEventListener('click', function () {
      console.log("CLICKED")
      // Set the animation property on the entity

      camera.setAttribute('animation', {
        property: 'position',
        to: '-0.8 0 21',
        loop: false,
        dur: 0
      });



      navElement.setAttribute("gltf-model", navMeshes[0]);
setTimeout( function () {



      elevator.setAttribute('animation', {
        property: 'position',
        to: '0 0 0',
        loop: false,
        dur: 5000
      });

    

        camera1.setAttribute('animation', {
          property: 'position',
          to: '0 1.6 0',
          loop: false,
          dur: 5000
        });

        door.setAttribute('animation', {
          property: 'position',
          to: '0 -1 -1.65',
          loop: false,
          dur: 5000
        });


      


      },2000)
     


 nav.setAttribute("gltf-model" , "#my-nav-upper")
 console.log(nav.attributes)

        door.setAttribute('animation', {
          property: 'position',
          to: '0 9 -1.65',
          loop: false,
          dur: 2000
        });

        camera.setAttribute('animation' , {
          property: 'position',
                    to: '-0.1 0.14367 21.31478',
                    loop: false,
                    dur: 9500
         })


setTimeout( function () {
door.setAttribute('animation', {
  property: 'position',
  to: '0 -1 -3.75',
  loop: false,
  dur: 2000
});

},7500)

nav.removeAttribute("gltf-model")


    });
  }
});


// Wait for the DOM to be fully loaded

