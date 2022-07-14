// Create an object for a "Teacher" with the following properties
// - Name (with anyone's name)
// - Classes (with an empty array)
// - currentlyTeaching (true or false, your choice)

// Now with the above object do the following:
// - Add a new class name (of your choice) to the "Classes" array 
// - Add another class.
// - Display the Teacher's Name
// - Display the Teacher's Classes
// - Display the full Teacher Object

let teacher = {
    name: "Jonathan",
    currTeaching : true
}
teacher.classes =[]

let arrayClass = {
    asig1 : "Math",
    asig2 : "History"
}

let arrayAlum = {
    numAlum : 10,
}

teacher.classes[0] = arrayClass
teacher.classes[1] = arrayAlum
console.log('Teacher Name: ' + teacher.name)
console.log('Teacher Classes\n' + teacher.classes[0].asig1 + '\n' + teacher.classes[0].asig2)
console.log(teacher)



// teacher.classes.push("arrays")
// teacher.classes.push("objects")
//console.log