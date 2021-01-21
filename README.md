# True False Test Scorer
Marks T or F questions

## Installation
Make sure you have `node` installed on your computer

1. Clone this repo
```bash
$ git clone https://github.com/besemuna/true-false-test-scorer/
```

2. Navigate to `directory`
```bash
$ cd true-false-test-scorer
```


3. Install `dependencies`
```bash
$ npm i
```

3. Run app :sparkles:
```bash
$ node index.js
```

## Input

There are 2 inputs to this program
* The correct answers - consists of `T` or `F` characters

`sample` : T F T F T F T F T F T F T F T F T F T F T F T F T F T F T F

* The answers of students - every student's answer starts with their integer student number followed by their answers
T - for true, F - false and x - for unanswered. This is ended by `999`

`sample`:   100 T F T T F F T F T F T F T F T T T E F F x F T x T F T F x F
            101 T T T T T T T F T F x x x x x x T F T F T F T F T F F F F T
            110 T F T F T F T F T F T F T F T F T F T F T F T F T F T F T F 999

