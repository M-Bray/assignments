const flipCoin = () => { 
  return new Promise((res, rej) => {
    setTimeout(() => {
      Math.random() < .5 ? res("HEADS") : rej("TAILS");
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