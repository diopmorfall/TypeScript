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