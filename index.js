import inquirer from "inquirer";
let todos = [];
let loop = true;
while (loop) {
    const answer = await inquirer.prompt([
        {
            type: 'input',
            name: 'TODO',
            message: 'What do you want to add'
        }, {
            type: 'conform',
            name: 'addmore',
            message: 'Do You want to add more todo',
            default: false,
        }
    ]);
    const { TODO, addmore } = answer;
    console.log(answer);
    loop = addmore;
    if (TODO) {
        todos.push(TODO);
    }
    else {
        console.log("Kindly add something");
    }
}
if (todos.length > 0) {
    console.log(`Your Todo list is as follows:`);
    todos.forEach(todos => {
        console.log(todos);
    });
}
else {
    console.log('no data found');
}
