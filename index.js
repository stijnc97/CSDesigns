var express = require("express");
var path = require("path");
var app = express();
var pagesFile = require('./data/pages.json');
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");
app.set('port', (process.env.PORT || 5000));

app.use(express.static('public'))

// renderen van de index
app.get('/', function(req, res) {
  res.render("index", {});
});

app.get("/home", function(req, res) {
    res.render("home", {
        pages: pagesFile.pages,
        zoekopdracht: "home"
    });
});

//zoeken van een pagina en renderen van 404 in geval van geen pagina
app.get(/\/(.*)/, function(req, res) {
  var slug = req.params[0];
  var teller = 0;
  var page = "";
  while (teller < pagesFile.pages.length ) {
    if (pagesFile.pages[teller].slug === slug) {
      page = pagesFile.pages[teller];
      pages = pagesFile.pages;
    }
    teller++;
  }
  if (page !== "") {
    res.render("page", {
      page: page,
      pages: pages,
      zoekopdracht: slug
    });
  } else {
    res.render("404", {
      zoekopdracht: slug
    });
  }
});
app.listen(process.env.PORT || 3000, function() {
  console.log('Node luistert op poort', app.get('port'));
});
