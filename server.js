const inquirer = require('inquirer');
const db = require('./db/connect');
const mysql = require('mysql2');
const express = require('express');
const { connect } = require('./db');
const { start } = require('repl');
const router = express.Router();

db.connect(async function () {
    start();
})

function start() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'choice',
            message: 'Select an option.',
            choices: [
                'View Employees',
                'View Roles',
                'View Departments',
                'Add New Employee',
                'Add Role',
                'Add Department',
                'Quit'
            ],
        }
    ])
        .then((answer) => {
            switch (answer.choice) {
                case 'View Employees':
                    viewEmployees();
                    break;
                case 'View Roles':
                    viewRoles();
                    break;
                case 'View Departments':
                    viewDepartments();
                    break;
                case 'Add New Employee':
                    newEmployee();
                    break;
                case 'Add Role':
                    newRole();
                    break;
                case 'Add Department':
                    newDepartment();
                    break;
                case 'Quit':
                    Quit();
                    break;
            }
        })
}

function viewEmployees() {
    const request = "SELECT * FROM employees";
    db.query(request, function(err, res) {
      if (err) throw err;
      console.log("Viewing All Employees");
      console.table(res);
      inquirer.prompt([
          {
              type: 'list',
              name: 'choice',
              message: 'select an option.',
              choices: [
                  'Main Menu',
                  'Quit'
              ],
          }
      ])
      .then((answer) => {
          switch (answer.choice) {
              case 'Main Menu':
                  start();
                  break;
                case 'Quit':
                    Quit();
          }
      })
      
    }) 
  };

function viewRoles() {
    let request = "SELECT * FROM roles";
    db.query(request, function(err, res) {
        if (err) throw err;
        console.log("Viewing All Roles");
        console.table(res);
        inquirer.prompt([
            {
                type: 'list',
                name: 'choice',
                message: 'select an option.',
                choices: [
                    'Main Menu',
                    'Quit'
                ]
            }
        ])
        .then((answer)=>{
            switch (answer.choice) {
                case 'Main Menu':
                    start();
                    break;
                case 'Quit':
                Quit();
            }
        })
        
    })
}

function viewDepartments() {
    const request = "SELECT * FROM department";
    db.query(request, function(err, res) {
        if (err) throw err;
        console.log("Viewing All Departments");
        console.table(res);
        inquirer.prompt([
            {
                type: 'list',
                name: 'choice',
                message: 'select an option.',
                choices: [
                    'Main Menu',
                    'Quit'
                ]
            }
        ])
       .then((answer) => {
           switch (answer.choice){
               case 'Main Menu':
                   start();
                   break;
                   case 'Quit':
                       Quit();
           }
       })
    })
}

function newEmployee() {
    inquirer.prompt ([
        {
            type: 'input',
            message: 'What is the employee first name?',
            name: 'FirstName'
        },
        {
            type: 'input',
            message: 'What is the employee last name?',
            name: 'LastName'
        },
        {
            type: 'input',
            message: 'What is the employee Id?',
            name: 'EmployeeId'
        },
        {
            type: 'input',
            message: 'What is the employee manager Id?',
            name: 'ManagerId'
        },
    ])
    .then(function (response) {
        connection.query('INSERT INTO employees(first_name, last_name, roles_id, manager_id) VALUES (?,?,?,?)', 
        [response.FirstName, response.LastName, response.EmployeeID, response.ManagerID]), function(err,response) {
            if (err) throw err;
            console.table(res);
            inquirer.prompt([
                {
                    type: 'list',
                    name: 'choice',
                    message: 'select an option.',
                    choices: [
                        'Main Menu',
                        'Quit'
                    ]
                }
            ])
           .then((answer) => {
               switch (answer.choice){
                   case 'Main Menu':
                       start();
                       break;
                       case 'Quit':
                           Quit();
               }
           })
        }
    })
}

function Quit() {
    console('See you next time!');
    process.exit();
}