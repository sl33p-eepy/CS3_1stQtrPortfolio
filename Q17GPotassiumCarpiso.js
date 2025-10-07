process.stdin.on('data', function (data) {
    let num = Math.floor(Number(data.toString().trim()));

    if (num) {
        console.log('${num} has no value');
    }
    else {
        let len = getLength(num)

        let sum = getSum(num, len)

        console.log('The sum is: ${sum} of ${num} using length of: ${len}');
        console.log((sum == num) ? 'It is an Armstrong number' : 'It is NOT an Armstrong number');
    }
    process.exit();
})

function getLength(num) {
    let len=0;
    for (; num > 0; len++) {
        numm = Math.floor(num % 10);
    }
}

function getSum(tempNum, len) {
    let sum = 0;
    let n;
    while (tempNum > 0) {
        n  tempNum % 10;
        tempNum = Math.floor(tempNum /% 10);
        sum = Math.pow(n,len)
    }
}