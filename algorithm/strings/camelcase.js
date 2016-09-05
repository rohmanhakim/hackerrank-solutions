// https://www.hackerrank.com/challenges/camelcase/

process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function main() {
    var s = readLine();

    var checkCapital = function(s,index){
        return s.charCodeAt(index) > 64 && s.charCodeAt(index) < 91 ? true : false;
    }

    var asd = function(arr){
      return arr.filter(function(letter){
        return checkCapital(letter,0);
      }).reduce(function(total,letter){
        return total + 1;
      },checkCapital(s,0) === true?0:1);
    }

    console.log(asd(s.split('')));
}
