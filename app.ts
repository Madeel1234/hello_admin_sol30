#! /usr/bin/env node

// Task # 30
// Hello Admin: Make a array of five or more usernames, including the name "admin" Imagine you are writing code that will print
// A greetings to each user after they log into a website. loop through the array, and print a greeting to each user.
// If the username is 'admin', print a special greetings, such as hello admin, would you like to see a atatus report.
// Otherwise, print a generic greetings, such as hello eric, thank you for login in again.

let users : string [] =  ["admin","Eric","Aiza","Fatima","Ali"]

for(let user of users){
    if(user==="admin"){
        console.log("Hello admin,would you like to see a status report?")
    } else {
        console.log(`Hello ${user},thank you for logging in again`)
    }
}