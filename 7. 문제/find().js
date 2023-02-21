/* find: 콜백함수를 만족하는 배열의 첫번째 요소를 찾는 용도
         주어진 판별함수를 만족하는 배열의 첫번째 요소를 찾는 용도 

   - 반환값: 판별함수를 만족하는 배열의 첫번째 요소의 값, 그외는 undefind

    기본형태 : 배열.find(콜백함수(element[, index[, array]])[, thisArg]) 
              - 콜백함수: 배열의 각 요소에 실행될 함수
                * 인자: element- 콜백함수에서 처리할 현재요소
                        index- 현재 요소의 인덱스
                        array- find함수를 호출한 배열

              - thisArg : 콜백이 호출될 때 this로 사용할 객체, 선택항목(생략가능)
              - array.find((ele,idx,arr)=>{})
*/

/* - 매개변수(parameter): 함수의 정의에서 전달받은 인수를 함수 내부로 전달하기 위해 사용하는 변수
     * 인수(argument) : 함수가 호출될 때 함수로 값을 전달해주는 값

   - 반환값(return value): 함수 실행을 종료하고 주어진 값을 호출한 위치로 반환하는 값 
   - 콜백함수(콜백) : 고차함수의 매개값으로 전달받는 함수(함수를 함수의 인수로 전달)
*/

// 고차함수 find() 예제
// case 1) 
const array = [5, 12, 8, 130, 44];
let found = array.find(ele => ele > 5); //12
console.log(found);
found = array.find(ele => ele > 30);    //130
console.log(found);

// case 2) includes() 메서드 활용
const array2 = ['홍길동','홍길순','홍서북','홍길북'];
found = array2.find(ele => ele.includes('홍')); //홍길동
console.log(found);
found = array2.find(ele => ele.includes('북')); //홍서북
console.log(found);

// case 3) 나이가 30인 사람을 찾고 기존나이에 10을 더한 후 배열을 반환하는 고차함수

// 배열의 요소가 객체인 배열
const array3 = [
    {name: 'Son', age: 30},
    {name: 'Kane', age: 29},
    {name: 'Lucas', age: 40}
];

// 매개값에 10을 더하는 수식의 함수
const sum = x => x + 10;

function f(arr,sum){
    const arr2 = [];

    // 반환할 배열에 매개값으로 받은 배열의 요소 전체 추가
    for(let ele of arr){
        arr2.push(ele);
    }

    // 나이가 30인 사람 찾기 
    const found = arr2.find(({age}) => age == 30);  //{ name: 'Son', age: 30 }

    // 기존 나이를 10을 더한 나이로 바꿈
    found['age'] = sum(found['age']);   //age: 30  -> age: 40

    return arr2;
}

const result = f(array3,sum);
console.log(result);
