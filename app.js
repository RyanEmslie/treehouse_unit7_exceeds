const express = require("express");
const app = express();
// const PORT = process.env.PORT
const PORT = process.env.PORT || 3000


//view engine setup
app.set("view engine", "pug");
app.use(express.static("public"));

const mainRoutes = require("./routes");
const projectsRoutes = require("./routes/project");

app.use(mainRoutes);
app.use("/project", projectsRoutes);

// catch 404 and forward to error handler
//throws a unique error and assigns an error status code of 404
app.use((req, res, next) => {
  const err = new Error("Uh Oh! Path not found!");
  err.status = 404;
  next(err);
});

//honestly still don't have a complete grasp on "env" property
//I believe node.js runs development as default
if (app.get("env") === "development") {
        //error handler requires four arguments
  app.use((err, req, res, next) => {
    res.status(err.status || 500);
    //renders error.pug and passes variables message and error
    res.render("error", {
      message: err.message,
      error: err
    });
  });
}

app.listen(PORT, () => {
  console.log("The application is running on localhost:3000!");
});
