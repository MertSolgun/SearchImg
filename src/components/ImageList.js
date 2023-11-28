import ImageItem from "./ImageItem";

function ImageList({ imagesPlaceholder }) {
  const data = imagesPlaceholder;
  return (
    <div className="img-container">
      {data.map((image, index) => {
        const imgs = image.urls.small;
        return <ImageItem img={imgs} key={index}></ImageItem>;
      })}
    </div>
  );
}

export default ImageList;
