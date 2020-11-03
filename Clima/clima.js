const axios = require('axios');

const getClima  = async( lat , lng ) => {

     const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&appid=a21424f28ec3207d40c4e8128eaaea94&units=metric`)
     
    return  resp.data.main.temp
}


module.exports = {
    getClima    
}

//Hasta aqui 59