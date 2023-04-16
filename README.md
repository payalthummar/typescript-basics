######## https://www.youtube.com/watch?v=gieEQFIfgYc

[installation----------]
npm i typescript -g

[run ts file----------]

tsc main.ts

[continue to watch----------]
tsc main.ts -w

[watch any ts file, what we create in src directory and compile to javascript file and then creates js file inside build directory then js folder]
{creates javascript file}
tsc -w

[to create config file------------]
tsc --init

[change the file into config file--------------]

"rootDir": "./src"
"outDir": "./build/js"

"rootDir": "./src" "include": ["src"] // typescript ignores the file, that are not inside the src directory
"noEmitOnError": true //Does not create files if any type checking errors are reported

[ to emit on error, type on terminal]
tsc --noEmitOnError -w

[change src file inside index.html-----------]

<script src="js/main.js" defer></script>

## Lessons

1 - introduction
2 - Data type
3 - Objects & Arrays & Tuples | Enums
4 - Type Aliases
5 - Type Assertion (Type casting) - file changed (copyright.js & index.html)

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

6 - Class
7 - Index Signatures & keyof Assertions
8 - Generics
9 - utitlity types
