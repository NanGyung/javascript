// var, let, const
// 전역변수 : 제일 외각에 선언된 변수 (함수, class 외부에 선언된 변수)
// 지역변수 : 블럭내에 선언된 변수
let a = 10;

function f(){
    var b = 10;

};

function g(){
    for (var i = 0; i < 10; i++) {
    let leak = "I am available outside of the loop";
    var leak2 = "I am available outside of the loop";
}
    // console.log('g() 내부에서 접근'+ leak);
    console.log('g() 내부에서 접근'+ leak2);
}

g();

// console.log('g() 외부에서 접근' + leak);
  // I am available outside of the loop
  
//   function myFunc(){
//     var functionScoped = "I am available inside this function";
//     console.log(functionScoped);
//   }
//   myFunc();
//   // I am available inside this function
//   console.log(functionScoped);
//   // ReferenceError: functionScoped is not defined