//* Es6
//* Spread and Rest operator
//todo Used in array and objects 

//   function addNumers(a,b,c,...other){
// console.log(other)
// return a+b+c;
// }
// const rest=addNumers(2,5,6,8,9)
// console.log(res); 

// //? Rest
// function addNumers(a,b,c,...other){
//     console.log(other)
//     return a+b+c;
//     }
    
//     const res=addNumers(2,5,6,8,9)
//     console.log(res);


// // ? Spread
//     var names=["rakesh","kumar","gupta"];

//     function getNames(name1,name2,name3){
//         console.log(name1,name2,name3);


//     }
    
//     getNames(names[0],names[1],names[2])
//     getNames(...names)//*best way
//     getNames(names)


//! Object ke Saath

var students={

    name:"Rakesh",
    age: "21",
    hobbies:["Running","Cricket"]
}

//console.log(students.hobbies)
const {...rest}=students;
console.log(rest);

//? Spread

var newStudent={
    ...students,
    name:"raj",
    age:"26"
}
console.log(newStudent)