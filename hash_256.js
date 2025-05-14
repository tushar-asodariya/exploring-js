const crypto = require('crypto');

const input = "100xdevs";
const hash = crypto.createHash('sha256').update(input).digest('hex');

console.log(hash)


let i=0;
let prefix = 'Harkirat => Tushar | Rs 100, Tushar => Ankit | Rs 10 '
let text = ''
while(!text.startsWith("00000")){

    text = crypto.createHash('sha256').update(prefix + i.toString()).digest('hex').toString();

    i++;
}
console.log(text)
console.log(i)
