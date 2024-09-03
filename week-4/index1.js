const fs=require('fs');
const {program}=require('commander');

// Function to load TODO
function loadTodo(){
    try{
        const data=fs.readdirSync('test.json','utf-8');
        return JSON.parse(data);
    }catch{
        return [];
    }
}

// Function to Save Todo
function saveTodo(todos){
    fs.writeFileSync('test.json',JSON.stringify(todos,null,2));
}

//const program = new commander();

program
  .name('add Todo')
  .description('CLI to add todo in json')
  .version('0.8.0');

  program
  .command('add <todo>')
  .description('Add todo in JSON')
  .action((todo) => {
    const todos = loadTodo();
    todos.push({ text: todo, done: false });
    saveTodo(todos);
    console.log('Todo added successfully!');
  });


  program
  .command('delete <index>')
  .description('delete todo in json')
  .action((index) => {
    const todo =loadTodo();
    todo.splice(index-1,1);
    saveTodo(todo);
    console.log("Deleted Todo In json");
  })

// ... other commands

// Parse the command-line arguments
program.parse(process.argv);

