// console.log("Hello World"[10])
// console.log("12345".length )

// let str = "Sahdif"

// console.log(str[str.length-1])

// let name = "Chewbacca"

// let fullName = "Chewbacca Ford"

// let isRaining = true 

// let temp = 20

//  temp = temp + 2

// console.log(temp)

// // let allows us to change the value of the variable

// // Const doesn't allow us to do this. Helps prevent errors


// let bool = '1' == 1


// let boolTwo = '1' === 1 

// // != not equal


// // Conditionals

// let subscribed = false
// let loggedIn = true

// if (subscribed === true) {
//     console.log("show the content")
// }

// else if (loggedIn === true) {
//     console.log("Upgrade to pro")
// }

// else {
//     console.log("Please subscribe")
// }

// if (10) {
//     console.log("logged")
// }

// // Ternary operator used when you can do with one line

// let hot = false

// hot ? console.log("get suncreen") : console.log("not hot")

// LOOPS

// let title = "Frontend Simplified"

// for (i=0 ; i < title.length; i++ ) {
//     console.log(name[i])
// }

// function convert (cel) {

//     far = cel * 1.8 + 32
//     return far 
// }

// console.log(convert(0))

// const celsius = () => {
//     return 'fes'
// }

// console.log(celsius())

// let grades = ['A+', 'A', 'FAIL']

// let goodGrade = grades.filter(item => item !== 'FAIL'
// )

// console.log(goodGrade)

// let grades = ['A+', 'A', 'FAIL']

// let goodGrade = []

// for (i = 0; i < grades.length ; i++) {

//     if (grades[i] !== 'FAIL') {
//         goodGrade.push(grades[i])
//     }
//     console.log(goodGrade)
// }

// let dollors = [1, 5, 10, 3];

// // let newDoll = dollors.map(num => { return num * 100})

// // console.log(newDoll)

// let newDoll = [];

// for (i=0; i < dollors.length; i++) {
//    newDoll.push(dollors[i] * 100)  
// }

// console.log(newDoll)

// let users = []

// function register (username, email, password, subcriptionStatus, discordId, lessonsCompleted) {

// let user =  {
//     username: "Sahdif",
//     email:"sahdif.islam1@gmail.com",
//     password: "test123",
//     subcriptionStatus: "VIP",
//     discordId: 1,
//     lessonsCompleted: 2
// }
// }

console.log(document.querySelector('.title'))

document.getElementById("header").innerHTML = "hello"

document.querySelector('.title').style.color = "red"

function changeTitleToRed() {
    console.log("clicked")
    document.querySelector("button").style.color = "red"
}