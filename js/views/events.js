function Event(event, id) {
  return `
    <div class="card mb-4 shadow-sm">
      <img src="${event.image}" alt="${event.title[0]}" class="card-img-top">
      <div class="card-body">
        <h4 class="card-title"><a href="${event.link}" class="text-primary">${
    event.title[0]
  }</a></h4>
        ${
          event.title[1]
            ? `<h5 class="card-subtitle mb-2 text-muted">${event.title[1]}</h5>`
            : ""
        }
        ${event.dates ? `<p class="text-info">${event.dates}</p>` : ""}
        <p class="card-text">${event.description[0]}</p>
        <div class="d-flex">
            <a href="${
              event.link
            }" class="btn btn-primary btn-sm mr-2">Sign Up</a>
            <button type="button" class="btn btn-secondary btn-sm" data-toggle="modal" data-target="#eventModal${id}">Learn More</button>
        </div>
      </div>
    </div>
  `;
}

function EventModal(event, id) {
  return `
    <div style="z-index:99999" class="modal fade" id="eventModal${id}" tabindex="-1" role="dialog" aria-labelledby="eventModalLabel${id}" aria-hidden="true">
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="eventModalLabel${id}">${
    event.title[0]
  }</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <img src="${event.image}" alt="${
    event.title[0]
  }" class="img-fluid mb-3">
            ${event.title[1] ? `<h6>${event.title[1]}</h6>` : ""}
            ${event.dates ? `<p class="text-info">${event.dates}</p>` : ""}
            <p>${event.description.join("<br/><br/>")}</p>
          </div>
          <div class="modal-footer">
            <a href="${event.link}" class="btn btn-primary">Sign Up</a>
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  `;
}

(function () {
  var events = getEvents();
  var container = document.getElementById(`events-container`);

  events.map((event, index) => {
    var HTML = `
      <div class="col-lg-4 col-md-6 mb-4">
          ${Event(event, index)}
      </div>
      ${EventModal(event, index)}
    `;

    container.innerHTML += HTML;
  });
})();
