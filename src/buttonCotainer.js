const Button = () => {
  return (
    <div className="btn-flex">
      <div>
        <button className="btn-items black">All</button>
      </div>
      <div>
        <button className="btn-items">Trending</button>
      </div>
      <div>
        <button className="btn-items">Tech News</button>
      </div>
      <div>
        <button className="btn-items">Trailers</button>
      </div>
      <div>
        <button className="btn-items">Unboxings</button>
      </div>
      <div>
        <button className="btn-items">Music</button>
      </div>
      <div>
        <button className="btn-items">Sci-Fi</button>
      </div>
      <div>
        <button className="btn-items">Entertainment</button>
      </div>
      <div>
        <button className="btn-items">Recently Uploaded</button>
      </div>
      <div>
        <button className="btn-items">Latest Movies</button>
      </div>
      <div>
        <button className="btn-items">News</button>
      </div>
    </div>
  );
};
const ButtonContainer = () => {
  return (
    <div className="btn-container">
      <Button />
    </div>
  );
};
export default ButtonContainer;
