// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement("script");

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.

function onYouTubeIframeAPIReady() {
  new YT.Player("player", {
    videoId: "An6LvWQuj_8",
    // 유트브 동영상에 v= 뒤에 있는 id
    playerVars: {
      autoplay: true,
      loop: true,
      playlist: "An6LvWQuj_8", //반복 재생을 할 경우 다시 id 값 기입
    }, //영상을 제어하기 위한 변수
    events: {
      onReady: function (event) {
        event.target.mute(); //음소거
      },
    },
  });
}
