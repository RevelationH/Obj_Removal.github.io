function createTrackLocationHandler(containerId, clipperId) {
  var videoContainer = document.getElementById(containerId),
      videoClipper = document.getElementById(clipperId),
      clippedVideo = videoClipper.getElementsByTagName("video")[0];

  return function(e) {
    var rect = videoContainer.getBoundingClientRect(),
        position = ((e.pageX - rect.left) / videoContainer.offsetWidth) * 100;
    if (position <= 100) { 
      videoClipper.style.width = position + "%";
      clippedVideo.style.width = ((100 / position) * 100) + "%";
      clippedVideo.style.zIndex = 3;
    }
  };
}

// 为第一个视频容器设置事件处理
var trackLocation1 = createTrackLocationHandler("video-compare-container-1", "video-clipper-1");
var videoContainer1 = document.getElementById("video-compare-container-1");
videoContainer1.addEventListener("mousemove", trackLocation1, false); 
videoContainer1.addEventListener("touchstart", trackLocation1, false);
videoContainer1.addEventListener("touchmove", trackLocation1, false);

// 为第二个视频容器设置事件处理
var trackLocation2 = createTrackLocationHandler("video-compare-container-2", "video-clipper-2");
var videoContainer2 = document.getElementById("video-compare-container-2");
videoContainer2.addEventListener("mousemove", trackLocation2, false); 
videoContainer2.addEventListener("touchstart", trackLocation2, false);
videoContainer2.addEventListener("touchmove", trackLocation2, false);

var trackLocation3 = createTrackLocationHandler("video-compare-container-3", "video-clipper-3");
var videoContainer3 = document.getElementById("video-compare-container-3");
videoContainer3.addEventListener("mousemove", trackLocation3, false); 
videoContainer3.addEventListener("touchstart", trackLocation3, false);
videoContainer3.addEventListener("touchmove", trackLocation3, false);

var trackLocation4 = createTrackLocationHandler("video-compare-container-4", "video-clipper-4");
var videoContainer4 = document.getElementById("video-compare-container-4");
videoContainer4.addEventListener("mousemove", trackLocation4, false); 
videoContainer4.addEventListener("touchstart", trackLocation4, false);
videoContainer4.addEventListener("touchmove", trackLocation4, false);

var trackLocation5 = createTrackLocationHandler("video-compare-container-5", "video-clipper-5");
var videoContainer5 = document.getElementById("video-compare-container-5");
videoContainer5.addEventListener("mousemove", trackLocation5, false); 
videoContainer5.addEventListener("touchstart", trackLocation5, false);
videoContainer5.addEventListener("touchmove", trackLocation5, false);
