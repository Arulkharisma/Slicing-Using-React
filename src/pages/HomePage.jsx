import { Container } from "react-bootstrap"
import { BsArrowRight } from "react-icons/bs";

const HomePage = () => {
  return (
    <div className="bg-hero w-100 vh-100">
      <Container>
        <section className="row align-items-center vh-100">
          <div className="col-md-6 left-hero">
            <h1 className="title-hero">Search & review <br />your <span>fav book</span> <br />effortlessly</h1>
            <p className="description-hero mb-4 mt-4">Embark on a literary journey like never before with our revolutionary library application! Introducing a seamless experience that transcends traditional boundaries, where  you can effortlessly search your favorite books.✨</p>
            <button>Start Now <BsArrowRight/> </button>
          </div>
          <div className="col-md-6">
            <img src="/Left.png" alt="hero-image" />
          </div>
        </section>
      </Container>
      <Container>
        <section className="">
          <h1>fdsffsdfdfsdfd</h1><br /><br /><br /><br /><br /><br /><br />
        </section>
      </Container>
    </div>
  )
}

export default HomePage