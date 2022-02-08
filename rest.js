const hi = (...rest)=>{
    console.log('...rest:',...rest,'rest 1' ,rest[1]) // a seoul 
    console.log('rest:',rest); //[a,seoul]
}

// hi('a','seoul'); 
//...rest: a seoul
//rest: [ 'a', 'seoul' ]

const a = {first:'wow'}
const b = {second:'ok'}
// hi(a,b)
//...rest: { first: 'wow' } { second: 'ok' }
//rest: [ { first: 'wow' }, { second: 'ok' } ]

const obj1 =  { a: 'seoul',b:'lite'};
const obj2 = {...obj1} // spread operator
// console.log(obj2)

hi('a',['b','^^'])