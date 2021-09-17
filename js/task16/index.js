/* eslint-disable max-classes-per-file, no-console */

// put your code here
export const Sportsman = class{
    constructor(name){
        this.name=name;
    }
    run(){
        console.log(`${this.name} is running`)
    }
}

export class Swimmer extends Sportsman {
  constructor(name,style) {
    super(name);
    this.style=style;
  }
  swim(){
      console.log(`${this.name} is swimming ${this.style}`)
  }
}

