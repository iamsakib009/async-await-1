const processOrder = () => {
  console.log("Processing order for customer 1");
  let currentTime = new Date().getTime();
  while (currentTime + 3000 >= new Date().getTime());
  console.log("Order processed for customer 1");
};
console.log("Take order for customer 1");
processOrder();
console.log("completed order for customer 1");
