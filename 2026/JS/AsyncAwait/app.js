async function myFunct(params) {
    // return 'Hello'

    const promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve('Hello'), 1000);
    });

    const error = true;

    if(!error) {
        const res = await promise; // Wait until promised is resolved

        return res;

    }else {
        await Promise.reject(new Error('Something went wrong'));
    }

    
}

// console.log(myFunct());

myFunct().then(res => console.log(res))
         .catch(err => console.log(err));