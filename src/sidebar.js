const SideBar=()=>{
    return <div className="sidebar">
      <div>
        <button className="side-btn"><span><i class="bi bi-house-door side-ico"></i></span>Home</button>
        <button className="side-btn"><span><i class="bi bi-play-btn side-ico"></i></span>Shorts</button>
        <button className="side-btn"><span><i class="bi bi-collection-play side-ico"></i></span>Subscription</button>
        <button className="side-btn"><span><i class="bi bi-person-square side-ico"></i></span>Your Channels</button>
        <button className="side-btn"><span><i class="bi bi-cloud-arrow-down side-ico"></i></span>Downloads</button>
        <button className="side-btn"><span><i class="bi bi-clock-history side-ico"></i></span>History</button>
        <button className="side-btn"><span><i class="bi bi-scissors side-ico"></i></span>Your clips</button>
      </div>
    </div>
  }
  export default SideBar;