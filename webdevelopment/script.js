window.onload = function () {
    document.querySelector('#breadcrumbcontain').innerHTML = buildBreadcrumb();
  };
  
  function buildBreadcrumb() {
    var segments = window.location.pathname.split('/').filter(Boolean);

    var last = segments.pop();

    if (!last || last.toLowerCase() === 'index.html') {
      return wrapCrumbs(['Home']);
    }

    var name = last
      .replace(/\.[^/.]+$/, '')            
      .replace(/-/g, ' ')                
      .replace(/\b\w/g, l => l.toUpperCase()); 

    return wrapCrumbs(['Home', name]);
  }
  
  function wrapCrumbs(arr) {
    var sep = '&nbsp;&gt;&nbsp;';
    return arr.map(function(crumb, i) {

      if (i < arr.length - 1) {
        var href = (crumb === 'Home') ? 'index.html' : null;
        return href
          ? '<a href="' + href + '">' + crumb + '</a>'
          : crumb;
      }
      return crumb;
    }).join(sep);
  }
