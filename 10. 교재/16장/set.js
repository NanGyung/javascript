{
    // 생성
    // case1)
    const set = new Set();

    // case2)
    const set2 = new Set(['apple','banana','strawberry']);
    console.log(set2);

    // case3)
    const arr = ['apple','banana','strawberry'];
    const set3 = new Set(arr);
    console.log(set3);

    // 추가
    set.add('apple');
    set.add('banana');
    console.log(set);
    set.add('apple');   //중복 불가, 새로운 값으로 덮어쓰기함 
    console.log(set);
    set.add('strawberry');
    console.log(set);
    // 요소수
    console.log(set.size);
    // 삭제
    set.delete('apple');
    console.log(set);
    // 전체요소 삭제
    set.clear();
    console.log(set.size);

}