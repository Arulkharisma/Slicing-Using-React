import { Col, Container, Row } from "react-bootstrap"
import { features } from "../data"

const FeaturePage = () => {
  return (
    <div>
      <Container className="feature-page">
        <p>FEATURES</p>
        <h2 className="fw-bold">🤔. What You Can Do?</h2>
        <Row>
          {features.map((feature) =>{
            return(
              <Col key={feature.id} className="text-center p-2 feature-content">
                <img src={feature.image} alt="icon-feature" width="250"/>
                <h4 className="fw-bold">{feature.title}</h4>
                <p className="pe-4 ps-4">{feature.description}</p>
              </Col>
            )
          })}
        </Row>
      </Container>
    </div>
  )
}

export default FeaturePage