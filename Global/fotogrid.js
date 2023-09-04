function openLightbox(imageSrc) {
  var lightbox = document.querySelector('.lightbox');
  var lightboxImage = document.querySelector('.lightbox-image');
  
  lightboxImage.src = imageSrc;
  lightbox.style.display = 'block';
}

var closeButtons = document.querySelectorAll('.close');
for (var i = 0; i < closeButtons.length; i++) {
  closeButtons[i].addEventListener('click', function() {
    var lightbox = document.querySelector('.lightbox');
    lightbox.style.display = 'none';
  });
}
