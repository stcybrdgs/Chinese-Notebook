/*
===================================================
  JavaScript Scripts for Chinese Notebook 
  2016, Stacy Bridges
===================================================
*/

// prime lesson 1 audio on page load by inserting 1 into URL:
location.hash = 1;

//------------------------------------------------------------
// include js behavior for swapping dialogue 1 and dialogue 2
// per the following methods: 
// updateLessonHeader(), loadD1(), loadD2(), resetAudio(dialogue)
function updateLessonHeader(){
    // get values needed to update the lesson header
    var header = document.getElementById("lessonHeader");    
    var hashVal = location.hash;
    var lesson;
    if( hashVal.length == 3 ) lesson = hashVal.slice(2,3);
    else lesson = hashVal.slice(2,4);    

    // update the lesson header
    if( lesson == 1 ) header.innerHTML = "<span class='noWrap def' data-toggle='popover' title='问好' data-content='w&#232;nh&#462;o - greetings' data-placement='top' data-trigger='click'>问好</span>: "; 
    else if( lesson == 2 ) header.innerHTML = "<span class='def noWrap' data-toggle='popover' title='家庭' data-content='ji&#257;t&#237;ng - family' data-placement='top' data-trigger='click'>家庭</span>: ";    
    else if( lesson == 3 ) header.innerHTML = "<span class='def noWrap' data-toggle='popover' title='看朋友' data-content='k&#224;n  p&#233;ngy&#466;u - visiting friends' data-placement='top' data-trigger='click'>看朋友</span>: ";     
    else if( lesson == 4 ) header.innerHTML = "<span class='def noWrap' data-toggle='popover' title='小吃' data-content='xi&#462;och&#299; - snacks' data-placement='top' data-trigger='click'>小吃</span>: ";  

    // enable popovers
    $('[data-toggle = "popover"]').popover();     
}
//       
function loadD1(){      
    document.getElementById("d1").style.display="block";       
    document.getElementById("d2").style.display="none";
    document.getElementById("dialogueHeader").innerHTML = "第一会话";
    updateLessonHeader();
    resetAudio('1'); 
}
//
function loadD2(){
    document.getElementById("d1").style.display="none";       
    document.getElementById("d2").style.display="block";
    document.getElementById("dialogueHeader").innerHTML = "第二会话";    
    resetAudio('2'); 
}
//
function resetAudio(dialogue){
    music.currentTime = 0;              // reset playback time
    playhead.style.marginLeft = "0px";  // reset playback head
    pButton.className = "";
    pButton.className = "play";         // swap control image from pause to play

    // load target audio file 
    var hashVal = location.hash;
    var lesson;
    var track;    
    if( hashVal.length == 3 ) lesson = hashVal.slice(2,3);
    else lesson = hashVal.slice(2,4);

    if(music.canPlayType('audio/ogg')){
        track = 'audio/L' + lesson + '_D' + dialogue + '.ogg'; 
        document.getElementById('audioTrackOgg').setAttribute('src', track);        
    }
    else{
        track = 'audio/L' + lesson + '_D' + dialogue + '.mp3';
        document.getElementById('audioTrackMp3').setAttribute('src', track);
    }
    
    document.getElementById('downloadTrack').setAttribute('href', track);

    music.src = track;                  // set audio source
    music.load();                       // load audio source
 }

//------------------------------------------------------------
// include js behavior for the custom audio player
//
var music = document.getElementById('music');       // id for audio element
var duration;                                       // Duration of audio clip
var pButton = document.getElementById('pButton');   // play button
var playhead = document.getElementById('playhead'); // playhead
var timeline = document.getElementById('timeline'); // timeline
var timelineWidth = timeline.offsetWidth -          // timeline width adjusted for playhead
                    playhead.offsetWidth;


music.addEventListener("timeupdate", timeUpdate, false); // timeupdate event listener

// Make the timeline clickable
timeline.addEventListener("click", function (event) {
    moveplayhead(event);
    music.currentTime = duration * clickPercent(event);
}, false);

// return click as decimal (.77) of the total timelineWidth
function clickPercent(e) {
    return (e.pageX - timeline.offsetLeft) / timelineWidth;
}

// Makes playhead draggable 
playhead.addEventListener('mousedown', mouseDown, false);
window.addEventListener('mouseup', mouseUp, false);

// Boolean value so that mouse is moved on mouseUp only when the playhead is released 
var onplayhead = false;

// mouseDown EventListener
function mouseDown() {
    onplayhead = true;
    window.addEventListener('mousemove', moveplayhead, true);
    music.removeEventListener('timeupdate', timeUpdate, false);
}

// mouseUp EventListener: getting input from all mouse clicks
function mouseUp(e) {
    if (onplayhead == true) {
        moveplayhead(e);
        window.removeEventListener('mousemove', moveplayhead, true);
        // change current time
        music.currentTime = duration * clickPercent(e);
        music.addEventListener('timeupdate', timeUpdate, false);
    }
    onplayhead = false;
}

// mousemove EventListener: moves playhead as user drags
function moveplayhead(e) {
    var newMargLeft = e.pageX - timeline.offsetLeft;
    if (newMargLeft >= 0 && newMargLeft <= timelineWidth) {
        playhead.style.marginLeft = newMargLeft + "px";
    }
    if (newMargLeft < 0) {
        playhead.style.marginLeft = "0px";
    }
    if (newMargLeft > timelineWidth) {
        playhead.style.marginLeft = timelineWidth + "px";
    }
}

// timeUpdate() synchronizes playhead position with current point in audio 
function timeUpdate() {
    var playPercent = timelineWidth * (music.currentTime / duration);
    playhead.style.marginLeft = playPercent + "px";
    if (music.currentTime == duration) {
        pButton.className = "";
        pButton.className = "play";
    }
}

// Play and Pause
function play() {
    // start music
    if (music.paused) {
        music.play();
        // remove play, add pause
        pButton.className = "";
        pButton.className = "pause";
    } else { // pause music
        music.pause();
        // remove pause, add play
        pButton.className = "";
        pButton.className = "play";
    }
}

// Get the audio file duration
music.addEventListener("canplaythrough", function () {
    duration = music.duration;  
}, false);