/*
let person = {
    name: "Jonatan",
    lastName: "Vegas", 
    age: 42,
    inClass : true,
    classesTaugh: ['Javascript', 'Arrays']
}

person.name = "Jonathan" //edit
person.hasGlasses = true  //add a new property
console.log(person)

person.age = 21 // mistyped age
console.log(person)

// const allProps = Object.keys(person)
// console.log(allProps)
// const hasAge = allProps.indexOf("age") > -1
// console.log(hasAge)

// person.name = 'Antonio'
// console.log(person.name)
// console.log(person ["name"])
// console.log(person ["name"][0])
// //delete person.name
// console.log(person)

// let {names, age} = person
// console.log(names)
// console.log(age)
*/
let teacherAssistants = []

let teacherAssistantant = {
    name: "Jonathan",
    inClass : false,
}

teacherAssistants.push(teacherAssistantant)
console.log(teacherAssistants[0].name)

//--
let teacherAssistantant2 = {
    name: "Antonio",
    inClass : false,
}
teacherAssistants.push(teacherAssistantant2)
//console.log(teacherAssistants)
console.log(teacherAssistants[1].name)
