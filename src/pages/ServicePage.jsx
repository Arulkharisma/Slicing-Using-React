import { Col, Container, Row } from "react-bootstrap"

const ServicePage = () => {
  return (
    <div className="mt-5 pt-4 mb-5">
      <Container>
        <p className="title-service">SERVICES</p>
        <h2 className="fw-bold">🚀 .The Service For You</h2>
        <Row className="mt-5">
          <Col md="7" className="image-service">
            <img src="/service_left.png" alt="" />
          </Col>
          <Col className="description-service" md="5">
            <h2 className="mb-5"><span>Rent</span> your favorite book fairly easy on <span>Lidia!</span></h2>
            <p>Viewing, rent, and organize your favorite books has ever been easier. An integrated digital library rent  that’s simple to use, Lidia lets you spend less time  managing your work and more time actually doing it!</p>
            <p>Effortless rentals, personalized shelves—Lidia transforms book management, enhancing your reading experience~</p>
          </Col>
        </Row>
        <Row className="mt-5 pt-5 m-auto second-service">
           <Col md="5" className="description-service" >
            <h2 className="mb-5">Quick Book Rentals:<br /> <span>Dive</span> into <span>Reading</span> Instantly</h2>
            <p>Discover instant literary delight. Access a vast library,borrow your favorite reads, and dive into captivating stories within minutes. Reading made quick and easy, just a click away!</p>
            <p>Unlock a world of stories effortlessly. Browse genres, choose, rent in minutes. Seamlessly manage your reading adventures with our intuitive platform~</p>
          </Col>
          <Col md="7" className=" image-service">
            <img src="/service_right.png" align="right" alt="" />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default ServicePage