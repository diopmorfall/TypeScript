function server(): void{
    console.log('server started in another file')
}

server()

export function power(x: number): number{
    return x * x
}
 //? I can export functions, classes, interfaces, you name it