'use strict'

const fs = require('fs')

process.stdin.resume()
process.stdin.setEncoding('utf-8')

let inputString = ''
let currentLine = 0

process.stdin.on('data', inputStdin => {
  inputString += inputStdin
})

process.stdin.on('end', _ => {
  inputString = inputString
    .replace(/\s*$/, '')
    .split('\n')
    .map(str => str.replace(/\s*$/, ''))

  main()
})

function readLine() {
  return inputString[currentLine++]
}

// Complete the isBalanced function below.
function isBalanced(s) {
  const YES = 'YES', NO = 'NO'

  let stack = [], chars = s.split('')
  for (let i = 0; i < chars.length; i++) {
    let char = chars[i]
    switch(char) {
      case '(':
      case '{':
      case '[':
        stack.push(char)
        break;
      case ')':
        if (stack.pop() !== '(') return NO
        break;
      case '}':
        if (stack.pop() !== '{') return NO
        break;
      case ']':
        if (stack.pop() !== '[') return NO
        break;
      default:
        // By default, ignore character.
        // Alternatively, could throw err.
        break;
    }
  }
  return stack.length === 0 ? YES : NO
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH)

  const t = parseInt(readLine(), 10)

  for (let tItr = 0; tItr < t; tItr++) {
    const s = readLine()

    let result = isBalanced(s)

    ws.write(result + '\n')
  }

  ws.end()
}
