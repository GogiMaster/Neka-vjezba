console.log('Ovo je statement')//statement
//window.alert('Ovo je Pop-Up')//pop-up

/*varijable  su container za pohranu podataka
varijabla se ponasa kao i ono u njoj
kreira se sa: 1.Deklaracijom - (var , let , const)
              2.nekim assingment-om*/

// let -  deklaracija
// firstname -opis varijable (varijabla)
//console.log(firstname) - Prikažze opis (first name - prvo ime)
//let firstnam3='gogi' -Cijela komanda skraceno

//let f1rstname
//firstname='gogi' - ovo je duzi nacin i bolji za neke druge stvari



                       // tipovi datoteka : 
let firstname ='gogi'; // 1.string (za slova) sa navodnicima
let age=21             // 2.number (za brojeve) bez navodnika
let student=true;      // 3.boolein (true or false) bez navodnika

age=age + 11;          //zbrajanje
firstname=firstname + 1     //ako se koristi String 

console.log('budala si',firstname); //za text prije ili poslje varijable u console F12
console.log('ti si',age, 'godina star');
console.log('ti si jako pametan',student);

 //ovako se ubacuje u html
document.getElementById('p2').innerHTML ='Ti imas ' + age + ' godine';  
document.getElementById('p3').innerHTML ='ti si jako pametan: ' + student;

//aritmetick ekspresija neka

let broj= 100
broj = broj +10
broj -= 20
broj= broj *2
broj /=2
broj %=8

console.log('odgovor  ',broj)

let zadatak= 3+3 * (8-6)

console.log('odgovor je ',zadatak)


//user input
//let username = window.prompt('Whats your name')
//console.log(username)
let username

document.getElementById('dugme').onclick = function(){
    username = document.getElementById("text").value;
    console.log(username);
    document.getElementById('label').innerHTML ='Pozdrav ' + username; 
}
let x
let y
let z

x = String('111')  //Konverta number u string
y = Number('ggg') //konverta broj u string
z = Boolean('') //Ako nesto pise unutra onda je true, u suprotnom false

console.log(x, typeof x)
console.log(y, typeof y)
console.log(z, typeof z)

//Const= varijabla koja se nemoze mjenjati
const PI =3.14159
let konj
let frame

//PI = 22 //ovo nece raditi posto je deklaracija const

//konj= window.prompt('Enter radius')
konj= Number(konj)

frame = 2 * PI * konj
console.log('Radius je ',frame)

//matematika
let q
let w = 5
let e = 9
let max
let min

//q= Math.round(q) //zaokruzivanje na jednu decimalu
//q = Math.floor(q) //na nizu decimalu
//q = Math.ceil(q) //na vecu decimalu
//q = Math.pow(q, 4) // q na četvrtu
//q = Math.sqrt(q) //korijen
//q= Math.abs(q)//distanca  od nule
//min = Math.min(q,w,e)//definira max ili min brojku između vraijednosti varijabli
//max = Math.max(q,w,e) 
//q = Math.PI
//console.log(q)


//Objekti = Container za properies/methodes

//Property = values/variables koje opisuju šta objekt ima npr(name, age)
//mehodes = Funkcije koje opisuju šta objekt može napraviti npr.(eat, drink, sleep)

var human1 = {
    name:'Rick',
    age:65,

    eat : function(){
        console.log('Rick jede')
    },
    drink : function(){
        console.log('rick pije')
    },
    sleep : function(){
        console.log('rick spava')
    },
};

//human.name //dot notation
//human['name of property']//bracket notation

console.log(human1.name);
human1.eat()
human1.drink()
human1.sleep()

var human2 = {
    name:'Morty',
    age:16,

    eat : function(){
        console.log('Morty jede')
    },
    drink : function(){
        console.log('Morty pije')
    },
    sleep : function(){
        console.log('Morty spava')
    },
};

console.log(human2.name);
human2.eat()
human2.drink()
human2.sleep()

console.log(10 / 20)

//arrays = specijalna varijabla, sadrzi vise od jedne value| svaki 'space' je element
// dohvacam element sa index brojem sa zagradom [0]

var cars =['BMW','Audi','Pezo'];

console.log(cars[0]);
console.log(cars[1]);
console.log(cars[2]);

cars.push('Tesla'); //dodaje element
cars.pop() // uklanja zadnji element

console.log(cars[3]); //prikaz mora biti ispod zadane varijable

var numberofcars = cars.length //koliko ima elemenata
cars = cars.sort() //sortira alphabeticli
var lastCar = cars[cars.length-1]

console.log(lastCar)

//funkcija je blok koda ko dizajniran da izvede neki task (subroutine)
//moramo pozvati funkciju da napravi task

function sayHello(Name, Age){
    console.log('hello',Name);
    console.log('godine',Age);

}

var myName = 'Brooo'

sayHello('Bro',21)//arumenti u zagradi-vrijednosti ili varijable koji se salju funkciji

function toCels(f){
    return (f-32) * (5/9) //return vraca vrijednost imenu funkcije
}
function toFar(c){
    return (c *9/5) + 32;
}
var temp = toFar(43) //kada pozovemo funkciju prikaze se kao vrijdnost varijable
console.log(temp)