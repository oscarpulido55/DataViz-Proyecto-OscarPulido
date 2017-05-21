# DataViz-DojoRandori
DataVIz Dashboard Example &amp; VainillaJS - Dojo Randori

# To run a project seed similar

```bash
    npm install -g yo
    npm install -g generator-fountain-webapp
    npm install -g generator-fountain-angular1
    mkdir my-new-project && cd my-new-project
    yo fountain-angular1
    
```

# To add bootstrap

```bash
  bower install angular-bootstrap --save
  # add 'ui.bootstrap' to src/app/index.js
  
  bower install paper-less --save
  
  
```

# To add D3 & NVD3

```bash
  bower install angular-nvd3 --save
  
  # add 'nvd3' to src/app/index.js
  
  # Add JS * CSS files to index.html
  # <link rel="stylesheet" href="../bower_components/nvd3/build/nv.d3.min.css">
  
  # <script src="../bower_components/d3/d3.min.js"></script>
  # <script src="../bower_components/nvd3/build/nv.d3.min.js"></script> <!-- or use another assembly -->
  # <script src="../bower_components/angular-nvd3/dist/angular-nvd3.js"></script>
  
  # use at controller with data & options  
  
```

# To add [leaflet](https://github.com/tombatossals/angular-leaflet-directive)

```bash
 
  bower i leaflet-directive --save
  
  # add 'leaflet-directive' to src/app/index.js
  
  # Add JS * CSS files to index.html  
  # <link rel="stylesheet" href="http://cdn.leafletjs.com/leaflet-0.7.1/leaflet.css">
  
  # <script src="http://cdn.leafletjs.com/leaflet-0.7.1/leaflet.js"></script>
  # <script src="../bower_components/angular-leaflet-directive/dist/angular-leaflet-directive.min.js"></script>
  
  # use at controller with center & options
  
```

