import {foo} from './utils.js'
/*#__PURE__*/ foo();

// npx rollup input.js -f esm -o bundle.js
// 这个命令是以input.js文件为入口，输出ESM（ES Modules）即budles.js 这就是打包后的文件
// 将永远都不会执行的代码给删除了，比如bar函数


// /*#__PURE__*/ 该注释告诉rollup，foo函数的执行不会产生副作用，而它又仅仅是读取了值，
// 那就可以放心把他删掉，所以这时bundle.js是个空文件。
