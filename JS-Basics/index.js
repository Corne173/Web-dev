function Stopwatch() {
  console.log("Stopwatch app has been initialised");
  let startTime,
    endTime,
    running,
    duration = 0;
  let animal = { colour: "brown", legs: 4, type: "dog" };

  this.start = function () {
    if (running) throw new Error("Stopwatch has already been started");
    running = true;
    startTime = new Date();
    console.log("Stopwatch has started");
  };

  this.stop = function () {
    if (!running) throw new Error("Stopwatch has already been stopped");

    running = false;
    endTime = new Date();
    const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
    duration += seconds;
    console.log("Stopwatch has stopped", duration);
  };

  this.reset = function () {
    duration = 0;
    running = false;
    startTime = 0;
    endTime = 0;
  };

  //   This is used to access local varaibles.
  Object.defineProperty(this, "animal", {
    // get function is called when (stopwatch instance).animal is accessed
    get: function () {
      return animal;
    },
    set: function (value) {
      animal = value;
    },
  });

  this.duration = function () {
    if (running) {
      const now = new Date();
      return (now.getTime() - startTime.getTime()) / 1000;
    }

    duration = (endTime - startTime) / 1000;
    return duration;
  };
}

function page(page) {
  var i;
  var x = document.getElementsByClassName("page");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  document.getElementById(page).style.display = "block";
}
const sw = new Stopwatch();
