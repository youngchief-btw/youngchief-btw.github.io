// Request Notification Permission
Notification.requestPermission();
Notification.requestPermission().then(function(permission) {});

// Get URL Parameters
function getUrlVars() {
  var vars = {};
  var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(
    m,
    key,
    value
  ) {
    vars[key] = value;
  });
  return vars;
}

function getUrlParam(parameter, defaultvalue) {
  var urlparameter = defaultvalue;
  if (window.location.href.indexOf(parameter) > -1) {
    urlparameter = getUrlVars()[parameter];
  }
  return urlparameter;
}

// HTTP --> HTTPS
if (location.protocol === "http:") {
  location.replace(window.location.href.replace("http:", "https:"));
}

// URL Parameter --> Variables

const encodedRef = getUrlVars()["ref"]; // encoded by default when HTTP request sent ツ
const decodedRef = decodeURI(encodedRef);
