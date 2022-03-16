console.log('test global');


// // When the DOM is ready
// $(function() {
  
//     // Init ScrollMagic Controller
//     var scrollMagicController = new ScrollMagic();
    
//     // Animation will be ignored and replaced by scene value in this example
//     var tween = TweenMax.staggerFromTo('.animation', 0.5,
//       {
//           scale: .95,
//           // y: 550,
//           opacity: 0
//       },
//       {
//         scale: 1,
//         opacity: 1,
//         // y: 0
//         // backgroundColor: 'rgb(255, 39, 46)',
//         // scale: 1,
//         // transform:translateY(200px),
//         // rotation: 360
//         // y:40,
       
//       },
//       0.4
//   );
    
//     // // Create the Scene and trigger when visible
//     // var scene = new ScrollScene({
//     //   triggerElement: '.scene',
//     //   duration: 50 /* How many pixels to scroll / animate */
//     // })
//     // .setTween(tween)
//     // .addTo(scrollMagicController);
    
//     // // Add debug indicators fixed on right side
//     //  scene.addIndicators();


//     //  $(document).scroll(function() {
//     //   var alpha = Math.min(0.5 + 0.4 * $(this).scrollTop() / 100, 0.9);
//     //   var channel = Math.round(alpha * 255);
//     //   $("#project").css('background-color', 'red');
//     // });
    
//   });