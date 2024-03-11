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