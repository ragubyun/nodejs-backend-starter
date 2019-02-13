# Node.js Starter Project for Backend

Node.js 로 Back-end 프로젝트를 시작할 때 스타터로 사용 할 만한 기본 틀

비지니스 개발에 필요한 샘플 소스가 아닌 개발 과정에서 필요한 환경 설정 및 기본적인 기술 스택의 초기설정만을 포함하고 있다. 

## Environment

- [`Node.js`]() Node.js
  - [path](https://nodejs.org/docs/latest-v10.x/api/path.html)
  
- [`Express`](https://expressjs.com/) for web application and HTTP utility
  - [json()](http://expressjs.com/ko/api.html#express.json)
  - [static()](http://expressjs.com/ko/api.html#express.static)
  - [Router()](http://expressjs.com/ko/api.html#express.router)
  
- [`nodemon`](https://github.com/remy/nodemon) Node.js 어플리케이션 셔버 자동 재시작 

- [`Babel`](https://babeljs.io/) ES6 문법 트랜스파일링

- [`ESLint`](https://eslint.org/) for linting JavaScript - airbnb base

- [`Jest`](https://jestjs.io/) for unit tes
  - [supertest](https://github.com/visionmedia/supertest)
  
- [`DefinitelyTyped`](http://definitelytyped.org/) high quality TypeScript type definitions
  - ide 와 관계없이 사용하고 있는 라이브러리들에 대한 타입을 자체적으로 가지고 있도록 설정
  
- [`debug`](https://github.com/visionmedia/debug) Node.js 코어의 디버깅 기술을 모델로 디버깅 유틸리티

- [`Swagger`](https://swagger.io/) for document the http APIs specification and test
  - [swagger-ui-express](https://github.com/scottie1984/swagger-ui-express) swagger ui 를 express 와 쉽게 통합할 수 있게 해주는 라이브러리
  - [swagger-jsdoc](https://github.com/Surnet/swagger-jsdoc) 주석을 사용하여 swagger와 통합 
      ```
      JSDoc은 JavaScript 용 API 문서 생성기로 Javadoc과 유사하다.
      ```

## npm script

```bash
"test": "jest --collectCoverage"
"start": "npm run serve",
"serve": "DEBUG=express:app,express:http nodemon --exec 'npm run lint && babel-node src/index.js'",
"debugging": "DEBUG=* nodemon --exec 'npm run lint && babel-node src/index.js --inspect'"
"lint": "eslint --ignore-path .gitignore ."
```


## Installation

```bash
git clone https://github.com/ragubyun/nodejs-backend-starter.git
```

```bash
npm install
```

## Usage

Enjoy.

## Roadmap

`v0.1` 버전은 소스 자체를 clone 받아서 사용하는 형태
 
`v0.2` 버전에서는 아래 라이브러리들을 이용하여 *command-line interface*를 통해서 기능들을 선택하여 프로젝트를 생성하도록 할 예정 

- [chalk](https://github.com/chalk/chalk)
- [commander.js](https://github.com/tj/commander.js)
- [Inquirer.js](https://github.com/SBoudrias/Inquirer.js)

참고

> npm trends 에서 chalk, commander.js, Inquirer.js 비교  
  https://www.npmtrends.com/chalk-vs-commander-vs-inquirer
