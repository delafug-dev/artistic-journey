import { ArtistPaint } from "@/Interfaces/Artist"
import Image from "next/image"

interface Props {
    paint: ArtistPaint
}


export const ArtistPaints = ({paint}: Props) => {

  const image = paint.webImage?.url ?? '/images/placeholder.png'
    
  return (
      <figure>
        <Image className="bg-gray-200 w-full" src={image} alt="" width="1310" height="873" />
      </figure>
  )
}
