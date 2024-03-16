

import axios from "axios";

// https://api.artsy.net/api/artists/andy-warhol
const token = 'eyJhbGciOiJIUzI1NiJ9.eyJyb2xlcyI6IiIsInN1YmplY3RfYXBwbGljYXRpb24iOiJhNmQ2MmY2ZS1jNWI2LTQ3ZDEtYjgyMS0wOTI1MWViNjkxNzIiLCJleHAiOjE3MTA5NjM4NTAsImlhdCI6MTcxMDM1OTA1MCwiYXVkIjoiYTZkNjJmNmUtYzViNi00N2QxLWI4MjEtMDkyNTFlYjY5MTcyIiwiaXNzIjoiR3Jhdml0eSIsImp0aSI6IjY1ZjIwMjBhOWQ1MTAzMDAwZTAzNTEyYSJ9.kmaHDuFdICG-Nlbuz2HinKkL_A7C6UcwJ_JWh7Z4Px8'

const getArtist = async () => {
    try {
        const res = await axios.get('https://api.artsy.net/api/artists/andy-warhol', {
            headers: {
                'X-Xapp-Token': token
            }
        })
        return res.data;
        console.log(res.data);
    } catch (error) {
        console.error('Error al obtener el artista:', error);
    }
}

export default async function NamePage() {
    
    const data = await getArtist();
    console.log(data);

    return (
      <div className="text-white">
        {data.name}
      </div>
    );
}