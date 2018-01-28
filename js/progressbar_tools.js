// // INIT PROGRESSBAR

// // Here you can choose bars color
// var barColor = '#E45064';
// var percentColor = "#ebebeb"

// var bar1 = new ProgressBar.Line(progressline_1,{
//   strokeWidth: 6,
//   easing: 'easeInOut',
//   duration: 1400,
//   color: barColor,
// 	trailWidth: 1,
//   svgStyle: {width: '100%', height: '100%'},
//   text: {
//     style: {
//       // Text color.
//       // Default: same as stroke color (options.color)
//       position: 'absolute',
//       color: percentColor,
//       right: '0',
//       top: '30px',
//       padding: 0,
//       margin: 0,
//       transform: null
//     },
//     autoStyleContainer: false
//   },
//   step: function(state, bar) {
//     bar.setText(Math.round(bar.value() * 100) + ' %');
//   }
// });

// var bar2 = new ProgressBar.Line(progressline_2,{
//   strokeWidth: 6,
//   easing: 'easeInOut',
//   duration: 1400,
//   color: barColor,
//   trailWidth: 1,
//   svgStyle: {width: '100%', height: '100%'},
//   text: {
//     style: {
//       // Text color.
//       // Default: same as stroke color (options.color)
//       position: 'absolute',
//       color: percentColor,
//       right: '0',
//       top: '30px',
//       padding: 0,
//       margin: 0,
//       transform: null
//     },
//     autoStyleContainer: false
//   },
//   step: function(state, bar) {
//     bar.setText(Math.round(bar.value() * 100) + ' %');
//   }
// });

// var bar3 = new ProgressBar.Line(progressline_3,{
//   strokeWidth: 6,
//   easing: 'easeInOut',
//   duration: 1400,
//   color: barColor,
//   trailWidth: 1,
//   svgStyle: {width: '100%', height: '100%'},
//   text: {
//     style: {
//       // Text color.
//       // Default: same as stroke color (options.color)
//       position: 'absolute',
//       color: percentColor,
//       right: '0',
//       top: '30px',
//       padding: 0,
//       margin: 0,
//       transform: null
//     },
//     autoStyleContainer: false
//   },
//   step: function(state, bar) {
//     bar.setText(Math.round(bar.value() * 100) + ' %');
//   }
// });

// var bar4 = new ProgressBar.Line(progressline_4,{
//   strokeWidth: 6,
//   easing: 'easeInOut',
//   duration: 1400,
//   color: barColor,
//   trailWidth: 1,
//   svgStyle: {width: '100%', height: '100%'},
//   text: {
//     style: {
//       // Text color.
//       // Default: same as stroke color (options.color)
//       position: 'absolute',
//       color: percentColor,
//       right: '0',
//       top: '30px',
//       padding: 0,
//       margin: 0,
//       transform: null
//     },
//     autoStyleContainer: false
//   },
//   step: function(state, bar) {
//     bar.setText(Math.round(bar.value() * 100) + ' %');
//   }
// });




// $(document).scroll(function () {
//     s_top = $("body").scrollTop() + $(window).height();
//     yes = $("#progressbar").offset().top;
//     if(s_top > yes){
//       bar1.animate(0.6);
//       setTimeout('bar2.animate(0.3)' , 500);
//       setTimeout('bar3.animate(0.9)' , 1000);
//       setTimeout('bar4.animate(0.4)' , 1500);
//     }
// });
