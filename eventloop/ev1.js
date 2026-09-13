setTimeout(() => {
  console.log("Hello Form timer 1");
}, 0); // this will be printed 2nd even after we have  a setImm already bcz this will alrrady expired
setImmediate(() => {
  console.log("I Will be 2nd ");
});
// console.log("Hello form top level");

//NOTES//
// When you execute setTimeout(fn, 0) and setImmediate(fn) together
//  in the main thread (outside of an asynchronous I/O context),
//  the execution order is actually non-deterministic (unpredictable).
