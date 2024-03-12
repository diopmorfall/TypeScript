//* to compile: tsc app.ts

function somma(a: number, b: number) {
    //* typization of parameters
    return a + b;
}
  
console.log(somma(2, 3));
//! if either of one is not a number, we'll get an error
//* once it's programmed and it won't throw any error
//* the .ts files will be compiled into a .js file

//* TS allows us to avoid dynamic behaviors like these (which are correct in JS)
/*
  let prova = 7;
  prova = 'cniwc'
*/

let test: number = 5; //* specific type assignment
let a: string; //* either do this, or give the value directly
let inference = 9; //* type inference, TS guesses the type from the value
let isTrue: boolean;

let persona = {
  nome: 'Yoichi',
  cognome: 'Isagi',
};
//! persona.eta won't work because it's not defined, unlike in JS

let player: {
  name: string;
  surname: string;
  age: number;
  skills: {
    goals: number;
    assists: number;
    gamesPlayed: number;
  };
} = {
  name: 'Shidou',
  surname: 'Ryusei',
  age: 17,
  skills: {
    gamesPlayed: 4,
    goals: 4,
    assists: 0,
  },
};
//! the same if I don't declare all the properties defined in the typization, I'll get an error

function getData(data: { id: number; username: string }) {
  console.log("Data", data.id);
}
//* instead of declaring countless parameters, we can declare an object and store them all there
getData({ id: 324234, username: 'wororo' });

const arr: number[] = [3242, 535, 9];
//* for arrays, we specify the type this way

const matchResult: {
  gameId: number;
  team1: string;
  team2: string;
  finalScore: string;
  goalScorers: [string, string, string, string, string];
  //* goalScorers is a tuple, a fixed length and ordered array
} = {
  gameId: 3,
  team1: 'Bastard Munchen',
  team2: 'Manshine City',
  finalScore: '3-2',
  goalScorers: ['Chigiri', 'Kaiser', 'Kunigami', 'Nagi', 'Yukimiya'],
};

console.log("The match ended ", matchResult.finalScore)
console.log("The goal scorers are ", matchResult.goalScorers)

let x: any[] = [1, true, '']; //* any is used to give a generic type
//! but we should be careful about how we use it

let union: string | number | string[] = '';
//* this allows us to set the types of values we accept

type Pirate = {
  name: string;
  bounty: number;
  crew: string;
  role: string;
  devilFruit?: string | null;
};
//* this is a custom type we can define, it's like defining a class

let pirate: Pirate = {
  name: 'Papy D. Iop',
  bounty: 3_000_000_000,
  crew: 'Youngster pirates',
  role: 'Captain',
  devilFruit: 'Atom atom no mi',
};

function getPirate(pirate: Pirate) {
  console.log(pirate.name);
}
getPirate(pirate);

//* enum is used to save a check that we'll frequently use into a variable
enum Category {
  CITIZEN,
  PIRATE,
  MARINE,
  REVOLUTIONARY,
  CELESTIAL_DRAGON,
  GOROSEI,
}

const opCharacter = {
  name: 'Tanjiro',
  surname: 'Kamado',
  category: Category.CITIZEN,
};

if (opCharacter.category == Category.CELESTIAL_DRAGON) {
  console.log('You trash');
}


function add(a: number, b = 3): number { //* in this case it's not compulsory
  //* but adding the type of the return will help us keeping things in check
  return a + b;
}

//? if the function returns any, we can return any type of value

function multiply(a: number, b: number): number {
  return a * b;
}

add(4); //? adding to the default value
add(3, 4);
//! add('4') won't work, because of the inference (it also guesses the type of return)

function noReturn(): void {  //? it's the same for void
  console.log('nothing');
}
noReturn();

//* technically it works, but it's wrong because we could assign any function to it
let value: (x: number, y: number) => number;
//* but we only accept functions that have two numeric parameters that return a number
//value = add;
value = multiply;
//! value = noReturn this won't work anymore

console.log(value(7, 7));

function elaborate(x: number, func: () => void) {}
//* I can also use functions as parameters (like callbacks)

elaborate(10, () => {
  console.log('report');
});


//* for the compiler of ts, we can use tsc app.ts --watch (or -w)
//? it automatically compiles a .js file from our .ts one
console.log('watching...')

//* tsc --init: compiles the whole ts project, creating a tsconfig.json
//? we can use -w after this, so that we can look for any change in the project
//* because it'll be very likely that we'll have multiple .ts files

//* in the tsconfig, I can also exclude or include some files to not compile them
//? node_modules directory is excluded by default, but if we exclude something else we need to specify it again

//* target allows to compile in a specified ES version; if it's an older one, the code be adapted
//? (for example, ES5 doesn't have const and let, if we use it all variables will be turned into var)ù


abstract class Player {
  //* in angular constructors are defined this way
  //? automatically assigning the value of the parameter that we're passing
  constructor(
    private name: string,
    private surname: string,
    protected team: string
  ) {
    this.name = name;
    this.surname = surname;
    this.team = team;
  }

  introduction(): void {
    console.log(`Hey there! I'm ${this.name} ${this.surname}`);
  }

  challenge(player: Player): void {
    console.log(`I'm going to beat you ${player.surname} ${player.name}`);
  }

  abstract checkContract(): void;
  //* abstracts methods are declared here, but must be implemented by children classes
}

//let player1: Player = new Player('Ryusei', 'Shidou', 'PXG');
//* If we need to declare a variable that we'll initialize later, we coud give it a specific type
//let player2: Player = new Player('Meguru', 'Bachira', 'FC Barcha');

//player1.introduction();
//player2.challenge(player1);

//! An abstract class can't have objects of its own, but it's used as a "model" for other classes that extend it

class Striker extends Player {
  goalScored: number = 5;

  constructor(name: string, surname: string, team: string, goalScored: number) {
    super(name, surname, team);
  }

  static getReport(){ //* a method that is available if we call the class, not the instance
    console.log("Loading player data...")
  }

  changeTeam() {
    //* protected properties can be changed inside the classes and by the ones that extend the first class
    this.team = 'Japan U20';
  }

  checkContract(): void {
    console.log('Implemented');
  }
}

const striker1: Striker = new Striker('Rin', 'Itoshi', 'PXG', 5);
striker1.introduction();

//Player.introduction() //* static methods can be called this way

//! const striker2: Striker = new Player('Ryusei', 'Shidou', 'PXG', 4);
// an abstract class can't have instances on its own

const striker2: Striker = new Striker('Ryusei', 'Shidou', 'PXG', 4);
striker2.challenge(striker1);

Striker.getReport() //* calling a static method. It's like callink Math.floor() or the others

class Referee {
  private static instance: Referee; //* here's our instance
  private constructor(private name: string, private surname: string) {
    //* if a class has a private constructor, we're creating a singleton
    //* a class where it can have only one instance of itself
  }

  //* this method helps us to check if the instance exists or not
  static getInstance() {
    if (Referee.instance) {
      return this.instance;
    }
    this.instance = new Referee('Pierluigi', 'Collina');
    return this.instance;
  }

  greet() {
    console.log(`I'm the referee for this match, ${this.name} ${this.surname}`);
  }
}

//const referee: Referee = new Referee('Pierluigi', 'Collina')
//! I don't have to create an instance anymore, instead I do this

Referee.getInstance().greet();