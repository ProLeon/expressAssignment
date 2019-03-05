
var express = require("express");
var app = express();
var path = require("path");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var PORT = process.env.PORT || 2121;

require("./routing/htmlRoutes.js")(app);
require("./routing/apiRoutes.js")(app);

app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
});