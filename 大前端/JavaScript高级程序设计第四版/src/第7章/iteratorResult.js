// 可迭代对象
let arr = ['foo', 'bar'];

// 迭代器工厂函数
console.log(arr[Symbol.iterator]);  // f values() { [native code] }

// 迭代器
let iter = arr[Symbol.iterator]();
console.log(iter);  // ArrayIterator {}

// 执行迭代
console.log(iter.next());   // {done: false, value: 'foo'}
console.log(iter.next());   // {done: false, value: 'bar'}
console.log(iter.next());   // {done: true, value: undefined }