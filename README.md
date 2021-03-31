# JavaScript Kata

Code kata in JavaScript where you have to write a library of books and magazines.

[A code kata is an exercise in programming which helps a programmer hone their skills through practice and repetition.](https://en.wikipedia.org/wiki/Kata_(programming))

* [Frame conditions](#frame-conditions)
* [Tasks](#tasks)
* [Procedure](#procedure)
* [License](#license)

## Frame conditions

1. You have exact __2.5 hours__ of time - __no minute longer__.  
   If you reach this time limit stop your work immediately.  
   It is one part of the kata to respect this time limit.  
   There are no restrictions on how to use the provided time.  
   If you want to code the entire time, take a break or a cigaret - it’s up to you.  

2. There is no complete or incomplete, most likely it'll be impossible to close all the tasks in the first run (that's the point of kata as a type of practice). Keep in mind following priorities though:
   1. __Code quality and structure__.
   2. Functionality.
   3. UI/UX.

4. This is a real world situation. You are allowed to consult the Internet, use every library you want, call a friend...  
   **BUT you're NOT allowed to:**
      * do pair programming
      * have a look at your previous implementation of this kata if you've done it before

5. Given resources:
   * [`authors.csv`](data/authors.csv): Contains authors with its `email`, `firstName` and `lastName`.
   * [`books.csv`](data/books.csv): Contains books with its `title`, `description`, one or more `authors` and an `isbn`.
   * [`magazines.csv`](data/magazines.csv): Contains magazines with its `title`, one or more `authors`, a `publishedAt` and an `isbn`.

## Tasks

* [Main tasks](#main-tasks)
* [Optional tasks](#optional-tasks)

### Main tasks

1. Parse the data from the given CSV files in a meaningful structure.

2. Print out a merged list of books and magazines with all their details sorted by `title`.

3. Implement search:
   1. By `isbn`.
   2. By `authors`' email.

4. Add unit tests.

### Optional tasks

1. Implement adding a book/magazine to the data structure of your software.

2. Implement exporting of the new list to a CSV file.

## Procedure

1. Get the code. There are several ways for it:
   1. With fork (makes it possible to preserve your work):
      1. [Fork this repository](https://github.com/wundertax/javascript-kata/fork)
      2. Clone this fork to your computer:
         ```bash
         git clone <your github url>
         # Example: git clone https://github.com/wundertax/javascript-kata.git
         ```

   2. Just download it from [here](https://github.com/wundertax/javascript-kata/archive/master.zip)

2. Open in your favorite text editor/IDE.

3. Start the kata.

4. Discuss with your friends and/or colleges your solution.

5. Repeat after some days/weeks.

## FAQ

### How to run your application?

1. Install dependencies:
   ```bash
   npm i
   ```

2. Run `start` script:
   ```bash
   npm run start
   ```
   
   This command will run dev server. After this the project is accessible on [http://localhost:9000/](http://localhost:9000/)

#### What's the structure of the boilerplate?

> **Important!** `react` and `react-dom` are already included in `package.json`. If you want to use other libraries/frameworks, you have to install and include them manually.

1. [`webpack`](https://webpack.js.org/) for building and bundling:
   * `.js` and `.css` files work out of the box.
   * entry point is `src/index.js` file.
   * bundle is being written in `dist/main.js`.

2. [`jest`](https://jestjs.io/) for testing.

3. [`eslint`](https://eslint.org/) for code checking.

3. [`webpack-dev-server`](https://webpack.js.org/configuration/dev-server/) for hacking:
   * configured to serve content of `dist`, `data` and `static` folders. If you run server, CSV files are gonna be available from the root, e.g. `data/authors.csv` will be served over [http://localhost:9000/authors.csv](http://localhost:9000/authors.csv)
   * supports live reload

4. [`babel`](https://babeljs.io/) for code transpiling:
   * preconfigured with `preset-env` and `preset-react`.
   * `plugin-transform-runtime` plugin to support `async`/`await`.
> **Hint:** if you prefer using another build tool/bundler/test suite/etc: feel free to modify whatever you need.

#### How to lint your code?

For code check:
```bash
npm run lint
```

To fix the linting errors:
```bash
npm run lint:fix
```

#### How to run your tests?
```bash
npm run test
```

## License
See [LICENSE](LICENSE) file.
