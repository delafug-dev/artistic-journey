import { Header } from "@/components/Header";
import axios from "axios";
import Image from "next/image";
// https://www.rijksmuseum.nl/api/nl/collection?key=[api-key]&involvedMaker=Rembrandt+van+Rijn
// https://www.rijksmuseum.nl/api/nl/collection

const getArtists = async () => {
  try {
    const response = await axios.get(`${process.env.URL_API}?key=${process.env.KEY_API}&toppieces=true&technique=painting`)
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export default async function ArtistsPage () {

  const data =  await getArtists();
  console.log(data);

  return (
    <div className="bg-background w-full h-screen">
      <Header />
      <h1 className="font-heading text-3xl text-text">Artists</h1>
      <div>
        { data.artObjects.map((artist: any) => {
          return (
            <div key={artist.id} className="flex flex-col items-center">
              <Image src={artist.webImage.url} alt={artist.title} className="w-1/2 h-1/2" width={100} height={100} sizes="100vm"/>
              <h2 className="font-heading text-text text-xl">{artist.longTitle}</h2>

            </div>
          )
        })
        }
      </div>
      {/* <EffectGradient /> */}
    </div>
  );
}