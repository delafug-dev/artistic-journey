import { ArtObjectElement } from "@/Interfaces/ArtObject";
import { Header } from "@/components/Header";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";
import axios from "axios";

const getImagesGallery = async (): Promise<ArtObjectElement[]> => {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_URL_API}?key=${process.env.NEXT_PUBLIC_KEY_API}&technique=painting&toppieces=true&ps=24&imgonly=true`)
    const { artObjects } = response.data;
    return artObjects as ArtObjectElement[];
  } catch (error) {
    console.log(error);
    return []; 
  }
}


export default async function GalleryPage() {


  const images = await getImagesGallery();
  
  return (
    <div className="">
      <Header />
      <div className="mt-10 p-10">
        <GalleryGrid images={images}/>
      </div>
    </div>
  );
}