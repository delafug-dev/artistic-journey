// api/artsy.js

import axios from "axios";

// const request = require('superagent');

// const clientID = 'bd1222ec4022f8b5a89d';
// const clientSecret = '481a1c0dbd6a1eec9d18b8c8e2810115';
// const apiUrl = 'https://api.artsy.net/api/tokens/xapp_token';


// export async function getArtsyToken() {
//     let token: string | null = null;
    
//       try {
//         const res = await axios.post(apiUrl, {
//           client_id: clientID,
//           client_secret: clientSecret
//       });

//       if (res.status === 200) {
//           token = res.data.token;
//       } else {
//           throw new Error('Error al obtener el token de Artsy');
//       }
//       } catch (error) {
//         throw new Error('Error al realizar la solicitud a Artsy');
//       }
    
//     return token
// }

let request = require('superagent');

var clientID = 'bd1222ec4022f8b5a89d',
    clientSecret = '481a1c0dbd6a1eec9d18b8c8e2810115',
    apiUrl = 'https://api.artsy.net/api/tokens/xapp_token',
    xappToken;

request
  .post(apiUrl)
  .send({ client_id: clientID, client_secret: clientSecret })
  .end(function(res:any) {
    xappToken = res.body.token; 
});