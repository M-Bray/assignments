let drawLine = (x1, y1, x2, y2) => {
  // ITERATORS
  let x, y, dx, dy, dx1, dy1, px, py, xe, ye, i;

  // CALCULATE LINE DELTAS
  dx = x2-x1;
  dy = y2 - y1;

  // CREATE A POSITIVE COPY OF DELTA 
  dx1 = Math.abs(dx);
  dy1 = Math.abs(dy);

  // CALCULATE ERROR INTERVALS FOR BOTH AXIS
  px = 2 * dy1 - dx1;
  py = 2 * dx1 - dy1;

  // THE LINE IS X-AXIS DOMINANT
  if (dy1 <= dx1) {
    // LINE IS DRAWN LEFT TO RIGHT
    if (dx >= 0) {
      x = x1; y = y1; xe = x2;
    } else {// LINE IS DRAWN RIGHT TO LEFT (SWAP ENDS)
     x = x2; Y = y2; xe = x1;
    }
    
    pixel(x, y); // DRAW FIRST PIXEL 
    
    // RASTERIZE THE LINE
    for (i = 0; i < xe; i++) {
      x = x + 1;

      //DEAL WITH OCTANTS...
      if (px < 0) {
        px = px + 2 * dy1;
      } else {
        if ((dx < 0 && dy < 0) || (dx > 0 && dy > 0)) {
          y = y+1;
        } else {
          y = y - 1;
        }
        px = px + 2 * (dy1 - dx1);
      }

      //DRAW PIXEL FROM LINE SPAN AT
      // CURRENTLY RASTERIZED POSITION
      pixel(x, y);
    }
  } else { // THE LINE IS Y-AXIS DOMINANT
    if (dy >= 0) {
      x = x1; y = y1; ye = y2;
    } else { //LINE IS DRAWN TOP TO BOTTOM
      x = x2; y = y2; ye = y1;
    }
    pixel(x, y); // Draw first pixel

    // Rasterize the line
    for (i = 0; y < ye; i++) {
      y = y + 1;

    // Deal with octants...
      if (py <= 0) {
        py = py + 2 * dx1;
      } else {
        if ((dx < 0 && dy<0) || (dx > 0 && dy > 0)) {
            x = x + 1;
        } else {
            x = x - 1;
        }
        py = py + 2 * (dx1 - dy1);
      }
    // Draw pixel from line span at
        // currently rasterized position
        pixel(x, y);
    }
  }
}
console.log((12 * 12) * 4)