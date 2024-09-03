const fs = require('fs');
const json=require('jsonfile');
const { Command } = require('commander');
const program = new Command();

program
  .name('counter')
  .description('CLI to do file based tasks')
  .version('0.8.0');

  // command to get no of lines 
program.command('count_lines')
  .description('Count the number of lines in a file')
  .argument('<file>', 'file to count')
  .action((file) => {
    fs.readFile(file, 'utf8', (err, data) => {
      if (err) {
        console.log(err);
      } else {
        const lines = data.split('\n').length;
        console.log(`There are ${lines} lines in ${file}`);
      }
    });
  });

  // program to get no of words
  program.command('count_words')
  .description('Count the number of lines in a file')
  .argument('<file>', 'file to count')
  .action((file) => {
    fs.readFile(file, 'utf8', (err, data) => {
      if (err) {
        console.log(err);
      } else {
        const words = data.split(' ').length;
        console.log(`There are ${words} words in ${file}`);
      }
    });
  });

  // program to add data in json


  program.command('add')
  .description('to add data in the json')
  .argument('<text>','text data')
  .action(add_data);
  function add_data(data){
    const obj={id:3};
    json.writeFile("test.json",obj+{"data:": data},(err) => {
        if(err)
            console.log(err);
    });
  }
program.parse();