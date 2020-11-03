const axios = require('axios').default; 



const getLugarLatLng =  async( dir ) => {
    
    
    let encodedUrl =  encodeURI( dir );  // Transofmra a los caracteres especiales para que no haya ningun error
    var instance = axios.create({
        baseURL : `https://geocode.xyz/Hauptstr.,+57632+'${encodedUrl}'?json=1`
    })
   /*  instance.get()
    .then ( x => {
        // console.log(x.data);
    }).catch( e => {
        console.log('Noooooooooooooooo'  , e );
    }) */

    const resp = await instance.get();

    
    if ( resp.data.longt == 0.00000 ){
        throw new Error( `No hay resultados para ${ dir }` )
    }
    
    const city = resp.data.standard.city;
    const longt = resp.data.longt;
    const latt = resp.data.latt;

    return {    
        city,
        longt,
        latt
    }

}

module.exports = {
    getLugarLatLng
}
