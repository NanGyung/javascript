// promise
{
    const p = new Promise((s,f)=>{
        // 1. 비동기 처리   
        // 2. 비동기 처리결과
        if(성공) {
            s();
        }else{
            f();
        }
    });

}

{
    const p = new Promise((s,f)=>{
        const xhr = new XMLHttpRequest();
        const url = 'https://jsonplaceholder.typicode.com/users';
        xhr.open('GET',url);
        xhr.send();

        // 1. 비동기 처리   
        // 2. 비동기 처리결과
        xhr.addEventListener('load',e=>{
            if(xhr.status == 200) {
                s(xhr.response);
            }else{
                f(new Error('fail'));
            }
        });
    });

    console.log(p);

}