function Product (id, name){
	//public field
	this.name = name;

	//private field
	var ID = id;

	//public method
	this.getID = function(){
		return ID;
	}
	//public method
	this.setID = function(id){
		ID = id;
	}
}

Product.prototype.getName = function(){
	return this.name;
}

Product.prototype.color = '白色';

var product1 = new Product('1', '舒潔衛生紙');
var product2 = new Product('2', '蘭蔻護手霜');

console.log('-------------------------1');
console.log(product1);
console.log('1', product1.getID());
console.log('2', product1.name);
console.log('3', product1.color);
console.log('3', product1.getName());

console.log('-------------------------2');
console.log(product2);
console.log('1', product2.getID());
console.log('2', product2.name);
console.log('3', product2.color);
console.log('3', product2.getName());

console.log('=========change product1 ID =========');
product1.setID("110");
console.log('product1 ID', product1.getID());
console.log('product2 ID', product2.getID());


console.log('=========change product1 name ===========');
product1.name = "大王紙尿布";
console.log('product1 name', product1.name);
console.log('product2 name', product2.name);


console.log('=========change Product prototype color ===========');
Product.prototype.color = "紅色";
console.log('product1 color', product1.color);
console.log('product2 color', product2.color);



function Animal (name, age){
	this.name = name;
	this.age = age;
}

Animal.prototype.sound = function(){
	return '呼~'
}


function Cat(name, age){
	Animal.call(this, name, age)
	var _super = Cat.prototype;
	this.sound = function(){
		return _super.sound() + '~喵'
	}
}

//Cat.prototype.constructor 會指向 Animal
//Cat.prototype = Object.create(Animal.prototype);
Cat.prototype = new Animal();

//重新指定正確的constructor
Cat.prototype.constructor = Cat;


var pipi = new Cat('皮皮', 2);
var kuro = new Cat('小黑', 3);

//在執行期，動態改變sound 行為
kuro.sound = function(){
	return "嘿嘿嘿";
}

console.log('----------Cat-----------')
console.log('--- pipi --');
console.log(pipi);
console.dir(Cat)
console.log(pipi.sound());

console.log('--- kuro --');
console.log(kuro);
console.log(kuro.sound());


console.log('-------typeof---------')
console.log(typeof pipi)

console.log('-------instanceof---------')
console.log(pipi instanceof Animal)
console.log(pipi instanceof Cat)
console.log(pipi instanceof Array)
console.log(pipi instanceof Function)
console.log(pipi instanceof Object)