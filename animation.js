function animation() {
  const animationBtn = document.querySelector('#gacha')

  let img = new Image();
  img.src = 'https://cdn.glitch.global/a8f0b14c-219b-43d1-a0dc-802146a1b8dd/sprite%20sheet.png?v=1681083142128';
  img.onload = function() {
    init();
  };

  let canvas = document.querySelector('#animationCanvas');
  let ctx = canvas.getContext('2d');
  let timerId;

  const width = 938;
  const height = 1363;

  let frameX = 0;

  function drawFrame(frameX) {
    ctx.drawImage(img,
                  frameX * width, 0, width, height,
                  0, 0, canvas.width, canvas.height);
  };

  drawFrame(frameX);
  animationBtn.addEventListener('click', () => {

    let spriteCount = 0;

    function play(){
      drawFrame(spriteCount);
      spriteCount++;
      if (spriteCount > 9) {
        spriteCount = 9;
      }
    };

    timerId = setInterval(play, 300);

    });
    
    function init() {
      window.requestAnimationFrame(drawFrame(0));
    };

}
document.addEventListener('DOMContentLoaded', () => animation());
