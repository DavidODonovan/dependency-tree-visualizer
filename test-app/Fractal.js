module.exports = class Fractal {
  constructor(width, height){
    this.width = width;
    this.height = height;
    this.coloursData = [];
    this.createBigColoursArray();
  }

  createBigColoursArray=()=>{
    let newArr = [];
    for(let r=0; r<256; r+=8){
      for(let g=0; g<256; g+=8){
        for(let b=0; b<256; b+=8){
          newArr.push([r, g, b, 255]);
        };
      };
    };
    this.coloursData = newArr;
    return newArr;
  };

  fractalizeImage=(pixelsMatrix)=>{
    // Iterate over the pixels
    for (var y=0; y<this.height; y++) {
      for (var x=0; x<this.width; x++) {
        this.iterate(x, y, pixelsMatrix);
      };
    };
  };

  iterate=(x, y, pixelsMatrix)=>{
    var pixelIndex = (y * this.width + x) * 4;
    this.pushColours(pixelIndex, pixelsMatrix);
  };

  pushColours=( pixelIndex, pixelsMatrix)=>{
    var colourIndex = pixelIndex/4;
    let colour;
    if(colourIndex % 2)
      colour = this.coloursData.pop();
    else
      colour = this.coloursData.shift();

    pixelsMatrix.data[pixelIndex] = colour[0];
    pixelsMatrix.data[pixelIndex+1] = colour[1];
    pixelsMatrix.data[pixelIndex+2] = colour[2];
    pixelsMatrix.data[pixelIndex+3] = colour[3];
  };

};
