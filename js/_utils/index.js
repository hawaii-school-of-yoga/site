function shuffleArray(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function getProjectRoot() {
  // customized to Austin Witherow dev env
  if (window.location.href.includes("file://")) {
    return "file:///Users/austinwitherow/dev/clients/zeny/hawaiischoolofyoga/site";
  }

  return "https://hawaii-school-of-yoga.github.io/site";
}
