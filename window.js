
var name = "Ayman";
function add (num1, num2) {
     result  = num1 + num2;
    console.log('name inside ', name);
    function double (num) {
        return num * 2;
    }
    var total = double(result);
    return total;
}
console.log('outside name ', name);
var sum = add(13,5);
console.log(sum);