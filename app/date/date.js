function isValidDate(date) {
    var matches = /^(\d{1,2})[-\/](\d{1,2})[-\/](\d{4})$/.exec(date);

    if (matches == null){
      return false;
    }
    var d = matches[2];
    var m = matches[1] - 1;
    var y = matches[3];

    var composedDate = new Date(y, m, d);
    return composedDate.getDate() == d &&
            composedDate.getMonth() == m &&
            composedDate.getFullYear() == y;
}

function formatDate(date) {
  if (isValidDate(date))
    return date;

  if (date.length != 8)
    return "Invalid input";

  var m = date.substring(0,2);
  var d = date.substring(2,4);
  var y = date.substring(4);

  if (isNaN(m) || isNaN(d) || isNaN(y))
    return "Invalid input";

  if ( m < 0 || d < 0 || y < 0)
    return "Invalid input";

  return m + "-" + d + "-" + y;
}


module.exports = {
  isValidDate,
  formatDate
}
