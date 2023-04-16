# "Typescript Basics"

---

### https://www.youtube.com/watch?v=gieEQFIfgYc

## Installation

To install the app, first clone the repository:

### git clone https://github.com/payalthummar/typescript-basics.git

Then navigate to the project directory and install the dependencies:

```javascript
cd typescript-basics
npm install
```

- installation

  **npm i typescript -g**

- to run ts file
  **tsc main.ts**

- continue to watch
  **tsc main.ts -w**

- watch any ts file, what we create in src directory and compile to javascript file and then creates js file inside build directory then js folder
  {creates javascript file}
  **tsc -w**

- to create config file
  **tsc --init**

---

```javascript
- change the file into config file

"rootDir": "./src"
"outDir": "./build/js"

"rootDir": "./src" "include": ["src"]

// typescript ignores the file, that are not inside the src directory

"noEmitOnError": true

//Does not create files if any type checking errors are reported

- to emit on error, type on terminal
  **tsc --noEmitOnError -w**

- change src file inside index.html

- <script src="js/main.js" defer></script>

```

---

- **To run this file first copy the code from (lesson1.ts) file and paste it to (main.ts) file**
- **then type (tsc -w) in the Terminal to see the result**

---

### 💻 Source Code

- 🔗 [Chapter 1 - Introduction, Setup & Config] (src/lesson1)
- 🔗 [Chapter 2 - Basic Types] (src/lesson2)
- 🔗 [Chapter 3 - Arrays, Tuples, Objects & Enums] (src/lesson3)
- 🔗 [Chapter 4 - Type Aliases, Literals, Functions & Never Type] (src/lesson4)
- 🔗 [Chapter 5 - Type Assertions & Type Casting] (src/lesson5)
- 🔗 [Chapter 6 - Classes & Interfaces] (src/lesson6)
- 🔗 [Chapter 7 - Index Signatures & keyof Assertions] (src/lesson7)
- 🔗 [Chapter 8 - Generics] (src/lesson8)
- 🔗 [Chapter 9 - Utility Types] (src/lesson9)
<!-- -
- 🔗 [Chapter 11 - Beginners Project / Challenges] (src/lesson11-ToDo)
- 🔗 [Chapter 12 - React + Typescript Starter] (src/lesson12)
- 🔗 [Chapter 13 - React Hooks + Typescript] (src/lesson13)
- 🔗 [Chapter 14 - React useReducer + Typescript] src/(lesson14)
- 🔗 [Chapter 15 - React useContext + Typescript] (src/lesson15)
- 🔗 [Chapter 16 - React + Typescript Project - Part 1] (src/lesson16) -->

---

## Type Assertion (Type casting) - file changed (copyright.js & index.html)

```javascript


## index.html

<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Typescript</title>

    <style>
      body {
        background-color: black;
        margin: 0;
        min-height: 100vh;
        display: grid;
        place-content: center;
        font-size: 3rem;
        color: #fff;
      }
    </style>
    <script src="js/main.js" defer></script>
    <script src="js/copyright.js" defer></script>

  </head>
  <body>
    <p>Copyright &copy; <span id="year"></span></p>
  </body>
</html>


```

---

## Chapter 11 - Todo

### install

- npm create vite@latest

# To setup project

- cd lesson11-ToDo
- npm i
- npm run dev

## Chapter 12 lesson12-React-Typescript

#### install

- npm create vite@latest

# To setup project

- cd lesson12-React-Typescript
- npm i
- npm run dev

## Chapter 13 lesson13-React-Hooks

#### install

- npm create vite@latest

# To setup project

- cd lesson13-React-Hooks
- npm i
- npm run dev
