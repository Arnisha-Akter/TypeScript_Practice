// // console.log('test');
// // function
// let greet : Function;

// greet = ()=>{
//     console.log('hello');
// }
// greet();

// const add = (a:number, b:number, c?:number | string) =>{
//     console.log(a+b);
//     console.log(c);
// }
// add(5,10,25);

type StringorName = string|number;
type ObjwithName = {name: string, uid:StringorName};

const logdetails= (uid: StringorName, item: string) =>{
    console.log(`${item} has a uid of ${uid}`);
}

// const greet= (user: {name: string, uid: StringorName}) =>{
//     console.log(`${user.name} say hello`);
// }

const greet= (user: ObjwithName) =>{
    console.log(`${user.name} say hello`);
}