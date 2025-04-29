


function toggleVideo(){
  let trailer = document.querySelector(".trailer");
  let video = document.querySelector("video");
  video.pause();
  trailer.classList.toggle("active");
}

function changeBg(bg, title){
  let banner = document.querySelector(".banner");
  let contents = document.querySelectorAll(".content");
  banner.style.background = `url("./image/${bg}")`;
  banner.style.backgroundSize = 'cover';
  banner.style.backgroundPosition = 'center';
  banner.style.backgroundRepeat = 'no-repeat';

  contents.forEach(content => {
    content.classList.remove('active');
    if(content.classList.contains(title)){
      content.classList.add('active');
    }
 });

}