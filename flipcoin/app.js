
const flipCoin = () => { 
  const test = (a, b) => {
    return a + b;
  }
  return new Promise((res, rej) => {
    setTimeout(() => {
      Math.random() < .5 ? res(test(5, 8)) : rej("TAILS");
    }, 1500)
  }) 
}

flipCoin()
  .then((result) => {
    console.log(result);
  })
  .catch(result => {
    console.log(result);
  })