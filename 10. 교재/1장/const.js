{
    const x = 10;
    // x = 20;  //재할당 불가
    console.log(x);
}
{
    let person = {
        name : '홍길동',
        age : 30
    }
    console.log(person);

    person['name'] = '홍길순';
    console.log(person);

    person = {
        name : '홍길남',
        age : 40
    }

}