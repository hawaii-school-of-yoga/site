function Retreat(retreat) {
  var hosts = retreat.hosts.map(function(host, i) {
    return host + " ";
  });

  var featureListItems = retreat.features.map(function(feat) {
    return "<li>" + feat + "</li>";
  });

  var priceListItems = retreat.prices.map(function(price) {
    return "<li>" + price.cost + ", " + price.note + ".</li>";
  });

  return (
    "<div class='retreat'><h2>" +
    retreat.title +
    "</h2><h3>" +
    retreat.dates +
    "</h3><h4>Hosted by " +
    hosts +
    "</h4><p>" +
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
    "</div>"
  );
}
