const Carousel = () => {
  return (
   <div id="carouselExample" className="carousel slide">
  <div className="carousel-inner">
    <div className="carousel-item active text-center ">
      <img  src="./src/assets/musical.jpg" className="d-block mt-3 mx-auto  w-25" alt="..." />
    </div>
    <div className="carousel-item text-center ">
      <img src="./src/assets/musica2.jpg" className="d-block mt-3  mx-auto w-25" alt="..." />
    </div>
    <div className="carousel-item text-center ">
      <img src="./src/assets/musica3.jpg" className="d-block mt-3 mx-auto w-25" alt="..." />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>

  )
}
export default Carousel