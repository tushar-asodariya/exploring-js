const tutorial = require('./tutorial');

console.log(tutorial);

console.log(new tutorial.SomeClass());

//event emitter

const EventEmitter = require('events');

const eventEmitter = new EventEmitter();


eventEmitter.on('someEvent', (value) => {
    console.log('someEvent occurred,', value.PI);
});


eventEmitter.emit('someEvent',tutorial);

/**
 * Represents a person.
 * @extends EventEmitter
 */
class Person extends EventEmitter {
  /**
   * Creates a new instance of the Person class.
   * @param {string} name - The name of the person.
   */
  constructor(name) {
    super();
    this._name = name;
  }

  /**
   * Gets the name of the person.
   * @returns {string} The name of the person.
   */
  get name() {
    return this._name;
  }
}

let dhara = new Person('tushar');

dhara.on('tushar', ()=> console.log(dhara.name));

dhara.emit('tushar');

const readLine = require('readline');

const r1 = readLine.createInterface({input: process.stdin, output: process.stdout});
let num = Math.floor((Math.random() * 10)+1);
let num1 = Math.floor((Math.random() * 10) + 1);
let answer = num + num1;

r1.question(`What is ${ num } + ${ num1 }? \n`, (userInput)=>{
    if(userInput.trim() == answer){
        console.log(`Correct !! ${ userInput }`);
    r1.close();

    }
    else{
        console.log(`Wrng answer !! ${ answer }`);
        num = Math.floor((Math.random() * 10)+1);
        num1 = Math.floor((Math.random() * 10) + 1);
        answer = num + num1;
        r1.setPrompt('Try Again \n' +`What is ${ num } + ${ num1 }? \n`);
        r1.prompt();
       
        r1.on('line',(userInput)=>{
            if(userInput.trim()==answer){
        console.log(`Correct !! ${ userInput }`);
                    r1.close();
            }else{
                num = Math.floor((Math.random() * 10)+1);
                num1 = Math.floor((Math.random() * 10) + 1);
                answer = num + num1;
                r1.setPrompt('Wrong again, try again !! \n '+`What is ${ num } + ${ num1 }? \n`);
                r1.prompt();
                
            }
        });
    }
}
);

r1.on('close', ()=>{
    console.log('Have a nice day')
})