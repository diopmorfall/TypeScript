//* to compile: tsc app.ts

function somma(a: number, b: number) {
    //* typization of parameters
    return a + b;
  }
  
  console.log(somma(2, 3));
  //! if either of one is not a number, we'll get an error
  //* once it's programmed and it won't throw any error
  //* the .ts files will be compiled into a .js file
  
