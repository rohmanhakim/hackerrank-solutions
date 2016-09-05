// https://www.hackerrank.com/challenges/circular-array-rotation/

function processData(input) {
    //Enter your code here
    var m = input.split("\n");
    
    var nkq = m[0].split(' ');
    var arr = (m[1].split(' ')).map(function(num) {
      return parseInt(num);
    });

    m.splice(0,2);

    var n = parseInt(nkq[0]);
    var k = parseInt(nkq[1]);
    var q = parseInt(nkq[2]);

    var rightRotate = function(arr,k) {
      return arr.map(function (num,index,arr){
        var next = index - (k % arr.length);
        return arr[next < 0? arr.length + next : next];
      });
    }

    var getQuery = function(arr,m) {
      return m.map(function (num,index,m){
        return arr[parseInt(m[index])];
      });
    }

    console.log(getQuery(rightRotate(arr,k),m).join("\n"));
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
