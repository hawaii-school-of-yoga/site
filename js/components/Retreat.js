function Retreat(retreat) {
  var hosts = retreat.hosts.map(function(host, i) {
    return host + " ";
  });

  var featureListItems = retreat.features
    .map(function(feat) {
      return "<li>" + feat + "</li>";
    })
    .join("");

  var priceListItems = retreat.prices
    .map(function(price) {
      return "<li>" + price.cost + ", " + price.note + ".</li>";
    })
    .join("");

  return (
    "<div class='retreat'><h4>" +
    retreat.title +
    "</h4><h5>" +
    retreat.dates +
    "</h5><h6>Hosted by " +
    hosts +
    "</h6><p>" +
    retreat.description +
    "</p><ul>" +
    featureListItems +
    "</ul>" +
    "<p>Deposit (non-refundanble): " +
    retreat.deposit +
    "</p>" +
    "<p>Prices:</p><ul>" +
    priceListItems +
    "</ul><div class='btn-container'>" +
    "<a class='btn btn-primary' href='" +
    retreat.location +
    "' target='_blank'>Map Location</a>" +
    "<a class='btn btn-secondary' href='" +
    retreat.document +
    "' target='_blank'>Itinereary and Details</a>" +
    "</div></div>"
  );
}
