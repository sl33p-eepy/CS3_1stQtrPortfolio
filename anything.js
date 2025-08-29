console.log("pot-assium!");
console.log("6+7 = 67");

rl = require('readline')
rli = rl.createInterface({
    input : process.stdin
})
rli.on('line', get_inputs)
function get_inputs(line){
    if(line !=="END"){
    inputs.push(line)
}
else{
    rli.close()
}
var inputs = []

rli.on('close', get_the_channel)

function get_the_channel(inputs)
{   
    for(let i=0; i<inputs. length; i++)
    switch(inputs[i]){
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