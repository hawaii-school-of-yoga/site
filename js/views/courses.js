(function () {
  var categories = getCourses();
  categories.sort((a, b) => a.courses.length < b.courses.length);

  var container = document.getElementById(`courses-container`);

  categories.map((category) => {
    var HTML = `
      <div id="${category.category}" class="section">
          <div class="block">
              <div class="header">
                  <h3>${category.title}</h3>
                  <div style="margin-top: 16px;" class="divider"></div>
              </div>
          </div>
          <div
            class="course-container ${category.courses.length ? "card-columns" : ""}" 
            id="${category.category}-courses-container">
            ${
              category.courses.length
                ? category.courses.map((course) => Course(course)).join("")
                : `
                    <div>
                      <p>Courses on ${category.title} coming soon! Keep up to date by <a href="#footer">subscribing to our email newsletter</a>.</p>
                    </div>
                  `
            }
          </div>
      </div>
    `;
    container.innerHTML += HTML;
  });
})();
