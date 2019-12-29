const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
if (canvas.getContext) {
    for (let i = 0; i < 200; i += 10) {
        ctx.moveTo(0, i);
        ctx.lineTo(canvas.width, i);
        console.log(canvas.width);
        ctx.strokeStyle = 'green';
        ctx.stroke();
    }
    ctx.beginPath();
    for (let i = 0; i < 400; i += 10) {
      ctx.moveTo(i, 0);
      ctx.lineTo(i,canvas.width/2);
      ctx.strokeStyle = 'blue';
      ctx.stroke();
     }
}

const animation = document.getElementsByClassName("animate");
animation ? animation : console.log(animation);
    
// ctx.arc(150, 75, 20, 0, 2 * Math.PI, false); 
// ctx.fillStyle = "blue";
// ctx.fill();

// ctx.beginPath();
// ctx.moveTo(0, 0);
// ctx.lineTo(300, 500)
// ctx.strokeStyle = '#ff0000';
// ctx.stroke();