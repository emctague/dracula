var dom = {
  // Counter Elements.
  counter: document.querySelector("counter"),
  increase: document.querySelector("#increase"),
  reset: document.querySelector("#reset"),

  // Setup Elements.
  setup: document.querySelector("#setup"),
  start: document.querySelector("#startprog")
};

function runCounter () {
  document.body.className = "count";

  var counter = parseInt(localStorage.counter);
  dom.counter.innerHTML = counter;

  function updateCounter (n) {
    counter += n;
    dom.counter.innerHTML = counter;
    localStorage.counter = counter;
  }

  dom.counter.onclick = function () {
    updateCounter (-1);
  };

  dom.increase.onclick = function () {
    updateCounter (1);
  };

  dom.reset.onclick = function () {
    dom.setup.value = counter;
    runSetup();
  };
}

function runSetup () {
  document.body.className = "setup";

  dom.start.onclick = function () {
    localStorage.counter = dom.setup.value;
    runCounter();
  }
}

if (localStorage.counter) runCounter();
else runSetup();
