var a = 5,
    b = 4,
    value = (a * a) - (2 * a * b) - (b * b);

console.log('The result of (a*a) - (2*a*b) - (b*b) when a is ' + a + ' and b is ' + b + ' is equal to ' + value);

alert ('The result of (a*a) - (2*a*b) - (b*b) when a is ' + a + ' and b is ' + b + ' is equal to ' + value);

if (value > 0){
    console.log('wynik jest dodatni')
} else if (value < 0){
    console.log('wynik jest ujemny')
} else {
    console.log('wynik jest równy 0')
}