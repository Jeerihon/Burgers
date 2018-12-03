const videoEl = document.querySelector('.work__video-window'),
  videoWindow = $('.work__video-window'),
  videoContainer = $('.work__player'),
  playBtns = $('.playBtn'),
  volumeBtn = $('.player__volume'),
  volumeLevelBtn = $('.player__bar--volume').after;


// play video for click on buttons

$('.playBtn').on('click', e => {
  playVideo();
});

// play video for click on video window

$('.work__video-window').on('click', e => {
  playVideo();
});

// click on volume button

$('.player__volume').on('click', e => {
  if (videoEl.volume > 0) {
    videoEl.volume = 0;
    $('.player__volume-btn').css('left', '0');
  } else {
    videoEl.volume = .5;
    $('.player__volume-btn').css('left', '90%');
  };
  volumeBtn.toggleClass('player__volume--mute');
});

// volume setting

$('.player__scroll--volume').mousedown(function (e) {
  let newPos = e.pageX - $(e.currentTarget).offset().left,
    minPos = $(e.currentTarget).offset().left,
    maxPos = minPos + $('.player__scroll--volume').width(),
    width = maxPos - minPos,
    clickPos = (newPos / width) * 100,
    volumeLevel = (clickPos / 100).toFixed(1);

  videoEl.volume = volumeLevel;

  $('.player__volume-btn').css('left', volumeLevel * 90 + '%');
  volumeBtn.removeClass('player__volume--mute');

  if (videoEl.volume === 0) {
    volumeBtn.addClass('player__volume--mute');
  }
});

// video duration
videoEl.oncanplay = function() {
  let duration = videoEl.duration;
  
  videoEl.onplay = function() {
    let interval;
    clearInterval(interval);
    
    interval = setInterval(() => {
      const completed = videoEl.currentTime;
      const percent = (completed / duration) * 100;
      $('.player__progress-btn').css('left', percent + '%');
    }, 10);
  }
};

$('.player__scroll--progress').on('click', e => {
  let newPos = e.pageX - $(e.currentTarget).offset().left,
    minPos = $(e.currentTarget).offset().left,
    maxPos = minPos + $('.player__scroll--progress').width(),
    width = maxPos - minPos,
    newTime = ((newPos / width) * 100).toFixed(0),
    newDuration = (videoEl.duration / 100) * newTime;

    console.log(newTime)
  
  videoEl.currentTime = newDuration;
  $('.player__progress-btn').css('left', newTime * 100 + '%');
});
  

  // const leftPos = this.getBoundingClientRect().left;
  //     const rightPos = this.getBoundingClientRect().right;
  //     const width = rightPos - leftPos;
  //     const newButtonPos = e.pageX - leftPos;
  //     const clickedPercent = (newButtonPos / width) * 100;
  //     const newPlayerTime = (player.duration / 100) * clickedPercent;
  //     player.currentTime = newPlayerTime;
  //     changeButtonPos(clickedPercent);
  //   })

const playVideo = function () {
  if (videoEl.paused) {
    videoEl.play();
  } else {
    videoEl.pause();
  };
  videoContainer.toggleClass('player--active');
};
