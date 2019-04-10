import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './style.css'

ReactDOM.render(<App></App>,document.getElementById('root'));

// class Animal {
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     }
//     speak(){
//         console.log('I am',this.name ,'and i am', this.age,'year old');
//     }
// }

// const animal1 = new Animal('simba',3);
// animal1.speak()

// console.log(animal1)

// class Lion extends Animal {
//     constructor(name,age,furColor,speed){
//         super(name,age)
//         this.furColor =  furColor
//         this.speed = speed
//     }
//     roar(){
//         console.log('Roar',this.roar ,'speed', this.speed);
//     }
// }

// const lion1 = new Lion('Mufasa',20,'golden',25)
// lion1.speak();
// lion1.roar();
// console.log(lion1)