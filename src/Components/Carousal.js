import React from 'react';

const Carousal = () => {
    return <div>
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
        <img src="https://plus.unsplash.com/premium_photo-1683910767532-3a25b821f7ae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D" className="d-block w-100" alt="1"/>
    </div>
    <div className="carousel-item">
      <img src="https://images.unsplash.com/file-1715652217532-464736461acbimage?w=416&dpr=2&auto=format&fit=crop&q=60" className="d-block w-100" alt="2"/>
    </div>
    <div className="carousel-item">
      <img src="https://images.unsplash.com/photo-1709884732294-ac35fa831eb4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGZyZWUlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D" className="d-block w-100" alt="3"/>
    </div>
  </div>
</div>
    </div>;
}



export default Carousal;