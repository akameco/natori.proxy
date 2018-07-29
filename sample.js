const 名取 = require('.')

const sum = (a, b) => a + b
const 名取sum = 名取(sum, 'ってね')
// 各関数実行時に名取が再生される

console.log(名取sum(1, 2))
// => 3
// 「ってね」

console.log(名取sum(1, 2) + 名取sum(1, 2))
// => 6
// 「ってねを禁止されてね.禁止されってね...うははっ」, 「ってね」
