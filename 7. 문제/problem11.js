// 문제1) 배열을 입력받아 배열 요소에 수식을 적용하여 배열을 반환하는 고차함수를 구현하시오
/* {
    function f(arr,f){
        const array = [];
        for(let i = 0; i < arr.length; i++){
            array[i] = f(arr[i]);
        }
        return array;
    }
    const arr = [1,2,3];
    const f2 = x => x * 2;

    console.log(f(arr,f2));
    console.log(f(arr,x => x+10));
}
{
    const arr = [2,3,4];
    const f = (arr,f) => {
        const array = [];
        for(let ele of arr){
            array.push(f(ele));
        }
        return array;
    }
    console.log(f(arr,x => x+20));
    console.log(f(arr,x => x*20));
}
{   
    const arr = [2,3,4];
    const f = function(arr){
        const f2 = x => x + 30;
        const array = [];
        for(let ele of arr){
            array.push(f2(ele));
        }
        return array;
    }
    console.log(f(arr));

    // 고차함수 forEach() 
    const array2 = [];
    arr.forEach(ele => array2.push(ele*2));
    console.log(array2);

    // 고차함수 map()
    const result = arr.map(ele => ele * 3);
    console.log(result);
} */

// 해설
{
    function f(arr,g){
        const result =[];
        
        for(let i = 0; i < arr.length; i++){
            let x = g(arr[i]);
            result.push(x); 
        }

        return result;
    }

   const values = [1,2,3];

   const subF = x => x * 2;     //multifly(2)
   const subF2 = x =>  x * 3;
   const subF3 = x =>  x * 4;

   let result =  f(values,subF);
   console.log(result); //[2,4,6]

   result =  f(values,subF2);
   console.log(result); //[3,6,9]

   result =  f([1,2,3], x => x * 2);
   console.log(result);
   result =  f([1,2,3], x => x * 3);
   console.log(result);

    // function multifly(n){
    //     return function(x){
    //         return x * n;
    //     };
    // }
   const multifly = n => x => x * n;
    
    // console.log(multifly(2));

   console.log('------------------');
   result = f([1,2,3],multifly(2));
   console.log(result);
   result = f([1,2,3],multifly(3));
   console.log(result);
}