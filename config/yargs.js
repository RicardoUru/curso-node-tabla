const argv = require('yargs')
                .options({
                  'b': {
                    alias: 'base',
                    type: 'number',
                    demandOption: true,
                    describe: 'Es la base a multiplicar'                  
                },
                  'l': {
                    alias: 'list',
                    type: 'boolean',                    
                    default: false,
                    description: 'Muestra en consola la multiplicación'
                },
                'h': {
                  alias: 'hasta',
                  type: 'number',
                  default: 10,
                  describe: 'límite de la multiplicación'
                }

                })
                .check( (argv, options) => {
                    if ( isNaN(argv.b) ) {
                      throw 'La base tiene que ser un número';
                    }
                    return true;
                } )
                .argv;

module.exports = argv;