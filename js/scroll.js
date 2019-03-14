
new fullpage('#fullpage', {
  anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6'],
	licenseKey: 'A4E5D4AE-6B27448C-A44E07C8-0EF0E40B',
  responsive: 1199.98
});
var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene);


// if (window.matchMedia("(max-width: 600px)").matches) {
//   fullpage_api.setAutoScrolling(false);
// } else {
//   fullpage_api.setAutoScrolling(true);
// }
