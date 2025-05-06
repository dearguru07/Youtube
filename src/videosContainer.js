import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Shimmer from "./shimmer";

const Video = (props) => {
  return (
    <div className="video">
      <img
        className="tube-img"
        src={props.data.snippet.thumbnails.high.url}
        alt="Utube-imgs"
      />
      <h5 className="title">{props.data.snippet.title}</h5>
      <h4 className="title">{props.data.snippet.channelTitle}</h4>
      <h6 className="title">{props.data.statistics.viewCount} Views</h6>
    </div>
  );
};

const VideosContainer = () => {
  const [videoArray, setvideoArray] = useState([]);

  async function youtube() {
    const data = await fetch(
      "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=AIzaSyBYih4RX3Cf7H617owkk2KJxxdbfX0_pD4"
    );
    const originalData = await data.json();
    // console.log(originalData.items);
    setvideoArray(originalData.items);
  }
  useEffect(() => {
    youtube();
  }, []);
  if (videoArray.length === 0) {
    return <Shimmer />;
  } else {
    return (
      <div className="v-container">
        {videoArray.map((x) => {
          return (
            <Link to={"/videos/" + x.id} key={x.id} className="lines">
              <Video data={x} />
            </Link>
          );
        })}
      </div>
    );
  }
};
export default VideosContainer;
