(function() {
  var testimonials = getTestimonials();
  var container = document.getElementById("testimonials-container");
  var HTML = "";

  for (i = 0; i <= testimonials.length - 1; i++) {
    HTML += Testimonial(testimonials[i]);
  }

  container.innerHTML = HTML;
})();
