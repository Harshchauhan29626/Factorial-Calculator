function factorial() {
    var num1 = document.getElementById("num1").value;
    var result = document.getElementById("p1");
    var btn = document.getElementById("btn");
    function myfac(num1) {
        if (num1 === 0 || num1 === 1) {
            return 1;
        }
        else {
            return num1 * myfac(num1 - 1);
        }
    }

    result.innerHTML = "The factorial of " + num1+ " is: " + myfac(parseInt(num1)) ;
     
}

