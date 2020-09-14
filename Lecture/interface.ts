//interface에서 객체의 속성들을 정의
interface Seoul {
    country:'korea',
    feature:string
}
//interface Seoul을 가지고 만든 객체
const seoul:Seoul={
    country:'korea',
    feature:'Good',
    population:'1000m'
}
//interface는 나중에 추가한 것이라도 결국 하나로 합쳐줌(type은 그렇지XX)
interface Seoul {
    population?:'1000m'
}

//interface 상속
interface Me extends Seoul {
    hi:'hello'
}
const me:Me ={
    country:'korea',
    feature:'Good',
    hi:'hello'
}
//상속해온 Seoul의 것들 +  Me에서 정의한 것들을 다 사용해줘야

//type
type Life = {
    love:'Most Important',
    readonly money?:string,
    health:string
} | string | number;
/* type은 이렇게 나중에 쓴 것을 합쳐주지 XX
type Life = { 
    people : string
}
*/
const myLife : Life = 'Good'; //Life의 string type을 따라감
const myLife2:Life = 29; // Life의 number type을 따라감
const myLife3 : Life = {
    love:'Most Important',
    money:'적당히',
    health:'꾸준히'
}
 //myLife3.money = 'sdsd'  -> money가 readonly기에 바꿀 수 X
 myLife3.health = '젊을 때 챙겨야' // readonly아니기에 바꿀 수 O
