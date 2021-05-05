

//Function Composition: when the output of a function is other function

const compose = (f, g) => x => f(g(x));


//example compose:

const double = n => n * 2;
const inc = n => n + 1;


const transform = compose(double, inc);


console.log(transform(3))

var hola = "Hola"