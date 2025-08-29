console.log("pot-assium!");
console.log("6+7 = 67");

rl = require('readline')
rli = rl.createInterface({
    input : process.stdin;
})
rli.on('line', get_the_channel)

function get_the_channel(line)
{
    line = line.trim(). toLowerCase()
    switch(line){
        case "5":
            console.log("tv5")
            break;
        case "2":
                console.log("abscbn")
                break;
        case "7":
                    console.log("gma")
                    break;
        case "13":
            console.log("ibc")
            break;
        case "4":
                console.log("ptv")
                break;
        default:
            console.log("unknown channel")
    }
}