function SlideShow(slides, replaceElement, shuffle, fade) {
  var rE = document.getElementById(replaceElement);

  var newEl = document.createElement("div");
  newEl.classList.add("carousel", "slide");
  if (fade) {
    newEl.classList.add("carousel-fade");
  }

  newEl.setAttribute("data-ride", "carousel");

  var inner = "<div class='carousel-inner'>";

  if (shuffle) {
    slides = shuffleArray(slides);
  }

  slides.forEach(function(slide, i) {
    inner += `<div class='carousel-item ${i === 0 && "active"}'>
      <img class='d-block w-100' src='${slide.img}' alt='${slide.alt}'>
      </div>`;
  });

  inner += "</div>";

  newEl.innerHTML = inner;

  rE.parentNode.replaceChild(newEl, rE);
}
