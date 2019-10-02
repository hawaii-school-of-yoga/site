(function() {
  var events = getEvents();
  var container = document.getElementById("events-container");
  var HTML = "";

  for (i = 0; i <= events.length - 1; i++) {
    console.log(events[i], i);
    HTML += Retreat(events[i]);
  }

  container.innerHTML = HTML;
})();
