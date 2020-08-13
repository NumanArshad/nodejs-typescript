"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var message = "hello typescript andjbf";
console.log(message);
var firstname;
firstname = "numan";
firstname = "hello";
firstname = 20;
var sFlag = "didis";
var nl = 30;
console.log(sFlag);
var isFlag = true;
console.log(sFlag);
var lst = [1, 2, 3, 4];
console.log(lst);
var lst2 = [3, 4, 4, 5, 5];
console.log(lst2);
var person = ["kjkwn", 1];
console.log(person);
var myfavorite;
myfavorite = "dog";
console.log(myfavorite);
var animal = "dog";
function double_fn(x) {
    console.log("hahahaha");
}
console.log(double_fn(4));
var vl = 20;
console.log(vl);
var foo = "hello foo";
{
    var foo_1 = function (x) {
        return x * 2;
    };
    console.log(foo_1(300));
}
console.log(foo);
function fulname(firstname, lastname) {
    return firstname + lastname;
}
console.log(fulname('numan'));
var Machine = /** @class */ (function () {
    function Machine(manufact) {
        this.manufact = manufact;
    }
    Machine.prototype.summary = function () {
        return this.manufact + " make this machine";
    };
    return Machine;
}());
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car(manufacturer, position, speed) {
        var _this = _super.call(this, manufacturer) || this;
        _this.position = position;
        _this.speed = speed;
        return _this;
    }
    Car.prototype.move = function () {
        this.position += this.speed;
    };
    Car.prototype.getInfo = function () {
        return "this is a car located at " + this.position + " going at speed of " + this.speed;
    };
    return Car;
}(Machine));
var Car2 = /** @class */ (function () {
    function Car2() {
        this.position = 0;
        this._speed = 20;
        this._max = 200;
    }
    Car2.prototype.move = function () {
        this.position += this._speed;
    };
    Object.defineProperty(Car2.prototype, "speed", {
        get: function () {
            return this._speed;
        },
        set: function (value) {
            this._speed = value;
        },
        enumerable: false,
        configurable: true
    });
    return Car2;
}());
var cr = new Car2();
cr.move();
cr.move();
cr.speed = 30;
console.log(cr.speed);
var SomeClass = /** @class */ (function () {
    function SomeClass() {
        this.somevalue = 15;
        this.someBoolean = false;
        SomeClass.somestaticvalue = SomeClass.getGoodBuy();
        this.somevalue = this.value_getter;
        this.someBoolean = this.getBoolean();
    }
    SomeClass.getGoodBuy = function () {
        return "good buy";
    };
    SomeClass.prototype.getFortyTwo = function () {
        return 42;
    };
    SomeClass.prototype.getBoolean = function () {
        return true;
    };
    Object.defineProperty(SomeClass.prototype, "value_getter", {
        get: function () {
            return this.somevalue;
        },
        enumerable: false,
        configurable: true
    });
    SomeClass.somestaticvalue = "hello";
    return SomeClass;
}());
function curry(f) {
    return function (a) {
        return function (b) {
            return f(a, b);
        };
    };
}
function sum(a, b) {
    return a + b;
}
var currySum = curry(sum);
console.log(currySum(2)(3));
//decorators
var earings = function (target) {
    target.hasEaring = true;
};
var lipstick = function (color) {
    return function (target) {
        target.lips = color;
    };
};
var Girl = /** @class */ (function () {
    function Girl() {
    }
    Girl = __decorate([
        earings,
        lipstick('red')
    ], Girl);
    return Girl;
}());
console.log("earings are " + Girl.hasEaring + " and lips color is " + Girl.lips);
var Car3 = /** @class */ (function () {
    function Car3(color) {
        this.color = color;
    }
    Car3.prototype.getColor = function () {
        return this.color;
    };
    return Car3;
}());
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
var readonly = function (target, key, descriptor) {
    console.log(target, key, JSON.stringify(descriptor));
    descriptor.writable = false;
    return descriptor;
};
var modelDecorator = function (target) {
    target.model = 'corola';
};
//@modelDecorator
var Car4 = /** @class */ (function () {
    function Car4(color) {
        this.color = color;
    }
    //  @readonly
    Car4.prototype.getColor = function () {
        return this.color;
    };
    return Car4;
}());
var ch = new Car4('yellow');
//ch.getColor=()=>'orange'
//console.log(ch.model)
//console.log(ch.getColor())
var unsure = "hello";
unsure = 20;
console.log(unsure);
function error(message) {
    console.error("error message is " + message);
}
error('file not found');
function printLabel(labeledObj) {
    console.log(labeledObj.size);
}
var myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);
// function createSquare(config: squareConfig): { color: string, width: number } {
//     let newSquare = { color: 'white', width: 25 }
//     newSquare.color = config.color ?? newSquare.color
//     newSquare.width = config.width ?? newSquare.width
//     return newSquare
// }
function createSquare(config) {
    return { color: config.color || "red", area: config.width || 20 };
}
var square = createSquare({ colour: 'black' });
console.log(square);
var user = {
    name: "numan",
    age: 22
};
var admin = {
    name: "numan",
    age: 22,
    isAdmin: true
};
function printRoles(object) {
    return object;
}
// console.log(printRoles({name:"ndjwbf",age:30}))
function printGeneric(config) {
    return config;
}
console.log(printGeneric({ name: "ndjwbf", age: 30 }));
console.log(printGeneric({ name: "ndjwbf", age: 30, isAdmin: true }));
var UserClass = /** @class */ (function () {
    function UserClass(name, age) {
        this.name = name;
        this.age = age;
    }
    UserClass.prototype.printValues = function () {
        console.log("name of user is " + this.name);
    };
    return UserClass;
}());
var newUser = new UserClass("numan arshad", 23);
newUser.printValues();
function identityInterface(config) {
    return config;
}
console.log(identityInterface({ id1: "hello", id2: "hello2" }));
///tuple generics 
function tupelGenerics(arg1, arg2) {
    return { id: arg1, id2: arg2 };
}
console.log(tupelGenerics(20, "hwnjbfe"));
function identityServices(arg1, arg2) {
    var identityServices = {
        arg1: arg1,
        arg2: arg2
    };
    return identityServices;
}
// console.log(identityServices<String,Number>({arg1:"jkn",arg2:2}))
var Programmer = /** @class */ (function () {
    function Programmer(lang) {
        this.languageName = lang;
    }
    return Programmer;
}());
function lengIdentity(arg) {
    console.log(arg.length);
    return arg;
}
console.log(lengIdentity(["lme", "nfjkne"]));
//isKey exist
function getProperty(object, key) {
    return object[key];
}
console.log(getProperty({ name: "kjken", age: 33 }, "name"));
var difficultyLevel;
(function (difficultyLevel) {
    difficultyLevel[difficultyLevel["Easy"] = 0] = "Easy";
    difficultyLevel[difficultyLevel["Medium"] = 1] = "Medium";
    difficultyLevel[difficultyLevel["Hard"] = 2] = "Hard";
})(difficultyLevel || (difficultyLevel = {}));
var typescript_info = {
    name: "typescript",
    supersert: "js",
    difficulty: difficultyLevel.Hard
};
var superset = getProperty(typescript_info, 'difficulty');
console.log(superset);
