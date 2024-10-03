// To limit the rate of function is execution.
// When an event happens multiple times in a short period, that time we use debounce
// We delayed function execution and will only run after the events stop firing
// for a specified amount of time.
// Button clicks
// Search input (fetching results while typing)
// Resizing the browser window
// Scroll events
function getData() {
  console.log("get data clicked");
}
/*

function debouncer(fn, delay) {
  let timer;
  return function () {
    timer && clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, arguments);
    }, delay);
  };
}
const debounceBtn = document.getElementById("debounceBtn");
debounceBtn.onclick = debouncer(getData, 1000);

*/
function serchQuery(query) {
  console.log("query...", query);
}

function debouncerSearch(fn, delay) {
  let timer;
  return function () {
    clearInterval(timer);
    timer = setTimeout(() => {
      fn.apply(this, arguments);
    }, delay);
  };
}

// let debouncedSearch = debouncerSearch(serchQuery, 1000);

const searchInput = document.getElementById("searchInput");

// searchInput.addEventListener("input", (e) => {
//   debouncedSearch(e.target.value);
// });

// Throttling

let c = 0;
function throttler(fn, wait) {
  let lastCall = 0;
  return function () {
    c++;
    console.log("c", c);
    if (Date.now() - lastCall > wait) {
      lastCall = Date.now();
      fn.apply(this, arguments);
    }
  };
}
var throttleButton = document.getElementById("throttleBtn");
throttleButton.onclick = throttler(getData, 1000);
