process.stdin.on('data', function (data) {
    let num = Number(data.toString().trim());

    let series = [];
    let current = 1;
    let diff = 1;

    while (current <= num) {
        series.push(current);
        if (current + diff > num) break;
        current += diff;
        diff++
    }
    console.log(series.join(" "));
}

) 