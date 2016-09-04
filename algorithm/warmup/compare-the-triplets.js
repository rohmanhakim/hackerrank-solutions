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
    var a0_temp = readLine().split(' ');
    var a0 = parseInt(a0_temp[0]);
    var a1 = parseInt(a0_temp[1]);
    var a2 = parseInt(a0_temp[2]);
    var b0_temp = readLine().split(' ');
    var b0 = parseInt(b0_temp[0]);
    var b1 = parseInt(b0_temp[1]);
    var b2 = parseInt(b0_temp[2]);

      var ranks = [
        [a0,b0],
        [a1,b1],
        [a2,b2]
      ]; 
    
    var compareTriplets = function (ranks,val) {
  
  var res = ranks.map(function (rank,index) {
                  return rank[0] > rank[1] ? 1 : rank[0] === rank[1] ? 0 : -1;
                }).reduce(function (total,rank){
                  return rank === val ? total + 1 : total  + 0;
                },0);

              return res;
            }

    
    console.log(compareTriplets(ranks,1) + " " + compareTriplets(ranks,-1));
}
