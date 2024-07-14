// homeWork :

function upDate(previewPic) {

    console.log('upDate function triggered');
    console.log('previewPic.alt: ', previewPic.alt)
    console.log('previewPic.src: ', previewPic.src)

    document.getElementById('bigimage').innerHTML = previewPic.alt;

    document.getElementById('bigimage').style.backgroundImage = `url(${previewPic.src})`;

}

function unDo() {
    console.log('undo function triggered');

    document.getElementById('bigimage').innerHTML = "Hover over an image below to display here."

    document.getElementById('bigimage').style.backgroundImage = 'url("")';
    
}

//btn darkmood
function myFunction() {
    document.getElementById('frame').setAttribute("class", "darkmood"); 

    document.getElementById('top').setAttribute("class", "changeh1"); 

  }

//Show random movie banners
function pickImage() {

    arrayimg = ["movie1.jpg", "movie2.jpg", "movie3.jpg", "movie4.jpg", "movie5.jpg", "movie6.jpg", "movie7.jpg", "movie8.jpg"]
    randomimg = "Images/" + arrayimg[Math.floor(Math.random() * arrayimg.length)];

    img = document.querySelector(".adviseimg")
    img.setAttribute("src",randomimg)
    img.setAttribute("alt","")


    arrayimg2 = ["movie1.jpg", "movie2.jpg", "movie3.jpg", "movie4.jpg", "movie5.jpg", "movie6.jpg", "movie7.jpg", "movie8.jpg"]
    randomimg2 = "Images/" + arrayimg2[Math.floor(Math.random() * arrayimg2.length)];
    
    img2 = document.querySelector(".adviseimg2")
    img2.setAttribute("src",randomimg2)
    img2.setAttribute("alt","")

    arrayimg3 = ["movie1.jpg", "movie2.jpg", "movie3.jpg", "movie4.jpg", "movie5.jpg", "movie6.jpg", "movie7.jpg", "movie8.jpg"]
    randomimg3 = "Images/" + arrayimg3[Math.floor(Math.random() * arrayimg3.length)];
    
    img3 = document.querySelector(".adviseimg3")
    img3.setAttribute("src",randomimg3)
    img3.setAttribute("alt","")

    arrayimg4 = ["movie1.jpg", "movie2.jpg", "movie3.jpg", "movie4.jpg", "movie5.jpg", "movie6.jpg", "movie7.jpg", "movie8.jpg"]
    randomimg4 = "Images/" + arrayimg4[Math.floor(Math.random() * arrayimg4.length)];
    
    img4 = document.querySelector(".adviseimg4")
    img4.setAttribute("src",randomimg4)
    img4.setAttribute("alt","")

    arrayimg5 = ["movie1.jpg", "movie2.jpg", "movie3.jpg", "movie4.jpg", "movie5.jpg", "movie6.jpg", "movie7.jpg", "movie8.jpg"]
    randomimg5 = "Images/" + arrayimg5[Math.floor(Math.random() * arrayimg5.length)];
    
    img5 = document.querySelector(".adviseimg5")
    img5.setAttribute("src",randomimg5)
    img5.setAttribute("alt","")

    arrayimg6 = ["movie1.jpg", "movie2.jpg", "movie3.jpg", "movie4.jpg", "movie5.jpg", "movie6.jpg", "movie7.jpg", "movie8.jpg"]
    randomimg6 = "Images/" + arrayimg6[Math.floor(Math.random() * arrayimg6.length)];
    
    img6 = document.querySelector(".adviseimg6")
    img6.setAttribute("src",randomimg6)
    img6.setAttribute("alt","")
  }
    
    
    
    



  
//final javascript 

document.addEventListener("DOMContentLoaded", function() {
  const images = document.querySelectorAll('.advise img');
  const cert = document.querySelectorAll('.item img');
  const modal = document.getElementById("modal");
  const modalContent = document.getElementById("modal-content");
  const closeButton = document.getElementById("close-button");

  //1 apply in الشهادات والبنرات العشوائية
  function addTabFocusAttributes() {
      console.log('Page loaded. Adding tabindex attributes.');
      for (let i = 0; i < images.length; i++) {
          images[i].setAttribute('tabindex', '0');
          images[i].addEventListener('focus', onFocus);
          images[i].addEventListener('blur', onBlur);
      }
  } 
  function addTabFocusAttributes() {
    console.log('Page loaded. Adding tabindex attributes.');
    for (let i = 0; i < cert.length; i++) {
        cert[i].setAttribute('tabindex', '0');
        cert[i].addEventListener('focus', onFocus);
        cert[i].addEventListener('blur', onBlur);
    }
} 
//Event
  function onFocus(event) {
      event.target.classList.add('focused');
  }

  function onBlur(event) {
      event.target.classList.remove('focused');
  }

  function onMouseOver(event) {
      event.target.classList.add('focused');
  }

  function onMouseLeave(event) {
      event.target.classList.remove('focused');
  }
//2
  for (let i = 0; i < images.length; i++) {
      images[i].addEventListener('mouseover', onMouseOver);
      images[i].addEventListener('mouseleave', onMouseLeave);
  }
  for (let i = 0; i < cert.length; i++) {
    cert[i].addEventListener('mouseover', onMouseOver);
    cert[i].addEventListener('mouseleave', onMouseLeave);
}

  window.addEventListener('load', addTabFocusAttributes);

  //select a banner or cert and focus(zoom) in img and close focus(zoom)
  images.forEach((img, index) => {

    img.addEventListener("click", () => {
      modalContent.src = img.src;
      modal.style.display = "block";
    });

    img.addEventListener("mouseover", () => {
      img.classList.add("active");
    });

    img.addEventListener("mouseleave", () => {
      img.classList.remove("active");
    });

    img.addEventListener("focus", () => {
      img.classList.add("active");
    });

    img.addEventListener("blur", () => {
      img.classList.remove("active");
    });
    
  });
//3
  cert.forEach((img, index) => {

    img.addEventListener("click", () => {
      modalContent.src = img.src;
      modal.style.display = "block";
    });

    img.addEventListener("mouseover", () => {
      img.classList.add("active");
    });

    img.addEventListener("mouseleave", () => {
      img.classList.remove("active");
    });

    img.addEventListener("focus", () => {
      img.classList.add("active");
    });

    img.addEventListener("blur", () => {
      img.classList.remove("active");
    });
    
  });

  //Btn X
  closeButton.addEventListener("click", () => {
    modal.style.display = "none";
  });

})



// console for banner film in-out
function infilm(randomFilm) {

  console.log('infilm function triggered');
  console.log('previewPic.alt: ', randomFilm.alt)
  console.log('previewPic.src: ', randomFilm.src)

}

function outfilm() {
    console.log('outfilm function triggered');
    
}


  


