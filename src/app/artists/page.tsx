import { ArtObjectElement } from "@/Interfaces/ArtObject";
import { Header } from "@/components/Header";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
// https://www.rijksmuseum.nl/api/nl/collection?key=[api-key]&involvedMaker=Rembrandt+van+Rijn
// https://www.rijksmuseum.nl/api/nl/collection

const getArtists = async () => {
  try {
    const response = await axios.get(`${process.env.URL_API}?key=${process.env.KEY_API}&toppieces=true&technique=painting&p=1&ps=500`)
    return response.data.artObjects;
  } catch (error) {
    console.log(error);
  }
}

export default async function ArtistsPage () {

  const data =  await getArtists();
  // console.log(data);

  const seenArtists: { [key: string]: boolean } = {}; 

  return (
    <div className="bg-background w-full h-screen">
      <Header />
      <div className="gap-4 grid grid-cols-4 grid-rows-10 mt-10 p-10">
        { data.filter((artist: ArtObjectElement) => {
            if (artist.principalOrFirstMaker !== "anonymous" && !seenArtists[artist.principalOrFirstMaker as string]) {
              seenArtists[artist.principalOrFirstMaker as string] = true;
              return true;
            }
            return false;
          })
          .map((artist: ArtObjectElement) => {
            return (
              <div key={artist.id} className="">
                <Link href={`/artists/${artist.principalOrFirstMaker}`}>
                  <h2 className="font-inter text-text text-xl">{artist.principalOrFirstMaker}</h2>
                </Link>
              </div>
            )
          })
        }
      </div>
      {/* <EffectGradient /> */}
    </div>
  );
}