(function () {
  var retreats = getRetreats();
  var container = document.getElementById("retreats-container");
  var HTML = "";

  for (i = 0; i <= retreats.length - 1; i++) {
    console.log(retreats[i], i);
    HTML += Retreat(retreats[i]);
  }

  container.innerHTML = HTML;
})();
