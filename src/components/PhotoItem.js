const PhotoItem = ({ photo, onClick }) => {
  return (
    <div
      className="relative overflow-hidden pb-[100%] cursor-pointer"
      onClick={() => onClick(photo)}
    >
      <img
        src={photo.url}
        alt={photo.title}
        className="absolute inset-0 w-full h-full object-cover rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
      />
      <p className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white text-center py-2 text-lg font-medium">
        {photo.title}
      </p>
    </div>
  );
};

export default PhotoItem;
