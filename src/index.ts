import { printSelf } from "./lib";
// import { data2 } from "./lib2";

let counter = 0;
const process = setInterval(function () {
  counter += 1;
  return console.log(counter);
}, 2000);

if (module.hot) {
  module.hot.accept();
  module.hot.addDisposeHandler((data) => clearInterval(process));
  // To run logic on HMR for ./lib
  module.hot.accept("./lib", function () {
    console.log("HMR ./lib - printing self...");
    return printSelf();
  });
}
