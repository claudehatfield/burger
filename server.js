var express = require('express');
var exphbs = require("express-handlebars");


var PORT = process.env.PORT || 8080;
var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.engine("handlebars", exphbs({ defaultLayout: "main" }));
// We set this as the view engine bc Handlebars is controlling what the users see
app.set("view engine", "handlebars");

// Import routes and give the server access to them. This is where all of our express routes are.
var routes = require("../burger/controllers/burgers_controller");

app.use(routes);

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
