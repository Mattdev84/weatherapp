let somePromise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        //resolve('Hey it worked')
        reject('Rejecting')
    },2500)
})

somePromise.then((message)=>{
    console.log('Success: ',message)
}, (errorMessage)=>{
    console.log('Error: ',errorMessage)
})

console.log('end of doc')