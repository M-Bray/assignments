const canvas = document.getElementById("canvas");

if (canvas.getContext) {
    const ctx = canvas.getContext("2d");
    for (let i = 10; i < 200; i += 20) {
        ctx.moveTo(0, i);
        ctx.lineTo(canvas.width, i);
        ctx.strokeStyle = 'green';
        ctx.stroke();
    }
    for (let i = 10; i <400; i += 20) {
      ctx.moveTo(i, 0);
      ctx.lineTo(i,canvas.width/2);
      ctx.strokeStyle = 'blue';
      ctx.stroke();
     }
}
    
ctx.arc(150, 75, 20, 0, 2 * Math.PI, false); 
ctx.fillStyle = "blue";
ctx.fill();

ctx.beginPath();
ctx.moveTo(0, 0);
ctx.lineTo(300, 500)
ctx.strokeStyle = '#ff0000';
ctx.stroke();