function changeImage() {
    let itemId = document.getElementById("item-id").value;
    let beforeImg = document.getElementById("before");
    let afterImg = document.getElementById("after");
    beforeImg.src = "before-image-" + itemId + ".png";
    afterImg.src = "after-image-" + itemId + ".png";
  
    beforeImg.addEventListener("mousemove", function(event) {
      let x = event.clientX;
      let y = event.clientY;
      let beforeImgWidth = beforeImg.width;
      let beforeImgHeight = beforeImg.height;
      let xPercent = (x / beforeImgWidth) * 100;
      let yPercent = (y / beforeImgHeight) * 100;
      beforeImg.style.clipPath = "polygon(0 0, " + xPercent + "% 0%, " + xPercent + "% " + yPercent + "%, 0% " + yPercent + "%)";
    });
    
  }
  