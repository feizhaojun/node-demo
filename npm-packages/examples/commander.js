import { program } from 'commander';

const main = () => {
  console.log('- Commander')
  demo1();
  demo2();
}

const demo1 = () => {
  console.log('  - Demo1');
  program
    .option('--first')
    .option('-s, --separator <char>');

  program.parse();

  const opts = program.opts();

  console.log(opts);
  console.log(program.args);

  // const limit = options.first ? 1 : undefined;
  // console.log(program.args[0].split(options.separator, limit));
}

const demo2 = () => {
  console.log('  - Demo2');
  // Example 2:
  program
    .name('su')
    .description('su is this program\'s name')
    .version('1.0.0')

  console.log(program)
  // program.command('split')
  // .description('Split a string into substrings and display as an array')
  // .argument('<string>', 'string to split')
  // .option('--first', 'display just the first substring')
  // .option('-s, --separator <char>', 'separator character', ',')
  // .action((str, options) => {
  //   const limit = options.first ? 1 : undefined;
  //   console.log(str.split(options.separator, limit));
  // });
  
  program.parse();
}
      
export default main;