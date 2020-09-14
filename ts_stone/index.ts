interface Example {
    add :(a:number,b:number) => number
}
const ex1:Example= {
    add : (a,b) =>{
        return a+b;
    }
}