//Instalar npm axios  --> Trabaja en base a promesas 
//O instalar npm request --> Trabaja en base a calbacks

const lugar = require('./Lugar/lugar')
const clima = require('./clima/clima');


const argv = require ('yargs').options({  
    direccion : {
        alias : 'd',
        desc : 'Direccion de la ciudad para obtener le clima',
        demand : true
    }
}).argv;



lugar.getLugarLatLng( argv.direccion )
    .then( (x) => {
        clima.getClima( x.latt , x.longt )
            .then( x => {
                console.log(`El clima de ${argv.direccion} es de ${x}`);
            })
            .catch( x => {
                console.log(`No se pudo determinar el clima de ${argv.dreccion}`);
            })
    })
    .catch(console.log )



    
// C. 54
// let encodedUrl =  encodeURI ( argv.direccion );  // Transofmra a los caracteres especiales para que no haya ningun error  //Movido a lugar.js
// const axios = require('axios').default; //Movido a lugar.js
// var instance = axios.create({   Movido a lugar.js
//     baseURL : `https://geocode.xyz/Hauptstr.,+57632+'${encodedUrl}'?json=1`
// })
// instance.get()
// .then ( x => {
//     console.log(x.data);
// }).catch( e => {
//     console.log('Noooooooooooooooo'  , e );
// })

//C. 56