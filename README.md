## node.js dependency visualizer

Simple node app that takes a single argument which is a relative `<path>` to the codebase you want to analyse, 
traverses through the logic flow of that code, and outputs the resulting data structure visualized as a graph with nodes and edges in svg or pdf format.


set-up: `npm i`

usage: `node app.js '../some-app/src/components/some/cool/thing'`

Note: the `<path>` argument is relative to the directory, where this app resides, so you will usually have to prefix path with '../' 


Images will be output into the ./images directory, with a filename of `<yourComponentName>.pdf`
