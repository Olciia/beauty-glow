function openPage(pageName, elmnt, color) {
    // Hide all elements with class="tabcontent" by default */
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Remove the background color of all tablinks/buttons
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = "";
    }
  
    // Show the specific tab content
    document.getElementById(pageName).style.display = "block";
  
    // Add the specific color to the button used to open the tab content
  }
  
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen").click();




  function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  
  const images = [
      'url("z5.png")',
      'url("z6.png")',
      'url("z7.png")',
      'url("z3.png")'
  ];
  
  let currentIndex = 0;
  
  function changeImage() {
      document.getElementById('slide1').style.backgroundImage = images[(currentIndex + 1) % images.length];
      document.getElementById('slide2').style.backgroundImage = images[currentIndex];
      document.getElementById('slide3').style.backgroundImage = images[(currentIndex + 2) % images.length];
      currentIndex = (currentIndex + 1) % images.length;
  }
  
  setInterval(changeImage, 3000);
  
  
  
  let slideIndex = 1;
  showSlides(slideIndex);
  
  // Next/previous controls
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  // Thumbnail image controls
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1} 
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block"; 
    dots[slideIndex-1].className += " active";
  }
  
  const pytaniaOdpowiedzi = document.querySelector('.pytania_odpowiedzi');
  pytaniaOdpowiedzi.addEventListener('click', (event) => {
      if (event.target.tagName === 'STRONG') {
          const pytanie = event.target.closest('.pytanie');
          const paragraph = pytanie.querySelector('p');
          const arrowIcon = pytanie.querySelector('.arrow-icon');

          paragraph.style.display = paragraph.style.display === 'none' ? 'block' : 'none';
          arrowIcon.classList.toggle('open');
      }
  });


  const informacjeMarketingowe = document.querySelector('.informacje_marketingowe');
  informacjeMarketingowe.addEventListener('click', (event) => {
      const strongElement = event.target.closest('strong');
      
      if (strongElement) {
          const pytanie = strongElement.closest('.pytanie');
          const paragraph = pytanie.querySelector('p');
          const arrowIcon = pytanie.querySelector('.arrow-icon');
  
          paragraph.style.display = paragraph.style.display === 'none' ? 'block' : 'none';
          arrowIcon.classList.toggle('open');
      }
  });