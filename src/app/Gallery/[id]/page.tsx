
import { ArtObjectDetailPaint } from "@/Interfaces/DetailPaint";
import { Header } from "@/components/Header";
import axios from "axios";
import Image from "next/image";

interface Props {
  params: { id: string }
}

const getDetailPaint = async (id: string): Promise<ArtObjectDetailPaint | undefined> => {
  try {
    const paint = await axios.get(`https://www.rijksmuseum.nl/api/en/collection/${id}?key=${process.env.KEY_API}`)
    return paint.data.artObject
  } catch (error) {
    console.error("Error al realizar la solicitud:", error);
  }
  return undefined;
}

export default async function ObjectDetailPaintPage({ params }: Props) {
 
  const paint = await getDetailPaint(params.id)
  console.log(paint)

  return (
    <div>
      <Header />

      <section className="mt-20">
        <div className="flex flex-row justify-center gap-20 min-w-[1600px]">
          <figure className="flex flex-col">
            <div className="relative rounded-lg overflow-hidden">
              <Image
                className="bg-gray-200 w-full max-w-96 max-h-[600px] transform transition duration-400 ease-in-out object-cover hover:scale-110"
                src={`${paint?.webImage.url}`}
                alt={`Image ${paint?.title}`}
                width={100}
                height={paint?.webImage?.height}
                sizes="100vm"
              />
            </div>
            <span className="opacity-85 text-nav text-sm text-text">{paint?.subTitle}</span>
          </figure>
          <div className="max-w-[560px] text-text">
            <h1 className="font-heading text-3xl">{paint?.title}, {paint?.dating?.presentingDate}</h1>
            <p className="font-inter text-2xl text-text">{paint?.principalOrFirstMaker}</p>
            <div className="mt-8 text-balance text-lg">
              <p className="font-inter text-text">{paint?.label?.description}</p>
              <p className="font-inter text-text">{paint?.productionPlaces}</p>
            </div>
            <div className="flex justify-end">
              <button className="">
                <a href={paint?.links?.search} target="_blank" rel="noreferrer" className="bg-white px-8 py-4 text-background text-xl">
                  Ver en Rijksmuseum
                </a>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}