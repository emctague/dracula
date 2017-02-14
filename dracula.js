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

  function decreaseCount () {
    updateCounter (-1);
  }
  dom.counter.onclick = decreaseCount;

  function increaseCount () {
    updateCounter (1);
  };
  dom.increase.onclick = increaseCount;

  function resetCount () {
    dom.setup.value = counter;
    runSetup();
  };
  dom.reset.onclick = resetCount;

  // UI Keybindings.
  window.onkeydown = function (e) {
    // space, enter, minus, down keys.
    if (e.keyCode == 32 || e.keyCode == 13 || e.keyCode == 173
        || e.keyCode == 40)
      decreaseCount();
    // plus/equals, up keys.
    else if (e.keyCode == 61 || e.keyCode == 38)
      increaseCount();
    // esc, r keys.
    else if (e.keyCode == 27 || e.keyCode == 82)
      resetCount();
  };
}

function runSetup () {
  document.body.className = "setup";

  function startCount () {
    localStorage.counter = dom.setup.value;
    runCounter();
  };
  dom.start.onclick = startCount;

  // Enter key keybinding.
  window.onkeydown = function (e) {
    if (e.keyCode == 13)
      startCount();
  };
}

if (localStorage.counter) runCounter();
else runSetup();
