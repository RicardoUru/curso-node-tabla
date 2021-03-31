const fs = require('fs');
const colors = require('colors');

const crearArchivo = async ( base = 5, listar = false, limite = 10 ) => {

    // return new Promise((resolve, reject ) => {
        try {
                    
        
            let salida = ''; 
            let consola = '';
            for (let i = 1; i <= limite; i++) {
        
            salida  += `${base} x ${i} = ${base * i}\n`;
            consola += `${base} ${'x'.blue} ${i} ${'='.blue} ${base * i}\n`;

            }

            if ( listar ){
                console.log(`${'====================='.blue}
     Tabla del: ${colors.yellow(base)}
${'====================='.blue}`);

            console.log(consola);
            }
        
            fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        
           return `tabla-${base}.txt`;


        } catch (err) {
            throw err;
        }


    

};

module.exports = {
    crearArchivo
};