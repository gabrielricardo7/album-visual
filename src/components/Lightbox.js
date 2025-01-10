const Lightbox = ({ photo, onClose }) => {
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <img
        src={photo.url}
        alt={photo.title}
        className="max-w-full max-h-full rounded-lg"
      />
    </div>
  );
};

export default Lightbox;
