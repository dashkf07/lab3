

window.onload = function () {
   console.log('work')

   const parallax = document.querySelector('.parallax')
   const content = document.querySelector('.parallax-content')
   const container = document.querySelector('.main-container')

   let x = 0, y = 0, procentX = 0, procentY = 0;



   function parallaxEffect () {
      
      console.log('parallaxEffect');

      const distX = procentX - x;
      const distY = procentY - y;

      x = (x + (distX * 0.5)) / 10;
      y = (y + (distY * 0.5)) / 10;
      
      console.log(x, y)

      let attr = "transform: translate(" + x + "%, " + y + "%);";

      content.setAttribute("style", attr);

      console.log(content.getAttribute("transform"));


      requestAnimationFrame(parallaxEffect)

   };

   parallaxEffect()

   function getCoord (e) {
      console.log('getCoord');

      const width = parallax.offsetWidth;
      const height = parallax.offsetHeight;

      console.log(width, height);

      const coordX = e.pageX - width / 2;
      const coordY = e.pageY - height / 2;

      procentX = coordX / width * 100;
      procentY = coordY / height * 100;

   }

   parallax.addEventListener("mousemove", getCoord);
   container.addEventListener("mousemove", getCoord);



}

function showImg1 () {
   let display = document.querySelector('.lab-img-1').style.display;
   console.log('beber');

   if (display == "none") {
      document.querySelector('.lab-img-1').style.display = "flex";
   } else {
      document.querySelector('.lab-img-1').style.display = "none";
   }
   
};

function showImg2 () {
   let display2 = document.querySelector('.lab-img-2').style.display;
   console.log('beber');

   if (display2 == "none") {
      document.querySelector('.lab-img-2').style.display = "flex";
   } else {
      document.querySelector('.lab-img-2').style.display = "none";
   }

}