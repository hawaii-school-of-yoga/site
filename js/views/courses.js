(function () {
  var courses = getCourses();
  courses.map((category) => {
    var container = document.getElementById(`${category.category}-courses-container`);
    var HTML = "";

    HTML += category.courses.map((course) => Course(course));

    if (!category.courses.length) {
      HTML += `<div>
      <p>Courses on ${titleCase(
        category.category
      )} coming soon! Keep up to date by <a href="#footer">subscribing to our email newsletter</a></p>
      </div>`;
    }

    container.innerHTML = HTML;
  });
})();
