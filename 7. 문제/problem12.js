//문제1) 정수값을 갖는 배열을 입력받아 합과 평균을 구하여 이들 값을 객체로 반환하는 함수를 구현하시오
// (함수선언문, 함수표현식, 화살표 함수)
{
    // 함수 선언문
    
    function cal(arr){
        const obj = {};
        let result = 0;
        let avg = 0;
        for(let ele of arr){
            if(ele < 0) return ;
            result += ele;
        }
        avg = result/arr.length;

        obj['sum'] = result;
        obj['avg'] = avg;
        
        return obj;
    }
    const arr = [1,2,3,4];
    console.log(cal(arr));
}

{
    // 함수 표현식
    const arr = [1,2,3,4];

    const cal = function(arr){
        const obj = {};
        let result = 0;
        let avg = 0;
        for(let ele of arr){
            if(ele < 0) return ;
            result = result + ele;
        }
        avg = result / arr.length;

        obj['sum'] = result;
        obj['avg'] = avg;

        return obj;
    }

    console.log(cal(arr));
}



{
    // 화살표 함수
    const arr = [1,2,3,4];

    const cal = arr => {
        const obj = {};
        let result = 0;
        let avg = 0;
        for(let ele of arr){
            if(ele < 0) return ;
            result += ele;
        }
        avg = result / arr.length;

        obj['sum'] = result;
        obj['avg'] = avg;

        return obj;
    }
    console.log(cal(arr));
}



{
    // reduce 
    const arr = [1,2,3,4];

    const cal = arr => {
        const obj = {};
        let result = arr.reduce((acc,curr) => acc+curr, 0);
        let avg = result / arr.length;
    
        obj['sum'] = result;
        obj['avg'] = avg;

        return obj;
    }
    // console.log('----- reduce -----');
    console.log(cal(arr));
}

{   // 풀이
    {   // case1)
        function f(arr){
            const result = {};
            let sum = 0;
            let avg = 0.0;

            for(let ele of arr){
                sum += ele;
            }
            avg = sum / arr.length;
            result.sum = sum;
            result.avg = avg;

            return result; //{sum : ?, avg: ?}
        }
        
        const values = [1,2,3];
        const result = f(values);
        console.log(`합 = ${result.sum}, 평균 = ${result['avg']}`);
    }
    {
        // case2)
        function f(arr){
            const result = {};
            let sum = 0;
            let avg = 0.0;

            for(let ele of arr){
                sum += ele;
            }
            avg = sum / arr.length;
            result['sum'] = sum;
            result['avg'] = avg;

            return result; //{sum : ?, avg: ?}
        }
        
        const values = [1,2,3];
        const result = f(values);
        console.log(`합 = ${result.sum}, 평균 = ${result['avg']}`);
    }
    {
        // case3)
        function f(arr){
            // const result = {};
            let sum = 0;
            let avg = 0.0;

            for(let ele of arr){
                sum += ele;
            }
            avg = sum / arr.length;
            /* result['sum'] = sum;
            result['avg'] = avg; */

            return {sum,avg}; //{sum : ?, avg: ?}
        }
        
        const values = [1,2,3];
        const {sum: s,avg: a} = f(values); //{ sum: 6, avg: 2 }
        console.log(`합 = ${s}, 평균 = ${a}`);
    }
    {
        // case4)
        function f(arr){
            const sum = arr.reduce((acc,curr,currIdx,arr) => {
                return acc + curr;
            }, 0);
            const avg = sum / arr.length;

            return {sum,avg};
        }
        
        const values = [1,2,3];
        const {sum: s,avg: a} = f(values); //{ sum: 6, avg: 2 }
        console.log(`합 = ${s}, 평균 = ${a}`);
    }
    {
        // {length} = arr -> {length: length} = {0: 1, 1: 2, 2: 3, length: 3}
       //case5)
        function f(arr){
            const result = arr.reduce( (acc,curr,curridx,{length})=>{
            // console.log(acc,curr,curridx,{length});
            if(!acc.sum) acc.sum = 0;
            acc.sum += curr;
            if(curridx == length-1)  acc.avg = acc.sum / length;
            return acc;
            }, {});  //{ sum:? ,avg:?}
            return result;
        }
        const values = [1,2,3];
        const {sum:s,avg:a} = f(values); //{ sum: 6, avg: 2 }
        console.log(`합 = ${s},평균 = ${a}`);   
    }
}

// 문제2) 정수값을 요소로 갖는 배열을 입력받아 합과 평균을 구하여 이들 값을 map 객체로 반환하는 함수를 구현하시오
// (함수선언문, 함수표현식, 화살표 함수)
{
    // 함수선언문
    const arr = [1,2,3,4];

    function cal(arr){
        const map = new Map();
        let result = 0;
        let avg = 0;
        for(let ele of arr){
            if(ele < 0) return ;
            result += ele;
        }
        avg = result/arr.length;

        map.set('sum',result);
        map.set('avg',avg);
        return map;
    }
    console.log(cal(arr));
}
{
    // 함수표현식
    const arr = [1,2,3,4];

    const cal = function(arr){
        const map = new Map();
        let result = 0;
        let avg = 0;
        for(let ele of arr){
            if(ele < 0) return ;
            result += ele;
        }
        avg = result/arr.length;

        map.set('sum',result);
        map.set('avg',avg);
        return map;
    }
    console.log(cal(arr));
}
{
    // 화살표 함수
    const arr = [1,2,3,4];

    const cal = arr => {
        const map = new Map();
        let result = 0;
        let avg = 0;
        for(let ele of arr){
            if(ele < 0) return ;
            result += ele;
        }
        avg = result/arr.length;

        map.set('sum',result);
        map.set('avg',avg);
        return map;
    }
    console.log(cal(arr));
}
{   //해설
    {
       //case5)
        function f(arr){
            const result = arr.reduce( (acc,curr,curridx,{length})=>{
            if(!acc.has('sum')) acc.set('sum', 0);
            acc.set('sum',acc.get('sum') + curr);
            if(curridx == length-1)  acc.set('avg',acc.get('sum') / length);
            return acc;
            }, new Map());  //{ sum:? ,avg:?}
            return result;
        }
        const values = [1,2,3];
        const map = f(values); //{ sum: 6, avg: 2 }
        console.log(`합 = ${map.get('sum')},평균 = ${map.get('avg')}`);   
    }
}