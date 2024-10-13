import '../index.css'; // Import the CSS file

// RoundedImage component
const RoundedImage = ({ src, alt, width, height }) => {
  return (
    <img 
      src={src} 
      alt={alt} 
      className="rounded-image logo"
      style={{ width: width || '150px', height: height || '150px' }}
    />
  );
};

export default RoundedImage;