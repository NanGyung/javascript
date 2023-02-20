// spread : 이터러블 객체, 객체 리터럴을 목록으로 변환해주는 문법
// ...이터러블 객체 & 객체 리터럴
{
    const arr = Array.of(1,2,3,4,5);
    console.log(arr);
    console.log(...arr);
}
{
    const arr1 = [1,2,3];
    const arr2 = [4,5,6];

    {
        // 배열 합치기
        console.log(arr1.concat(arr2));
        console.log([...arr1,...arr2]);
    }
    {
        // 배열 복사
        const arr3 = [...arr2];
        console.log(`배열복사 = ${arr3}`);
    }
}
{
    const obj1 = {name: '홍길동', age: 30}
    const obj2 = {blood: 'A', national: '한국'}
    {
        //  객체 프로퍼티 합치기
        console.log({...obj1, ...obj2});
    }
}
{
    const arr = [10,20];

    const sum = (v1,v2) => v1+v2;

    const result = sum(...arr); //spread
    console.log(result);
}
{
    function f(v1,v2, ...v3){   // rest 매개변수
        console.log(v1,v2,v3);
    }
    f(1,2,3,4,5);
}