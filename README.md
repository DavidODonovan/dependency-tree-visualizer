## node.js dependency visualizer

Simple node app that takes a single argument `<path>` which is a relative path to the codebase you want to analyse, 
traverses through the logic flow of that code, and outputs the resulting data structure visualized as a graph with nodes and edges in svg or pdf format.

### Graphviz needs to be installed on your machine

#### Mac OS
`brew install graphviz || port install graphviz`

#### Linux Ubuntu
`apt-get install graphviz`

Set-up: `npm i`

Example usage: `node app.js '../some-app/src/components/some/cool/thing'`

Images will be output into the `./images` directory, with a filename of `<yourComponentName>.pdf`
