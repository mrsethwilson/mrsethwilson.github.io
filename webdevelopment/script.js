// script.js
window.onload = function () {
    document.querySelector('#breadcrumbcontain').innerHTML = buildBreadcrumb();
  };
  
  function buildBreadcrumb() {
    // 1. Grab just the pathname segments
    var segments = window.location.pathname.split('/').filter(Boolean);
    // 2. Get the last segment (e.g. "projects.html")
    var last = segments.pop();
    // 3. If no last or it's index.html, just show Home
    if (!last || last.toLowerCase() === 'index.html') {
      return wrapCrumbs(['Home']);
    }
    // 4. Otherwise strip extension and format the name
    var name = last
      .replace(/\.[^/.]+$/, '')             // remove ".html"
      .replace(/-/g, ' ')                   // hyphens → spaces
      .replace(/\b\w/g, l => l.toUpperCase()); // capitalize
    // 5. Build just Home + this page
    return wrapCrumbs(['Home', name]);
  }
  
  function wrapCrumbs(arr) {
    var sep = '&nbsp;&gt;&nbsp;';
    return arr.map(function(crumb, i) {
      // Link everything except the last crumb
      if (i < arr.length - 1) {
        var href = (crumb === 'Home') ? 'index.html' : null;
        return href
          ? '<a href="' + href + '">' + crumb + '</a>'
          : crumb;
      }
      return crumb;
    }).join(sep);
  }