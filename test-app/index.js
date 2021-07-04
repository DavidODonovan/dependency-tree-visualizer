const fs = require('fs');
const path = require('path');
const { createCanvas, loadImage } = require('canvas');
const Fractal = require('./Fractal');

const width = 16;
const height = 2048;
const outputPath = '../frontend/src/components/ImageContainer/allTheColours.png'

const canvas = createCanvas(width, height);
const ctx = canvas.getContext('2d');
const pixelsMatrix = ctx.createImageData(width, height);

const fractal = new Fractal(width, height);
fractal.fractalizeImage(pixelsMatrix);
ctx.putImageData(pixelsMatrix, 0, 0);

canvas.createPNGStream().pipe(fs.createWriteStream(path.join(__dirname, outputPath)))
