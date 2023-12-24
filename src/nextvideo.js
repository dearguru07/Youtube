import { useParams } from "react-router-dom"

const NextVideo=(source)=>{
    const {id}=useParams()
    const emdedUrl="https://www.youtube.com/embed/"
    return <div>
    <iframe className="next-video" src={emdedUrl+id} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
    
 }
export default NextVideo;