
const yargs = require('yargs')
const geocode = require('./geocode/geocode.js')
const weather = require('./weather/weather.js')

const argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'address',
            describe: 'Address to fetch weather for',
            string: true
        }
})
.help()
.alias('help', 'h')
.argv



geocode.geocodeAddress(argv.address, (errorMessage, result)=>{
    if(errorMessage){
        console.log(errorMessage)
    } else {
        console.log(JSON.stringify(result,undefined,2))
        weather.getWeather(result.longitude,result.latitude,(error, weatherResult)=>{
            if(error){
                console.log(error)
            }else{
                console.log(JSON.stringify(weatherResult,undefined,2))
            }
        })
    }
})








//36305fc1d8e50ca64a78f1a90239ecc8