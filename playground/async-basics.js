console.log('Starting app')

setTimeout(()=>{
    console.log('Async Called')
},3000)

setTimeout(()=>{
    console.log('2nd Async Called')
},0)

console.log('finishing up')