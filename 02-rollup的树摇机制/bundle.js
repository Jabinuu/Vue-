function foo(obj){
  obj && obj.foo;
}

function bar(){
  foo();
}
bar();
// npx rollup input.js -f esm -o bundle.js
// 这个命令是以input.js文件为入口，输出ESM（ES Modules）即budles.js 这就是打包后的文件
// 将永远都不会执行的代码给删除了，比如bar函数



// 那就可以放心把他删掉，所以这时bundle.js是个空文件。
