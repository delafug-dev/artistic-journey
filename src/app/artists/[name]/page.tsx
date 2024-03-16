import { ArtistPaint } from "@/Interfaces/Artist";
import { Header } from "@/components/Header";
import { ArtistPaints } from "@/components/artist/ArtistPaints";
import axios from "axios";

interface Props {
    params: { name: string }
  }

const getArtist = async (name: string): Promise<ArtistPaint[]> => {

    const artistSearch: string = name.replace(/ /g, '+')

    try {
        const artist = await axios.get(`${process.env.URL_API}?key=${process.env.KEY_API}&involvedMaker=${artistSearch}&p=1&ps=30`)
        return artist.data.artObjects
    } catch (error) {
        return Promise.reject("Error al realizar la solicitud");
    }
}

export default async function ArtistPage({ params }: Props) {

    const artist  = await getArtist(params.name)
    console.log(artist)
    

    return (
        <>
            <Header />
            <section>
                <div className="relative items-center mx-auto px-5 md:px-12 lg:px-20 py-12 w-full max-w-7xl">
                    <div className="gap-4 grid grid-cols-2 lg:grid-cols-4 col-span-2">       
                {
                    artist.map((paint: ArtistPaint) => {
                        return (
                            <ArtistPaints key={paint.id} paint={paint} />
                        )
                    })
                }
                    </div>
                </div>
            </section>
        
        </>
    );
}