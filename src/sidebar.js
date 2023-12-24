const SideBar=()=>{
    return <div className="sidebar">
      <div>
        <button className="side-btn"><span className="side-ico"><i class="bi bi-house-door"></i></span>Home</button>
        <button className="side-btn"><span className="side-ico"><i class="bi bi-play-btn"></i></span>Shorts</button>
        <button className="side-btn"><span className="side-ico"><i class="bi bi-collection-play"></i></span>Subscription</button>
        <button className="side-btn"><span className="side-ico"><i class="bi bi-person-square"></i></span>Your Channels</button>
        <button className="side-btn"><span className="side-ico"><i class="bi bi-clock-history"></i></span>History</button>
        <button className="side-btn"><span className="side-ico"><i class="bi bi-scissors"></i></span>Your clips</button>
      </div>
    </div>
  }
  export default SideBar;