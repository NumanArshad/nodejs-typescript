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
function createSquare(config) {
    var _a, _b;
    var newSquare = { color: 'white', width: 25 };
    newSquare.color = (_a = config.color) !== null && _a !== void 0 ? _a : newSquare.color;
    newSquare.width = (_b = config.width) !== null && _b !== void 0 ? _b : newSquare.width;
    return newSquare;
}
var square = createSquare({ color: 'black' });
console.log(square);
function buildName(firstname) {
    var restname = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restname[_i - 1] = arguments[_i];
    }
    return firstname + " " + restname.join(",");
}
console.log(buildName("Muhammad", "Numan", "Arshad"));
var build = buildName;
console.log(build("Muhammad", "Numan", "Arshad"));
var myAdd = function (x, y) {
    return x + y;
};
//let anotherBuild:(firstname:string,...rst:string[])=>string=firstname
console.log(myAdd(2, 5));
function networkStates(stat) {
    var _a;
    switch (stat.state) {
        case "loading":
            return "Downloading";
        case "failed":
            console.log((_a = stat.code) !== null && _a !== void 0 ? _a : "notpassed");
            return "failed fetch response";
        case "success":
            return "fetch success";
    }
}
console.log(networkStates({ state: "failed", code: 46 }));
var handleArtistResponse = function (response) {
    if (response.errro) {
        console.log(response.errro.message);
        return;
    }
    console.log(response.artist);
};
handleArtistResponse({ errro: { message: "good" }, artist: [{ name: "fsmkk" }, { name: "fksnfkns" }] });
///////enum////////
var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["ERROR"] = 0] = "ERROR";
    LogLevel[LogLevel["WARN"] = 1] = "WARN";
    LogLevel[LogLevel["LOG"] = 2] = "LOG";
    LogLevel[LogLevel["DEBUG"] = 3] = "DEBUG";
})(LogLevel || (LogLevel = {}));
//type LogLevel2=keyof typeof LogLevel
function printLogs(customLog, message) {
    console.log("hahahha" + LogLevel[customLog]);
    var num = LogLevel[customLog];
    if (num == LogLevel.WARN) {
        console.log(customLog);
    }
}
///////
printLogs("WARN", "message n");
