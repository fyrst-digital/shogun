const { join, resolve } = require('path'); 

module.exports = () => { 
    return { 
        resolve: { 
           alias: { 
               '@fyrst/shogun/plugins': resolve( 
                    join(__dirname, '..', 'src', 'plugins') 
               )
           } 
       } 
   }; 
}