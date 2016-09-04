// https://www.hackerrank.com/challenges/pangrams/

function processData(input) {
    //Enter your code here
    var alphabet = "abcdefghijklmnopqrstuvwxyz"

    var containsAlphabet = function(letter,inp){
      return inp.indexOf(letter) !== -1 || inp.indexOf(letter.toUpperCase()) !== -1 ? 1 : 0;
    }

    var pangram = function(alph,inp){
      return alph.reduce(function(total,letter){
        return total + containsAlphabet(letter,inp);
      },0);
    }

    console.log(
      pangram(
        alphabet.split(''),
        ((input.split(' ')).join('')).split('')
      ) === 26? "pangram" : "not pangram"
    );
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
