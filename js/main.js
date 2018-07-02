function myNumber(){
var n = prompt("wpisz liczbę", " ");
    if (n > 100 && n < 200) {
        console.log("Liczba znajduje się w przedziale");
        return false;
    }
    else {
        console.log("Liczba nie znajduje się w przedziale");
        return false;
    }
}