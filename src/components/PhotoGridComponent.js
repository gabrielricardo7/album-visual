import { useState } from "react";
import PhotoItem from "./PhotoItem";
import Lightbox from "./Lightbox";

const PhotoGridComponent = ({ photos }) => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const handlePhotoClick = (photo) => {
    setSelectedPhoto(photo);
  };

  const handleLightboxClose = () => {
    setSelectedPhoto(null);
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {photos.map((photo) => (
          <PhotoItem key={photo.id} photo={photo} onClick={handlePhotoClick} />
        ))}
      </div>
      {selectedPhoto && (
        <Lightbox photo={selectedPhoto} onClose={handleLightboxClose} />
      )}
    </>
  );
};

export default PhotoGridComponent;
