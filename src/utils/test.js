function test(msg) {
  this.msg = msg;

  this.say = function() {
    console.log('interal say', this.msg);
  }
}

test.prototype = {
  msg: 'test2',
  say: function() {
    console.log('prototype say', this.msg);
  }
}

var t1 = new test('test3');
var t2 = new test('test3');

console.log(t1.msg === t2.msg, t1.msg, t2.msg); // true
console.log(t1.say === t2.say); // false
console.log(t1.__proto__ === t2.__proto__, t1.__proto__, t2.__proto__); // true
console.log(t1.__proto__ === test.prototype, t1.__proto__, test.prototype); // false
console.log(t1.constructor === t2.constructor); // true
console.log(t1.__proto__ === test); // false
