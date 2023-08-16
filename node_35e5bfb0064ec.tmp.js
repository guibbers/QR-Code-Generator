import inquirer from 'inquirer';

inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: 'What is your name?'
    }
])
    .then((answers) => {
        console.log("boaaa " +  answers.name);
    }).catch((e) => {
        console.error(e);
    });

