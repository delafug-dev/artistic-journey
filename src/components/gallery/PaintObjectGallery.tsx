'use client'

import { ArtObjectElement } from "@/Interfaces/ArtObject";
import Image from "next/image";
import Link from "next/link";


interface PaintObjectGalleryProps {
    paintObject: ArtObjectElement;
}

export const PaintObjectGallery = ({paintObject}: PaintObjectGalleryProps) => {

    const date = paintObject.longTitle?.match(/[^,]*$/)?.[0]?.trim();


  return (
    
    <div className="relative rounded-lg overflow-hidden group">
        <Link href={`/gallery/${paintObject.objectNumber}`}>
            <Image
                className="rounded-lg w-full max-w-full h-full transform object-cover hover:scale-110 transition duration-400 ease-in-out"
                src={`${paintObject.webImage?.url}`}
                alt=""
                width={100}
                height={paintObject.webImage?.height}
                sizes="100vm"
                priority
            />
            <div className="right-0 bottom-0 left-0 absolute bg-black opacity-0 group-hover:opacity-75 p-6 transition-opacity duration-300 ease-in-out">
                <h3 className="font-heading font-semibold text-text text-xl">{paintObject.principalOrFirstMaker}, {date}</h3>
                <p className="font-inter text-base text-text">{paintObject.title}</p>
            </div>
        </Link>
    </div>
  );
}
