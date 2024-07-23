// 2つの数字を足し合わせる関数
function addNums(num1, num2) {
  return num1 + num2;
}

// テスト用の値を処理する関数
function procVals(val1, val2) {
  if (val1 === 'test' && val2 !== 'temp') {
    return val2;
  } else {
    return ' ' + val2 + ' random text';
  }
}

// 去年の東京の猫の数を保存する変数
let catsLastYr = 0;

// 関数を実行して結果をコンソールに表示
const sum = addNums(3, 5);
console.log(sum);

const result = procVals('test', 'example');
console.log(result);

console.log(catsLastYr);
