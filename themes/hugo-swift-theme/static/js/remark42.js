
  var remark_config = {
    host: "https://remark42.kuepper.nrw", // hostname of remark server, same as REMARK_URL in backend config, e.g. "https://demo.remark42.com"
    site_id: 'rkb01',
    components: ['embed'], // optional param; which components to load. default to ["embed"]
                          // to load all components define components as ['embed', 'last-comments', 'counter']
                          // available component are:
                          //     - 'embed': basic comments widget
                          //     - 'last-comments': last comments widget, see `Last Comments` section below
                          //     - 'counter': counter widget, see `Counter` section below
    // url: "blog.kuepper.nrw", // optional param; if it isn't defined window.location.href will be used
    max_shown_comments: 10, // optional param; if it isn't defined default value (15) will be used
    theme: 'dark', // optional param; if it isn't defined default value ('light') will be used
    page_title: 'Moving to Remark42' // optional param; if it isn't defined `document.title` will be used
  };

  (function(c) {
    for(var i = 0; i < c.length; i++){
      var d = document, s = d.createElement('script');
      s.src = remark_config.host + '/web/' +c[i] +'.js';
      s.defer = true;
      (d.head || d.body).appendChild(s);
    }
  })(remark_config.components || ['embed']);
