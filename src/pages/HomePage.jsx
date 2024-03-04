import { Container } from "react-bootstrap"
import { BsArrowRight } from "react-icons/bs";
import FeaturePage from "./FeaturePage";

const HomePage = () => {
  return (
    <>
      <div className="bg-hero">
        <Container>
          <section className="row section-hero w-100 vh-100 row align-items-center">
            <div className="col-md-6 left-hero">
              <h1 className="title-hero">Search & review <br />your <span>fav book</span> <br />effortlessly</h1>
              <p className="description-hero mb-4 mt-4">Embark on a literary journey like never before with our revolutionary library application! Introducing a seamless experience that transcends traditional boundaries, where  you can effortlessly search your favorite books.✨</p>
              <button>Start Now <BsArrowRight/> </button>
            </div>
            <div className="col-md-6">
              <img className="image-hero" src="/Left.png" alt="hero-image" width="550px"/>
            </div>
          </section>
        </Container>
      </div>
      <FeaturePage />
    </>
  )
}

export default HomePage