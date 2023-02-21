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

    //요소 전체 순회
    // case1)
    for(let ele of set3){
        console.log(ele);
    }

    // case2)
    set3.forEach((ele)=>{
        console.log(ele)
    });

    // 요소 존재여부 체크
    set3.has('apple') ? console.log('있다'):console.log('없다');
}