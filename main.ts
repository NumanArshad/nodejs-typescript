export { }
var message = "hello typescript andjbf"
console.log(message)

let firstname;
firstname = "numan"
firstname = "hello"
firstname = 20
let sFlag: String = "didis"
let nl: Number = 30
console.log(sFlag)
let isFlag: Boolean = true
console.log(sFlag)
let lst: number[] = [1, 2, 3, 4]
console.log(lst)

let lst2: Array<number> = [3, 4, 4, 5, 5]
console.log(lst2)

let person: [string, number] = ["kjkwn", 1]
console.log(person)

let myfavorite: "dog";
myfavorite = "dog"
console.log(myfavorite)

type specie = "dog" | "cat" | "bird"
let animal: specie = "dog"

function double_fn(x: number): void {
    console.log("hahahaha")
}
console.log(double_fn(4))

type all = number | null
let vl: all = 20
console.log(vl)

let foo = "hello foo"
{
    const foo = (x: number) => {
        return x * 2
    }
    console.log(foo(300))
}
console.log(foo)


function fulname(firstname: string, lastname?: string) {
    return firstname + lastname
}
console.log(fulname('numan'))



abstract class Machine {
    constructor(public manufact: string) {

    }
    summary(): string {
        return `${this.manufact} make this machine`
    }
    abstract getInfo(): string;
}

class Car extends Machine {
    constructor(manufacturer: string, public position: number, public speed: number) {
        super(manufacturer)
    }
    move() {
        this.position += this.speed
    }
    getInfo() {
        return `this is a car located at ${this.position} going at speed of ${this.speed}`
    }
}


class Car2 {
    public position: number = 0
    private _speed: number = 20
    private _max: number = 200
    move() {
        this.position += this._speed
    }
    set speed(value: number) {
        this._speed = value;
    }
    get speed(): number {
        return this._speed
    }
}

let cr = new Car2()
cr.move()
cr.move()
cr.speed = 30
console.log(cr.speed)


class SomeClass {
    public static somestaticvalue: string = "hello"
    private somevalue: number = 15
    private someBoolean: boolean = false
    constructor() {
        SomeClass.somestaticvalue = SomeClass.getGoodBuy()
        this.somevalue = this.value_getter
        this.someBoolean = this.getBoolean()
    }
    public static getGoodBuy(): string {
        return "good buy"
    }
    public getFortyTwo(): number {
        return 42
    }
    public getBoolean(): boolean {
        return true
    }
    get value_getter(): number {
        return this.somevalue
    }
}


function curry(f) { // curry(f) does the currying transform
    return function (a) {
        return function (b) {
            return f(a, b);
        };
    };
}

function sum(a, b) {
    return a + b
}

let currySum = curry(sum)
console.log(currySum(2)(3))



//decorators
let earings = function (target) {
    target.hasEaring = true
}

let lipstick = function (color) {
    return function (target) {
        target.lips = color
    }
}
@earings
@lipstick('red')
class Girl {
    

}

console.log(`earings are ${Girl.hasEaring} and lips color is ${Girl.lips}`)


class Car3 {
    private color;
    constructor(color) {
        this.color = color
    }
    getColor() {
        return this.color
    }
    //    getColor(color){
    //       this.color=color
    //   }
}

//   let descriptor={
//       value:function(){
//           return this.color
//       },
//       writable:true,
//       configurable:true,
//       enumerable:true
//   }     
// to prevent method being override we have to declare 
// function readonly(target,key,descriptor){
//     descriptor.writable=false
//     return descriptor
// }
//  descriptor=readonly(Car3.prototype,'getColor',descriptor)
//  Object.defineProperty(Car3.prototype,'getColor',descriptor)
// ///////////////////////////////////
//  let cl=new Car3('green')
//   cl.getColor=(()=>'purple') //method being override
//   console.log(cl.getColor())

let readonly = function (target, key, descriptor) {
    console.log(target, key, JSON.stringify(descriptor))
    descriptor.writable = false
    return descriptor
}

let modelDecorator = (target) => {
    target.model = 'corola'
}
//@modelDecorator
class Car4 {
    private color;
    constructor(color) {
        this.color = color
    }

    //  @readonly
    getColor() {
        return this.color
    }
}

let ch = new Car4('yellow')
//ch.getColor=()=>'orange'
//console.log(ch.model)
//console.log(ch.getColor())


let unsure: unknown = "hello"
unsure = 20
console.log(unsure)


function error(message: string): never {
    console.error(`error message is ${message}`)
}
error('file not found')

function printLabel(labeledObj: { label: string }) {
    console.log(labeledObj.size);
}

let myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);


interface squareConfig {
    color?: string,
    width?: number
}
function createSquare(config: squareConfig): { color: string, width: number } {
    let newSquare = { color: 'white', width: 25 }
    newSquare.color = config.color ?? newSquare.color
    newSquare.width = config.width ?? newSquare.width
    return newSquare
}

let square = createSquare({ color: 'black' })
console.log(square)



function buildName(firstname: string, ...restname: string[]) {
    return firstname + " " + restname.join(",")
}
console.log(buildName("Muhammad", "Numan", "Arshad"))

let build: (fst: string, ...rst: string[]) => string = buildName
console.log(build("Muhammad", "Numan", "Arshad"))
let myAdd: (baseValue: number, increment: number) => number = function (
    x: number,
    y: number
): number {
    return x + y;
};
//let anotherBuild:(firstname:string,...rst:string[])=>string=firstname
console.log(myAdd(2, 5))


/////union and intersection (only comon function in union type)
interface Bird {
    fly(): void,
    layEggs(): void
}

interface Animal {
    fly(): void,
    swims(): void
}

declare function getSmalPet(): Bird | Animal
// let pet = getSmalPet()
// pet.fly()


type NetworkLoadingState={
    state: "loading"
}
type NetworkfailedState={
    state: "failed",
    code?: number
}
type NetworkSuccessState= {
    state: "success",
    response: {
        title: string,
        duration: number,
        summary: string
    }
}

type netwrokStat= NetworkLoadingState | NetworkfailedState | NetworkSuccessState

function networkStates(stat:netwrokStat):string{
   switch(stat.state){
       case "loading":
           return "Downloading";
       case "failed":
           console.log(stat.code ?? "notpassed")
           return "failed fetch response"
       case "success":
           return "fetch success"
   }
    
}
console.log(networkStates({state:"failed",code:46}))
  /////////


  ///////////////////////////////////////intersection/////////
  interface ErrorHandling{
      success:boolean;
      errro?:{message:string}
  }
  interface ArtworkData{
      artworks:{title:string}[]
  }
  interface ArtisData{
      artist:{name:string}[]
  }
  type ArtisResponse=ArtisData & ErrorHandling
  const handleArtistResponse=(response:ArtisResponse)=>{
      if(response.errro){
          console.log(response.errro.message)
          return
      }
      console.log(response.artist)
  }


  handleArtistResponse({errro:{message:"good"},artist:[{name:"fsmkk"},{name:"fksnfkns"}]})



  ///////enum////////
  enum LogLevel{
      ERROR,
      WARN,
      LOG,
      DEBUG
  }
  //equivalne  to 
  type LogLevel2='ERROR' | 'LOG' | 'DEBUG' | 'WARN'
  //type LogLevel2=keyof typeof LogLevel
  function printLogs(customLog:LogLevel2,message:string){
    console.log("hahahha"+LogLevel[customLog])
    const num=LogLevel[customLog]
      if(num==LogLevel.WARN){
          console.log(customLog)
      }
  }
  ///////
  printLogs("WARN","message n")