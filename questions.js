// Array of questions grouped by category (25 questions each)
const questions = [
    {
      category: "Javascript",
      questions: [
        {
            "question": "What is JavaScript primarily used for?",
            "options": ["Styling web pages", "Adding interactivity to web pages", "Managing databases", "Creating server-side applications"],
            "correctAnswer": 1
          },
          {
            "question": "Which keyword is used to declare a variable in JavaScript?",
            "options": ["int", "var", "declare", "define"],
            "correctAnswer": 1
          },
          {
            "question": "Which of the following is a JavaScript framework?",
            "options": ["Laravel", "Django", "React", "Rails"],
            "correctAnswer": 2
          },
          {
            "question": "Which method is used to write text in the browser console?",
            "options": ["console.write()", "console.log()", "print()", "log.write()"],
            "correctAnswer": 1
          },
          {
            "question": "Which symbol is used for single-line comments in JavaScript?",
            "options": ["//", "/*", "<!--", "**"],
            "correctAnswer": 0
          },
          {
            "question": "What does 'NaN' stand for in JavaScript?",
            "options": ["Not a Null", "No assigned Number", "Not a Number", "New Array Number"],
            "correctAnswer": 2
          },
          {
            "question": "Which built-in method removes the last element from an array?",
            "options": ["pop()", "push()", "shift()", "slice()"],
            "correctAnswer": 0
          },
          {
            "question": "Which of the following is not a JavaScript data type?",
            "options": ["Number", "String", "Boolean", "Character"],
            "correctAnswer": 3
          },
          {
            "question": "How do you declare a function in JavaScript?",
            "options": ["def myFunction()", "function myFunction()", "func myFunction()", "define myFunction()"],
            "correctAnswer": 1
          },
          {
            "question": "Which of the following is used to loop through an array?",
            "options": ["for", "foreach", "map", "All of the above"],
            "correctAnswer": 3
          },
          {
            "question": "What is the default value of an uninitialized variable in JavaScript?",
            "options": ["null", "0", "undefined", "NaN"],
            "correctAnswer": 2
          },
          {
            "question": "Which method is used to join two or more arrays?",
            "options": ["concat()", "merge()", "combine()", "append()"],
            "correctAnswer": 0
          },
          {
            "question": "Which event occurs when a user clicks on an HTML element?",
            "options": ["onmouseover", "onchange", "onclick", "onhover"],
            "correctAnswer": 2
          },
          {
            "question": "What is the purpose of 'use strict' in JavaScript?",
            "options": ["Enforce stricter parsing and error handling", "Enable new ES6 features", "Prevent variable hoisting", "None of the above"],
            "correctAnswer": 0
          },
          {
            "question": "Which JavaScript method is used to find the length of an array?",
            "options": ["size()", "length()", "count()", "index()"],
            "correctAnswer": 1
          },
          {
            "question": "What does JSON stand for?",
            "options": ["JavaScript Object Notation", "Java Serialized Object Notation", "JavaScript Organized Notation", "Java Syntax Object Naming"],
            "correctAnswer": 0
          },
          {
            "question": "Which method is used to convert a JSON string into a JavaScript object?",
            "options": ["JSON.parse()", "JSON.stringify()", "JSON.objectify()", "JSON.convert()"],
            "correctAnswer": 0
          },
          {
            "question": "How do you declare an asynchronous function in JavaScript?",
            "options": ["async function()", "function async()", "await function()", "define async()"],
            "correctAnswer": 0
          },
          {
            "question": "What will 'typeof null' return in JavaScript?",
            "options": ["null", "undefined", "object", "string"],
            "correctAnswer": 2
          },
          {
            "question": "Which of the following loops is guaranteed to execute at least once?",
            "options": ["for loop", "while loop", "do...while loop", "None of the above"],
            "correctAnswer": 2
          },
          {
            "question": "Which operator is used for strict equality comparison in JavaScript?",
            "options": ["==", "===", "!=", "!=="],
            "correctAnswer": 1
          },
          {
            "question": "Which function is used to parse a string to an integer in JavaScript?",
            "options": ["parseInt()", "toInteger()", "int()", "Number.parseInt()"],
            "correctAnswer": 0
          },
          {
            "question": "What does the 'this' keyword refer to in JavaScript?",
            "options": ["The current function", "The global object", "The object that owns the function", "None of the above"],
            "correctAnswer": 2
          },
          {
            "question": "Which of these is not a valid JavaScript variable name?",
            "options": ["_var", "$var", "1var", "varName"],
            "correctAnswer": 2
          },
          {
            "question": "Which method is used to add an element to the beginning of an array?",
            "options": ["push()", "unshift()", "shift()", "concat()"],
            "correctAnswer": 1
          },
          {
            "question": "What will be the result of '5' + 3 in JavaScript?",
            "options": ["8", "53", "Error", "NaN"],
            "correctAnswer": 1
          },
          {
            "question": "Which of the following is used to declare a constant variable in JavaScript?",
            "options": ["var", "let", "const", "final"],
            "correctAnswer": 2
          },
          {
            "question": "Which keyword is used to handle exceptions in JavaScript?",
            "options": ["catch", "try", "throw", "All of the above"],
            "correctAnswer": 3
          },
          {
            "question": "Which JavaScript loop is best for iterating over an object's properties?",
            "options": ["for", "forEach", "for...in", "for...of"],
            "correctAnswer": 2
          },
          {
            "question": "What is the output of `console.log(typeof [])`?",
            "options": ["array", "object", "undefined", "null"],
            "correctAnswer": 1
          },
          {
            "question": "Which method is used to remove the first element from an array?",
            "options": ["pop()", "shift()", "slice()", "splice()"],
            "correctAnswer": 1
          },
          {
            "question": "What is the purpose of the `map()` method in JavaScript?",
            "options": ["To filter elements in an array", "To transform elements in an array", "To sort elements in an array", "To reverse elements in an array"],
            "correctAnswer": 1
          },
          {
            "question": "What does the `Promise` object represent in JavaScript?",
            "options": ["A completed operation", "A future value or error", "A synchronous function", "A callback function"],
            "correctAnswer": 1
          },
          {
            "question": "Which of the following is true about arrow functions in JavaScript?",
            "options": ["They have their own `this` context", "They cannot be used as constructors", "They are hoisted", "They require the `function` keyword"],
            "correctAnswer": 1
          },
          {
            "question": "What is the output of `console.log(0 == '0')`?",
            "options": ["true", "false", "Error", "undefined"],
            "correctAnswer": 0
          },
          {
            "question": "Which method is used to convert an object to a JSON string?",
            "options": ["JSON.parse()", "JSON.stringify()", "JSON.toObject()", "JSON.convert()"],
            "correctAnswer": 1
          },
          {
            "question": "What is the purpose of the `filter()` method in JavaScript?",
            "options": ["To transform elements in an array", "To create a new array with elements that pass a test", "To sort elements in an array", "To reverse elements in an array"],
            "correctAnswer": 1
          },
          {
            "question": "What is the output of `console.log(1 + '1')`?",
            "options": ["2", "11", "Error", "NaN"],
            "correctAnswer": 1
          },
          {
            "question": "Which of the following is used to define a block-scoped variable in JavaScript?",
            "options": ["var", "let", "const", "Both let and const"],
            "correctAnswer": 3
          },
          {
            "question": "What is the output of `console.log([] + [])`?",
            "options": ["[]", "[object Object]", "''", "Error"],
            "correctAnswer": 2
          },
          {
            "question": "Which method is used to find an element in an array based on a condition?",
            "options": ["find()", "filter()", "map()", "reduce()"],
            "correctAnswer": 0
          },
          {
            "question": "What is the output of `console.log(typeof NaN)`?",
            "options": ["number", "NaN", "undefined", "object"],
            "correctAnswer": 0
          },
          {
            "question": "Which of the following is used to create a shallow copy of an object?",
            "options": ["Object.assign()", "Object.clone()", "Object.copy()", "Object.create()"],
            "correctAnswer": 0
          },
          {
            "question": "What is the output of `console.log(!!'false')`?",
            "options": ["true", "false", "Error", "undefined"],
            "correctAnswer": 0
          },
          {
            "question": "Who created Javascript`?",
            "options": ["Jolade Okunlade", "Mocha Livescript", "Brendan Eich", "Guido van Rossum"],
            "correctAnswer": 2
          },
          {
            "question": "What year was Javascript launched`?",
            "options": ["1985", "1995", "1998", "1975"],
            "correctAnswer": 1
          }
      ],
    },
    {
      category: "Python",
      questions: [
        {
            "question": "Who created Python?",
            "options": ["Guido van Rossum", "Brendan Eich", "James Gosling", "Linus Torvalds"],
            "correctAnswer": 0
          },
          {
            "question": "In which year was Python first released?",
            "options": ["1989", "1991", "1995", "2000"],
            "correctAnswer": 1
          },
          {
            "question": "What is the extension of a Python file?",
            "options": [".py", ".python", ".pyt", ".pt"],
            "correctAnswer": 0
          },
          {
            "question": "Which of the following is used to define a block of code in Python?",
            "options": ["Curly braces {}", "Indentation", "Square brackets []", "Parentheses ()"],
            "correctAnswer": 1
          },
          {
            "question": "What is the output of `print(type([]))`?",
            "options": ["<class 'list'>", "<class 'array'>", "<class 'tuple'>", "<class 'dict'>"],
            "correctAnswer": 0
          },
          {
            "question": "Which keyword is used to define a function in Python?",
            "options": ["def", "function", "func", "define"],
            "correctAnswer": 0
          },
          {
            "question": "What is the output of `print(2 ** 3)`?",
            "options": ["6", "8", "9", "Error"],
            "correctAnswer": 1
          },
          {
            "question": "Which of the following is NOT a Python data type?",
            "options": ["int", "str", "float", "char"],
            "correctAnswer": 3
          },
          {
            "question": "What is the output of `print('Hello, World!')`?",
            "options": ["Hello, World!", "Hello World", "Error", "None"],
            "correctAnswer": 0
          },
          {
            "question": "Which of the following is used to comment out a single line in Python?",
            "options": ["//", "#", "/* */", "--"],
            "correctAnswer": 1
          },
          {
            "question": "What is the output of `print(10 / 3)`?",
            "options": ["3", "3.333", "3.0", "Error"],
            "correctAnswer": 1
          },
          {
            "question": "Which method is used to add an element to the end of a list?",
            "options": ["append()", "add()", "insert()", "push()"],
            "correctAnswer": 0
          },
          {
            "question": "What is the output of `print('Python'.upper())`?",
            "options": ["PYTHON", "python", "Python", "Error"],
            "correctAnswer": 0
          },
          {
            "question": "Which of the following is used to remove an element from a list by value?",
            "options": ["remove()", "delete()", "pop()", "discard()"],
            "correctAnswer": 0
          },
          {
            "question": "What is the output of `print(len('Python'))`?",
            "options": ["5", "6", "7", "Error"],
            "correctAnswer": 1
          },
          {
            "question": "Which of the following is used to create a virtual environment in Python?",
            "options": ["venv", "virtualenv", "pipenv", "All of the above"],
            "correctAnswer": 3
          },
          {
            "question": "What is the output of `print(3 == '3')`?",
            "options": ["True", "False", "Error", "None"],
            "correctAnswer": 1
          },
          {
            "question": "Which of the following is used to open a file in Python?",
            "options": ["open()", "read()", "file()", "load()"],
            "correctAnswer": 0
          },
          {
            "question": "What is the output of `print('Python'[1:4])`?",
            "options": ["yth", "Pyt", "thon", "Error"],
            "correctAnswer": 0
          },
          {
            "question": "Which of the following is used to handle exceptions in Python?",
            "options": ["try-except", "try-catch", "try-finally", "try-else"],
            "correctAnswer": 0
          },
          {
            "question": "What is the output of `print(10 % 3)`?",
            "options": ["1", "3", "0", "Error"],
            "correctAnswer": 0
          },
          {
            "question": "Which of the following is used to iterate over a sequence of numbers?",
            "options": ["for loop", "while loop", "do-while loop", "None of the above"],
            "correctAnswer": 0
          },
          {
            "question": "What is the output of `print(bool(''))`?",
            "options": ["True", "False", "Error", "None"],
            "correctAnswer": 1
          },
          {
            "question": "Which of the following is used to create a dictionary in Python?",
            "options": ["{}", "[]", "()", "set()"],
            "correctAnswer": 0
          },
          {
            "question": "What is the output of `print(2 + 3 * 4)`?",
            "options": ["20", "14", "24", "Error"],
            "correctAnswer": 1
          },
          {
            "question": "Which of the following is used to install Python packages?",
            "options": ["pip", "npm", "conda", "All of the above"],
            "correctAnswer": 0
          },
          {
            "question": "What is the output of `print('Python'.find('th'))`?",
            "options": ["2", "3", "4", "-1"],
            "correctAnswer": 1
          },
          {
            "question": "Which of the following is used to create a set in Python?",
            "options": ["{}", "[]", "()", "set()"],
            "correctAnswer": 3
          },
          {
            "question": "What is the output of `print(10 // 3)`?",
            "options": ["3", "3.333", "3.0", "Error"],
            "correctAnswer": 0
          },
          {
            "question": "Which of the following is used to reverse a list in Python?",
            "options": ["reverse()", "reversed()", "sort()", "None of the above"],
            "correctAnswer": 0
          },
          {
            "question": "What is the output of `print('Python'.replace('P', 'J'))`?",
            "options": ["Jython", "Python", "Jython", "Error"],
            "correctAnswer": 0
          },
          {
            "question": "Which of the following is used to create a tuple in Python?",
            "options": ["{}", "[]", "()", "tuple()"],
            "correctAnswer": 2
          },
          {
            "question": "What is the output of `print(10 > 5 and 5 < 3)`?",
            "options": ["True", "False", "Error", "None"],
            "correctAnswer": 1
          },
          {
            "question": "Which of the following is used to sort a list in Python?",
            "options": ["sort()", "sorted()", "Both sort() and sorted()", "None of the above"],
            "correctAnswer": 2
          },
          {
            "question": "What is the output of `print('Python'[::-1])`?",
            "options": ["nohtyP", "Python", "Error", "None"],
            "correctAnswer": 0
          },
          {
            "question": "Which of the following is used to create a generator in Python?",
            "options": ["yield", "return", "break", "continue"],
            "correctAnswer": 0
          },
          {
            "question": "What is the output of `print(10 == 10.0)`?",
            "options": ["True", "False", "Error", "None"],
            "correctAnswer": 0
          },
          {
            "question": "Which of the following is used to create a lambda function in Python?",
            "options": ["lambda", "def", "function", "None of the above"],
            "correctAnswer": 0
          },
          {
            "question": "What is the output of `print('Python'.isalpha())`?",
            "options": ["True", "False", "Error", "None"],
            "correctAnswer": 0
          },
          {
            "question": "Which of the following is used to create a class in Python?",
            "options": ["class", "def", "struct", "None of the above"],
            "correctAnswer": 0
          },
          {
            "question": "What is the output of `print(10 != '10')`?",
            "options": ["True", "False", "Error", "None"],
            "correctAnswer": 0
          },
          {
            "question": "Which of the following is used to create a module in Python?",
            "options": ["import", "module", "package", "None of the above"],
            "correctAnswer": 0
          },
          {
            "question": "What is the output of `print('Python'.islower())`?",
            "options": ["True", "False", "Error", "None"],
            "correctAnswer": 1
          },
          {
            "question": "Which of the following is used to create a list comprehension in Python?",
            "options": ["[x for x in iterable]", "{x for x in iterable}", "(x for x in iterable)", "None of the above"],
            "correctAnswer": 0
          },
          {
            "question": "What is the output of `print(10 > 5 or 5 < 3)`?",
            "options": ["True", "False", "Error", "None"],
            "correctAnswer": 0
          },
          {
            "question": "Which of the following is used to create a decorator in Python?",
            "options": ["@", "#", "$", "None of the above"],
            "correctAnswer": 0
          },
          {
            "question": "What is the output of `print('Python'.isnumeric())`?",
            "options": ["True", "False", "Error", "None"],
            "correctAnswer": 1
          },
          {
            "question": "Which of the following is used to create a context manager in Python?",
            "options": ["with", "as", "Both with and as", "None of the above"],
            "correctAnswer": 2
          },
          {
            "question": "What is the output of `print(10 in [1, 2, 3, 4, 5])`?",
            "options": ["True", "False", "Error", "None"],
            "correctAnswer": 1
          }
      ],
    },
    {
      category: "Golang",
      questions: [
        {
            "question": "Who created Go (Golang)?",
            "options": ["Guido van Rossum", "Robert Griesemer", "Brendan Eich", "James Gosling"],
            "correctAnswer": 1
          },
          {
            "question": "In which year was Go (Golang) first released?",
            "options": ["2007", "2009", "2012", "2015"],
            "correctAnswer": 1
          },
          {
            "question": "What is the extension of a Go source file?",
            "options": [".go", ".golang", ".g", ".src"],
            "correctAnswer": 0
          },
          {
            "question": "Which keyword is used to define a variable in Go?",
            "options": ["var", "let", "const", "def"],
            "correctAnswer": 0
          },
          {
            "question": "What is the output of `fmt.Println(5 + '5')`?",
            "options": ["55", "10", "58", "Error"],
            "correctAnswer": 2
          },
          {
            "question": "Which of the following is NOT a basic data type in Go?",
            "options": ["int", "string", "float", "char"],
            "correctAnswer": 3
          },
          {
            "question": "What is the default value of an uninitialized integer variable in Go?",
            "options": ["0", "nil", "undefined", "Error"],
            "correctAnswer": 0
          },
          {
            "question": "Which keyword is used to define a function in Go?",
            "options": ["func", "function", "def", "fn"],
            "correctAnswer": 0
          },
          {
            "question": "What is the output of `fmt.Println(10 / 3)`?",
            "options": ["3", "3.333", "3.0", "Error"],
            "correctAnswer": 0
          },
          {
            "question": "Which of the following is used to define a constant in Go?",
            "options": ["const", "let", "var", "define"],
            "correctAnswer": 0
          },
          {
            "question": "What is the output of `fmt.Println('Hello, World!')`?",
            "options": ["Hello, World!", "Hello World", "Error", "None"],
            "correctAnswer": 0
          },
          {
            "question": "Which of the following is used to comment out a single line in Go?",
            "options": ["//", "#", "/* */", "--"],
            "correctAnswer": 0
          },
          {
            "question": "What is the output of `fmt.Println(10 % 3)`?",
            "options": ["1", "3", "0", "Error"],
            "correctAnswer": 0
          },
          {
            "question": "Which of the following is used to create a slice in Go?",
            "options": ["make()", "new()", "slice()", "create()"],
            "correctAnswer": 0
          },
          {
            "question": "What is the output of `fmt.Println(len('Hello'))`?",
            "options": ["5", "6", "Error", "None"],
            "correctAnswer": 0
          },
          {
            "question": "Which of the following is used to handle errors in Go?",
            "options": ["try-catch", "error", "panic-recover", "None of the above"],
            "correctAnswer": 2
          },
          {
            "question": "What is the output of `fmt.Println(10 > 5 && 5 < 3)`?",
            "options": ["true", "false", "Error", "None"],
            "correctAnswer": 1
          },
          {
            "question": "Which of the following is used to define a struct in Go?",
            "options": ["struct", "class", "interface", "None of the above"],
            "correctAnswer": 0
          },
          {
            "question": "What is the output of `fmt.Println('Go'[1])`?",
            "options": ["G", "o", "Error", "None"],
            "correctAnswer": 1
          },
          {
            "question": "Which of the following is used to create a map in Go?",
            "options": ["make()", "new()", "map()", "create()"],
            "correctAnswer": 0
          },
          {
            "question": "What is the output of `fmt.Println(10 == 10.0)`?",
            "options": ["true", "false", "Error", "None"],
            "correctAnswer": 0
          },
          {
            "question": "Which of the following is used to define an interface in Go?",
            "options": ["interface", "struct", "class", "None of the above"],
            "correctAnswer": 0
          },
          {
            "question": "What is the output of `fmt.Println(10 != '10')`?",
            "options": ["true", "false", "Error", "None"],
            "correctAnswer": 0
          },
          {
            "question": "Which of the following is used to define a method in Go?",
            "options": ["func", "method", "def", "None of the above"],
            "correctAnswer": 0
          },
          {
            "question": "What is the output of `fmt.Println('Go'.len())`?",
            "options": ["2", "3", "Error", "None"],
            "correctAnswer": 2
          },
          {
            "question": "Which of the following is used to define a package in Go?",
            "options": ["package", "import", "module", "None of the above"],
            "correctAnswer": 0
          },
          {
            "question": "What is the output of `fmt.Println(10 > 5 || 5 < 3)`?",
            "options": ["true", "false", "Error", "None"],
            "correctAnswer": 0
          },
          {
            "question": "Which of the following is used to create a goroutine in Go?",
            "options": ["go", "goroutine", "thread", "None of the above"],
            "correctAnswer": 0
          },
          {
            "question": "What is the output of `fmt.Println('Go'.toUpper())`?",
            "options": ["GO", "go", "Go", "Error"],
            "correctAnswer": 3
          },
          {
            "question": "Which of the following is used to create a channel in Go?",
            "options": ["make()", "new()", "chan()", "create()"],
            "correctAnswer": 0
          },
          {
            "question": "What is the output of `fmt.Println(10 + 5 * 2)`?",
            "options": ["30", "20", "15", "Error"],
            "correctAnswer": 1
          },
          {
            "question": "Which of the following is used to define a type in Go?",
            "options": ["type", "struct", "interface", "None of the above"],
            "correctAnswer": 0
          },
          {
            "question": "What is the output of `fmt.Println('Go'.index('o'))`?",
            "options": ["0", "1", "2", "-1"],
            "correctAnswer": 1
          },
          {
            "question": "Which of the following is used to define an enumeration in Go?",
            "options": ["enum", "const", "type", "None of the above"],
            "correctAnswer": 2
          },
          {
            "question": "What is the output of `fmt.Println(10 / 0)`?",
            "options": ["0", "Infinity", "Error", "None"],
            "correctAnswer": 2
          },
          {
            "question": "Which of the following is used to synchronize goroutines in Go?",
            "options": ["sync", "mutex", "channel", "All of the above"],
            "correctAnswer": 3
          },
          {
            "question": "What is the output of `fmt.Println('Go'.replace('G', 'H'))`?",
            "options": ["Ho", "Go", "Ho", "Error"],
            "correctAnswer": 3
          },
          {
            "question": "Which of the following is used to create a pointer in Go?",
            "options": ["&", "*", "ptr", "None of the above"],
            "correctAnswer": 1
          },
          {
            "question": "What is the output of `fmt.Println(10 == 10.0f)`?",
            "options": ["true", "false", "Error", "None"],
            "correctAnswer": 0
          },
          {
            "question": "Which of the following is used to define a defer statement in Go?",
            "options": ["defer", "finally", "catch", "None of the above"],
            "correctAnswer": 0
          },
          {
            "question": "What is the output of `fmt.Println('Go'.contains('o'))`?",
            "options": ["true", "false", "Error", "None"],
            "correctAnswer": 3
          },
          {
            "question": "Which of the following is used to define a range loop in Go?",
            "options": ["for", "range", "foreach", "None of the above"],
            "correctAnswer": 1
          },
          {
            "question": "What is the output of `fmt.Println(10 + '5')`?",
            "options": ["15", "105", "Error", "None"],
            "correctAnswer": 1
          },
          {
            "question": "Which of the following is used to define a module in Go?",
            "options": ["module", "package", "import", "None of the above"],
            "correctAnswer": 0
          },
          {
            "question": "What is the output of `fmt.Println('Go'.substring(1, 2))`?",
            "options": ["o", "G", "Go", "Error"],
            "correctAnswer": 0
          },
          {
            "question": "Which of the following is used to define a switch statement in Go?",
            "options": ["switch", "case", "select", "None of the above"],
            "correctAnswer": 0
          },
          {
            "question": "What is the output of `fmt.Println(10 > 5 ? 'Yes' : 'No')`?",
            "options": ["Yes", "No", "Error", "None"],
            "correctAnswer": 2
          }
      ],
    },
    {
      category: "rust",
      questions: [
        {
            "question": "Who created Rust?",
            "options": ["Guido van Rossum", "Graydon Hoare", "Brendan Eich", "James Gosling"],
            "correctAnswer": 1
          },
          {
            "question": "In which year was Rust first released?",
            "options": ["2010", "2012", "2015", "2018"],
            "correctAnswer": 2
          },
          {
            "question": "What is the extension of a Rust source file?",
            "options": [".rs", ".rust", ".rt", ".src"],
            "correctAnswer": 0
          },
          {
            "question": "Which keyword is used to define a variable in Rust?",
            "options": ["let", "var", "const", "def"],
            "correctAnswer": 0
          },
          {
            "question": "What is the output of `println!('{}', 5 + '5');`?",
            "options": ["55", "10", "58", "Error"],
            "correctAnswer": 3
          },
          {
            "question": "Which of the following is NOT a basic data type in Rust?",
            "options": ["i32", "String", "f64", "char"],
            "correctAnswer": 1
          },
          {
            "question": "What is the default value of an uninitialized integer variable in Rust?",
            "options": ["0", "None", "undefined", "Error"],
            "correctAnswer": 3
          },
          {
            "question": "Which keyword is used to define a function in Rust?",
            "options": ["fn", "function", "def", "func"],
            "correctAnswer": 0
          },
          {
            "question": "What is the output of `println!('{}', 10 / 3);`?",
            "options": ["3", "3.333", "3.0", "Error"],
            "correctAnswer": 0
          },
          {
            "question": "Which of the following is used to define a constant in Rust?",
            "options": ["const", "let", "static", "define"],
            "correctAnswer": 0
          },
          {
            "question": "What is the output of `println!('Hello, World!');`?",
            "options": ["Hello, World!", "Hello World", "Error", "None"],
            "correctAnswer": 0
          },
          {
            "question": "Which of the following is used to comment out a single line in Rust?",
            "options": ["//", "#", "/* */", "--"],
            "correctAnswer": 0
          },
          {
            "question": "What is the output of `println!('{}', 10 % 3);`?",
            "options": ["1", "3", "0", "Error"],
            "correctAnswer": 0
          },
          {
            "question": "Which of the following is used to create a vector in Rust?",
            "options": ["Vec::new()", "vec![]", "Vector::new()", "new Vec()"],
            "correctAnswer": 1
          },
          {
            "question": "What is the output of `println!('{}', 'Hello'.len());`?",
            "options": ["5", "6", "Error", "None"],
            "correctAnswer": 0
          },
          {
            "question": "Which of the following is used to handle errors in Rust?",
            "options": ["try-catch", "Result", "panic-recover", "None of the above"],
            "correctAnswer": 1
          },
          {
            "question": "What is the output of `println!('{}', 10 > 5 && 5 < 3);`?",
            "options": ["true", "false", "Error", "None"],
            "correctAnswer": 1
          },
          {
            "question": "Which of the following is used to define a struct in Rust?",
            "options": ["struct", "class", "interface", "None of the above"],
            "correctAnswer": 0
          },
          {
            "question": "What is the output of `println!('{}', 'Rust'[1]);`?",
            "options": ["R", "u", "Error", "None"],
            "correctAnswer": 2
          },
          {
            "question": "Which of the following is used to create a hash map in Rust?",
            "options": ["HashMap::new()", "hash_map![]", "Map::new()", "new HashMap()"],
            "correctAnswer": 0
          },
          {
            "question": "What is the output of `println!('{}', 10 == 10.0);`?",
            "options": ["true", "false", "Error", "None"],
            "correctAnswer": 1
          },
          {
            "question": "Which of the following is used to define an enum in Rust?",
            "options": ["enum", "struct", "class", "None of the above"],
            "correctAnswer": 0
          },
          {
            "question": "What is the output of `println!('{}', 10 != '10');`?",
            "options": ["true", "false", "Error", "None"],
            "correctAnswer": 0
          },
          {
            "question": "Which of the following is used to define a method in Rust?",
            "options": ["impl", "fn", "method", "None of the above"],
            "correctAnswer": 0
          },
          {
            "question": "What is the output of `println!('{}', 'Rust'.len());`?",
            "options": ["4", "5", "Error", "None"],
            "correctAnswer": 0
          },
          {
            "question": "Which of the following is used to define a module in Rust?",
            "options": ["mod", "module", "package", "None of the above"],
            "correctAnswer": 0
          },
          {
            "question": "What is the output of `println!('{}', 10 > 5 || 5 < 3);`?",
            "options": ["true", "false", "Error", "None"],
            "correctAnswer": 0
          },
          {
            "question": "Which of the following is used to create a thread in Rust?",
            "options": ["thread::spawn()", "Thread::new()", "spawn()", "None of the above"],
            "correctAnswer": 0
          },
          {
            "question": "What is the output of `println!('{}', 'Rust'.to_uppercase());`?",
            "options": ["RUST", "rust", "Rust", "Error"],
            "correctAnswer": 0
          },
          {
            "question": "Which of the following is used to create a channel in Rust?",
            "options": ["mpsc::channel()", "channel::new()", "Channel::new()", "None of the above"],
            "correctAnswer": 0
          },
          {
            "question": "What is the output of `println!('{}', 10 + 5 * 2);`?",
            "options": ["30", "20", "15", "Error"],
            "correctAnswer": 1
          },
          {
            "question": "Which of the following is used to define a trait in Rust?",
            "options": ["trait", "interface", "class", "None of the above"],
            "correctAnswer": 0
          },
          {
            "question": "What is the output of `println!('{}', 'Rust'.find('u'));`?",
            "options": ["0", "1", "2", "None"],
            "correctAnswer": 1
          },
          {
            "question": "Which of the following is used to define a closure in Rust?",
            "options": ["|x| x + 1", "fn(x) x + 1", "lambda x: x + 1", "None of the above"],
            "correctAnswer": 0
          },
          {
            "question": "What is the output of `println!('{}', 10 / 0);`?",
            "options": ["0", "Infinity", "Error", "None"],
            "correctAnswer": 2
          },
          {
            "question": "Which of the following is used to synchronize threads in Rust?",
            "options": ["Mutex", "Arc", "RwLock", "All of the above"],
            "correctAnswer": 3
          },
          {
            "question": "What is the output of `println!('{}', 'Rust'.replace('R', 'T'));`?",
            "options": ["Tust", "Rust", "Tust", "Error"],
            "correctAnswer": 0
          },
          {
            "question": "Which of the following is used to create a pointer in Rust?",
            "options": ["&", "*", "Box", "All of the above"],
            "correctAnswer": 3
          },
          {
            "question": "What is the output of `println!('{}', 10 == 10.0 as i32);`?",
            "options": ["true", "false", "Error", "None"],
            "correctAnswer": 0
          },
          {
            "question": "Which of the following is used to define a lifetime in Rust?",
            "options": ["'a", "lifetime", "scope", "None of the above"],
            "correctAnswer": 0
          },
          {
            "question": "What is the output of `println!('{}', 'Rust'.contains('u'));`?",
            "options": ["true", "false", "Error", "None"],
            "correctAnswer": 0
          },
          {
            "question": "Which of the following is used to define a match statement in Rust?",
            "options": ["match", "switch", "case", "None of the above"],
            "correctAnswer": 0
          },
          {
            "question": "What is the output of `println!('{}', 10 + '5' as i32);`?",
            "options": ["15", "105", "Error", "None"],
            "correctAnswer": 0
          },
          {
            "question": "Which of the following is used to define a macro in Rust?",
            "options": ["macro_rules!", "macro", "define", "None of the above"],
            "correctAnswer": 0
          },
          {
            "question": "What is the output of `println!('{}', 'Rust'.chars().nth(1));`?",
            "options": ["u", "R", "Error", "None"],
            "correctAnswer": 0
          },
          {
            "question": "Which of the following is used to define a panic handler in Rust?",
            "options": ["panic!", "catch_panic", "recover", "None of the above"],
            "correctAnswer": 0
          },
          {
            "question": "What is the output of `println!('{}', 10 > 5 ? 'Yes' : 'No');`?",
            "options": ["Yes", "No", "Error", "None"],
            "correctAnswer": 2
          }
      ],
    },
    {
        category: "Java",
        questions: [
            {
                "question": "Who created Java?",
                "options": ["Guido van Rossum", "James Gosling", "Brendan Eich", "Linus Torvalds"],
                "correctAnswer": 1
              },
              {
                "question": "In which year was Java first released?",
                "options": ["1991", "1995", "2000", "2005"],
                "correctAnswer": 1
              },
              {
                "question": "What is the extension of a Java source file?",
                "options": [".java", ".class", ".jar", ".jvm"],
                "correctAnswer": 0
              },
              {
                "question": "Which keyword is used to define a class in Java?",
                "options": ["class", "struct", "interface", "object"],
                "correctAnswer": 0
              },
              {
                "question": "What is the output of `System.out.println(5 + '5')`?",
                "options": ["55", "10", "Error", "58"],
                "correctAnswer": 3
              },
              {
                "question": "Which of the following is NOT a primitive data type in Java?",
                "options": ["int", "float", "String", "boolean"],
                "correctAnswer": 2
              },
              {
                "question": "What is the default value of an uninitialized integer variable in Java?",
                "options": ["0", "null", "undefined", "Error"],
                "correctAnswer": 0
              },
              {
                "question": "Which keyword is used to create an object in Java?",
                "options": ["new", "create", "object", "instance"],
                "correctAnswer": 0
              },
              {
                "question": "What is the output of `System.out.println(10 / 3)`?",
                "options": ["3", "3.333", "3.0", "Error"],
                "correctAnswer": 0
              },
              {
                "question": "Which of the following is used to define a constant in Java?",
                "options": ["const", "final", "static", "define"],
                "correctAnswer": 1
              },
              {
                "question": "What is the output of `System.out.println('Hello, World!')`?",
                "options": ["Hello, World!", "Hello World", "Error", "None"],
                "correctAnswer": 0
              },
              {
                "question": "Which of the following is used to comment out a single line in Java?",
                "options": ["//", "#", "/* */", "--"],
                "correctAnswer": 0
              },
              {
                "question": "What is the output of `System.out.println(10 % 3)`?",
                "options": ["1", "3", "0", "Error"],
                "correctAnswer": 0
              },
              {
                "question": "Which method is used to start a thread in Java?",
                "options": ["start()", "run()", "execute()", "begin()"],
                "correctAnswer": 0
              },
              {
                "question": "What is the output of `System.out.println(Math.sqrt(16))`?",
                "options": ["4", "4.0", "16", "Error"],
                "correctAnswer": 1
              },
              {
                "question": "Which of the following is used to handle exceptions in Java?",
                "options": ["try-catch", "try-finally", "try-catch-finally", "All of the above"],
                "correctAnswer": 3
              },
              {
                "question": "What is the output of `System.out.println(10 > 5 && 5 < 3)`?",
                "options": ["true", "false", "Error", "None"],
                "correctAnswer": 1
              },
              {
                "question": "Which of the following is used to create an interface in Java?",
                "options": ["interface", "class", "abstract", "None of the above"],
                "correctAnswer": 0
              },
              {
                "question": "What is the output of `System.out.println('Java'.charAt(2))`?",
                "options": ["J", "a", "v", "Error"],
                "correctAnswer": 2
              },
              {
                "question": "Which of the following is used to create a package in Java?",
                "options": ["package", "import", "class", "None of the above"],
                "correctAnswer": 0
              },
              {
                "question": "What is the output of `System.out.println(10 == 10.0)`?",
                "options": ["true", "false", "Error", "None"],
                "correctAnswer": 0
              },
              {
                "question": "Which of the following is used to create a constructor in Java?",
                "options": ["constructor()", "ClassName()", "new()", "init()"],
                "correctAnswer": 1
              },
              {
                "question": "What is the output of `System.out.println(10 != '10')`?",
                "options": ["true", "false", "Error", "None"],
                "correctAnswer": 0
              },
              {
                "question": "Which of the following is used to create a static method in Java?",
                "options": ["static", "final", "void", "None of the above"],
                "correctAnswer": 0
              },
              {
                "question": "What is the output of `System.out.println('Java'.length())`?",
                "options": ["4", "5", "Error", "None"],
                "correctAnswer": 0
              },
              {
                "question": "Which of the following is used to create an abstract class in Java?",
                "options": ["abstract", "class", "interface", "None of the above"],
                "correctAnswer": 0
              },
              {
                "question": "What is the output of `System.out.println(10 > 5 || 5 < 3)`?",
                "options": ["true", "false", "Error", "None"],
                "correctAnswer": 0
              },
              {
                "question": "Which of the following is used to create a lambda expression in Java?",
                "options": ["->", "=>", "lambda", "None of the above"],
                "correctAnswer": 0
              },
              {
                "question": "What is the output of `System.out.println('Java'.toUpperCase())`?",
                "options": ["JAVA", "java", "Java", "Error"],
                "correctAnswer": 0
              },
              {
                "question": "Which of the following is used to create a thread in Java?",
                "options": ["Thread", "Runnable", "Both Thread and Runnable", "None of the above"],
                "correctAnswer": 2
              },
              {
                "question": "What is the output of `System.out.println(10 + 5 * 2)`?",
                "options": ["30", "20", "15", "Error"],
                "correctAnswer": 1
              },
              {
                "question": "Which of the following is used to create a generic class in Java?",
                "options": ["<>", "{}", "()", "None of the above"],
                "correctAnswer": 0
              },
              {
                "question": "What is the output of `System.out.println('Java'.indexOf('a'))`?",
                "options": ["0", "1", "2", "-1"],
                "correctAnswer": 1
              },
              {
                "question": "Which of the following is used to create an enumeration in Java?",
                "options": ["enum", "class", "interface", "None of the above"],
                "correctAnswer": 0
              },
              {
                "question": "What is the output of `System.out.println(10 / 0)`?",
                "options": ["0", "Infinity", "Error", "None"],
                "correctAnswer": 2
              },
              {
                "question": "Which of the following is used to create a synchronized block in Java?",
                "options": ["synchronized", "lock", "mutex", "None of the above"],
                "correctAnswer": 0
              },
              {
                "question": "What is the output of `System.out.println('Java'.replace('J', 'K'))`?",
                "options": ["Kava", "Java", "Kava", "Error"],
                "correctAnswer": 0
              },
              {
                "question": "Which of the following is used to create a stream in Java?",
                "options": ["Stream", "List", "Array", "None of the above"],
                "correctAnswer": 0
              },
              {
                "question": "What is the output of `System.out.println(10 == 10.0f)`?",
                "options": ["true", "false", "Error", "None"],
                "correctAnswer": 0
              },
              {
                "question": "Which of the following is used to create a functional interface in Java?",
                "options": ["@FunctionalInterface", "@Interface", "@Lambda", "None of the above"],
                "correctAnswer": 0
              },
              {
                "question": "What is the output of `System.out.println('Java'.contains('va'))`?",
                "options": ["true", "false", "Error", "None"],
                "correctAnswer": 0
              },
              {
                "question": "Which of the following is used to create a record in Java?",
                "options": ["record", "class", "interface", "None of the above"],
                "correctAnswer": 0
              },
              {
                "question": "What is the output of `System.out.println(10 + '5')`?",
                "options": ["15", "105", "Error", "None"],
                "correctAnswer": 1
              },
              {
                "question": "Which of the following is used to create a module in Java?",
                "options": ["module", "package", "class", "None of the above"],
                "correctAnswer": 0
              },
              {
                "question": "What is the output of `System.out.println('Java'.substring(1, 3))`?",
                "options": ["av", "Ja", "Jav", "Error"],
                "correctAnswer": 0
              },
              {
                "question": "Which of the following is used to create a sealed class in Java?",
                "options": ["sealed", "class", "interface", "None of the above"],
                "correctAnswer": 0
              },
              {
                "question": "What is the output of `System.out.println(10 > 5 ? 'Yes' : 'No')`?",
                "options": ["Yes", "No", "Error", "None"],
                "correctAnswer": 0
              }
        ],
      },
      {
        category: "C++",
        questions: [
            {
                "question": "Which of the following is used to define an enum in C++?",
                "options": ["enum", "struct", "class", "None of the above"],
                "correctAnswer": 0
              },
              {
                "question": "What does OOP stand for?",
                "options": ["Object-Oriented Programming", "Out-of-Place Programming", "Open-Source Programming", "None of the above"],
                "correctAnswer": 0
              },
              {
                "question": "Which of these is a fundamental data type in C++?",
                "options": ["string", "vector", "int", "None of the above"],
                "correctAnswer": 2
              },
              {
                "question": "What is the scope resolution operator in C++?",
                "options": ["::", "->", ".", "None of the above"],
                "correctAnswer": 0
              },
              {
                "question": "What does 'cout' do in C++?",
                "options": ["Takes input from the user", "Prints output to the console", "Declares a variable", "None of the above"],
                "correctAnswer": 1
              },
              {
                "question": "What does 'cin' do in C++?",
                "options": ["Takes input from the user", "Prints output to the console", "Declares a variable", "None of the above"],
                "correctAnswer": 0
              },
              {
                "question": "What is a constructor in C++?",
                "options": ["A special function that initializes objects", "A function that destroys objects", "A function that performs calculations", "None of the above"],
                "correctAnswer": 0
              },
              {
                "question": "What is a destructor in C++?",
                "options": ["A special function that initializes objects", "A function that destroys objects", "A function that performs calculations", "None of the above"],
                "correctAnswer": 1
              },
              {
                "question": "What is inheritance in OOP?",
                "options": ["A way to create new classes from existing ones", "A way to define functions", "A way to declare variables", "None of the above"],
                "correctAnswer": 0
              },
              {
                "question": "What is polymorphism in OOP?",
                "options": ["The ability of an object to take on many forms", "The ability to create multiple objects", "The ability to inherit from multiple classes", "None of the above"],
                "correctAnswer": 0
              },
              {
                "question": "What is encapsulation in OOP?",
                "options": ["Bundling data and methods that operate on that data", "Creating objects", "Defining functions", "None of the above"],
                "correctAnswer": 0
              },
              {
                "question": "What is abstraction in OOP?",
                "options": ["Hiding complex implementation details and showing only essential information", "Creating objects", "Defining functions", "None of the above"],
                "correctAnswer": 0
              },
              {
                "question": "What is a pointer in C++?",
                "options": ["A variable that stores the memory address of another variable", "A variable that stores a value", "A function", "None of the above"],
                "correctAnswer": 0
              },
              {
                "question": "What is a reference in C++?",
                "options": ["An alias for an existing variable", "A pointer", "A function", "None of the above"],
                "correctAnswer": 0
              },
              {
                "question": "What is the difference between a pointer and a reference?",
                "options": ["A pointer can be reassigned, a reference cannot", "A reference can be reassigned, a pointer cannot", "They are the same", "None of the above"],
                "correctAnswer": 0
              },
              {
                "question": "What is a virtual function in C++?",
                "options": ["A function that can be overridden in derived classes", "A function that cannot be overridden", "A function that is called automatically", "None of the above"],
                "correctAnswer": 0
              },
              {
                "question": "What is an abstract class in C++?",
                "options": ["A class that cannot be instantiated", "A class that can be instantiated", "A class with only virtual functions", "None of the above"],
                "correctAnswer": 0
              },
              {
                "question": "What is a friend function in C++?",
                "options": ["A function that can access private members of a class", "A function that is a member of a class", "A function that is called by another function", "None of the above"],
                "correctAnswer": 0
              },
              {
                "question": "What is a template in C++?",
                "options": ["A blueprint for creating generic classes and functions", "A class", "A function", "None of the above"],
                "correctAnswer": 0
              },
              {
                "question": "What is the Standard Template Library (STL)?",
                "options": ["A collection of pre-written classes and functions", "A programming language", "A compiler", "None of the above"],
                "correctAnswer": 0
              },
              {
                "question": "What is a vector in the STL?",
                "options": ["A dynamic array", "A linked list", "A tree", "None of the above"],
                "correctAnswer": 0
              },
              {
                "question": "What is a list in the STL?",
                "options": ["A doubly linked list", "A dynamically sized array", "A tree", "None of the above"],
                "correctAnswer": 0
              },
              {
                "question": "What is a map in the STL?",
                "options": ["An associative container that stores key-value pairs", "A dynamic array", "A linked list", "None of the above"],
                "correctAnswer": 0
              },
              {
                "question": "What is an exception in C++?",
                "options": ["An event that disrupts the normal flow of the program", "A function", "A class", "None of the above"],
                "correctAnswer": 0
              },
              {
                "question": "How do you handle exceptions in C++?",
                "options": ["try-catch blocks", "if-else statements", "switch statements", "None of the above"],
                "correctAnswer": 0
              },
              {
                "question": "What is the 'throw' keyword used for?",
                "options": ["To throw an exception", "To catch an exception", "To define a function", "None of the above"],
                "correctAnswer": 0
              },
              {
                "question": "What is the 'try' block used for?",
                "options": ["To enclose code that might throw an exception", "To handle an exception", "To define a function", "None of the above"],
                "correctAnswer": 0
              },
              {
                "question": "What is the 'catch' block used for?",
                "options": ["To handle an exception", "To enclose code that might throw an exception", "To define a function", "None of the above"],
                "correctAnswer": 0
              },
              {
                "question": "What is the difference between shallow copy and deep copy?",
                "options": ["Shallow copy copies only the pointers, deep copy copies the data as well", "Deep copy copies only the pointers, shallow copy copies the data as well", "They are the same", "None of the above"],
                "correctAnswer": 0
              },
              {
                "question": "What is a smart pointer in C++?",
                "options": ["A pointer that automatically manages memory", "A regular pointer", "A function", "None of the above"],
                "correctAnswer": 0
              },
              {
                "question": "Which of the following is a type of smart pointer?",
                "options": ["unique_ptr", "int*", "void*", "None of the above"],
                "correctAnswer": 0
              },
              {
                "question": "What is RAII?",
                "options": ["Resource Acquisition Is Initialization", "Resource Allocation Is Initialization", "Resource Acquisition Is Invalidation", "None of the above"],
                "correctAnswer": 0
              },
              {
                "question": "What is operator overloading in C++?",
                "options": ["Defining how an operator works for a user-defined type", "Defining a new operator", "Removing an operator", "None of the above"],
                "correctAnswer": 0
              },
              {
                "question": "What is function overloading in C++?",
                "options": ["Defining multiple functions with the same name but different parameters", "Defining a function with multiple return types", "Defining a function with multiple parameters", "None of the above"],
                "correctAnswer": 0
              },
            {
                    "question": "What is function overriding in C++?",
                    "options": ["Defining a function in a derived class that has the same signature as a function in the base class", "Defining a function with the same name but different parameters", "Calling a function from another class", "None of the above"],
                    "correctAnswer": 0
                  },
                  {
                    "question": "What is the difference between const and constexpr?",
                    "options": ["const can be initialized at runtime, constexpr must be initialized at compile time", "constexpr can be initialized at runtime, const must be initialized at compile time", "They are the same", "None of the above"],
                    "correctAnswer": 0
                  },
                  {
                    "question": "What is a lambda expression in C++?",
                    "options": ["An anonymous function", "A named function", "A class", "None of the above"],
                    "correctAnswer": 0
                  },
                  {
                    "question": "What is move semantics in C++?",
                    "options": ["Transferring ownership of resources from one object to another", "Copying resources from one object to another", "Deleting resources", "None of the above"],
                    "correctAnswer": 0
                  },
                  {
                    "question": "What is rvalue reference in C++?",
                    "options": ["A reference to a temporary object", "A reference to a constant object", "A pointer", "None of the above"],
                    "correctAnswer": 0
                  },
                  {
                    "question": "What is perfect forwarding in C++?",
                    "options": ["Preserving the exact type of arguments when forwarding them to another function", "Copying arguments", "Moving arguments", "None of the above"],
                    "correctAnswer": 0
                  },
                  {
                    "question": "What is variadic template in C++?",
                    "options": ["A template that can accept a variable number of arguments", "A template that accepts only one argument", "A function", "None of the above"],
                    "correctAnswer": 0
                  },
                  {
                    "question": "What is SFINAE?",
                    "options": ["Substitution Failure Is Not An Error", "Substitution Failure Is Not Always an Error", "Substitution Failure Is Now An Error", "None of the above"],
                    "correctAnswer": 0
                  },
                  {
                    "question": "What is a static member in a class?",
                    "options": ["A member that belongs to the class itself, not to any specific object", "A member that belongs to an object", "A function", "None of the above"],
                    "correctAnswer": 0
                  },
                  {
                    "question": "What is a const member function?",
                    "options": ["A member function that does not modify the object's state", "A member function that modifies the object's state", "A function that returns a constant value", "None of the above"],
                    "correctAnswer": 0
                  },
                  {
                    "question": "What is the difference between public, private, and protected access specifiers?",
                    "options": ["public members can be accessed from anywhere, private members can only be accessed within the class, protected members can be accessed within the class and derived classes", "public members can only be accessed within the class, private members can be accessed from anywhere, protected members can be accessed within the class and derived classes", "They are the same", "None of the above"],
                    "correctAnswer": 0
                  },
                  {
                    "question": "What is composition in OOP?",
                    "options": ["Creating objects of other classes as members of a class", "Inheriting from other classes", "Defining functions", "None of the above"],
                    "correctAnswer": 0
                  },
                  {
                    "question": "What is dynamic binding in C++?",
                    "options": ["Resolving function calls at runtime based on the object's actual type", "Resolving function calls at compile time", "Defining functions", "None of the above"],
                    "correctAnswer": 0
                  },
                  {
                    "question": "What is the purpose of the 'using' declaration in C++?",
                    "options": ["To bring names from a namespace into the current scope", "To define a new namespace", "To declare a variable", "None of the above"],
                    "correctAnswer": 0
                  },
                  {
                    "question": "What are initializer lists in constructors used for?",
                    "options": ["Initializing member variables before the constructor body executes", "Defining the constructor body", "Declaring variables", "None of the above"],
                    "correctAnswer": 0
                  }
        ],
    },
  ];