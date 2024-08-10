/**
 * Async / Await
 */
const getPromise = (seconds)=> new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve('에러');
        // reject('에러');
    }, seconds * 1000)
});

async function runner(){
    try{
        const result1 = await getPromise(1); // promise만 await가능
        console.log(result1);
        const result2 = await getPromise(2);
        console.log(result2);
        const result3 = await getPromise(1);
        console.log(result3);
    }catch(e){
        console.log('---catch e---');
        console.log(e);
    }finally{
        console.log('---finally---');
    }
}

runner();
console.log("실행 끝"); // await는 함수를 일시정지 시키지만 메인 스레드를 막고있진 않아서 이 콘솔이 먼저 찍힌다.