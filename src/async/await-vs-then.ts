console.log("start");

Promise.resolve()
  .then(() => {
    console.log("then 1");
  })
  .then(() => {
    console.log("then 2");
  });

console.log("end");
