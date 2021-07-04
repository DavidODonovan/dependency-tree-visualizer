const madge = require('madge');
const { Command } = require('commander');
const fs = require('fs');

const program = new Command();
program
  .argument('<name>')
  .action((path, options, command) => {
    console.log(`tracing logic dependencies in your code at: ${path}`);

//res.image('./images/BaseDetailView.pdf'))
    madge(`${path}`)
     .then((res) => res.image(`./images/${path}.pdf`))
     .then((outputPath) => {
       console.log('Image written to ' + outputPath);
     })
     .catch((err)=>{ 
       console.log("you have an error: ", err);
     })
  });

program.parse();



