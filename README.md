## node.js dependency visualizer

Simple node app that takes a single argument of <path> to the codebase you want to analyse, 
traverses through the logic flow and outputs the resulting data structure to svg or pdf.


set-up: `npm i`

usage: `node app.js '../some-app/src/components/some/cool/thing'`

Note: the <path> argument is relative to the directory, where this app resides, so you will usually have to prefix path with '../' 


Images will be output into the ./images directory, with a filename of <yourComponentName>.pdf
