

import { ArtObjectElement } from '@/Interfaces/ArtObject';
import { PaintObjectGallery } from './PaintObjectGallery';


interface PropsGalleryGrid {
    images: ArtObjectElement[];
}

export const GalleryGrid = ({images}: PropsGalleryGrid) => {

    
  return (
    <div className="gap-4 grid grid-cols-2 md:grid-cols-4">
      {images?.map((paintObject: ArtObjectElement, index: number) => (
        <div key={index} className='gap-4 grid'>
            { images.slice(index * 3, (index + 1) * 3).map((paintObject: ArtObjectElement, innerIndex: number) => (
                <PaintObjectGallery key={innerIndex} paintObject={paintObject} />
            ))}
        </div>
      ))}
    </div>
  );
}
