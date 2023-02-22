{
    // 동기처리(synchronous) : 순차적으로 실행 
    function a(){
        console.log('1');
        b();
        console.log('2');
    }

    function b(){
        for(let i = 0; i < 10000000000000; i++){}
        console.log('b호출 됨');
    }

    a();
}

{
    // 비동기 처리(asynchronous) : b의 처리 시간과 상관없이 a의 로직을 실행
    function a(){
        console.log('1');
        setTimeout(b,3*1000);
        console.log('2');
    }

    function b(){
        console.log('b호출 됨');
    }

    a();
    
}