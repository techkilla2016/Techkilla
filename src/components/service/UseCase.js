import { Col } from "react-bootstrap"

const UseCase = ({ img, title }) => {
    return <Col xxl={3} xl={3} lg={4} md={6} sm={6} xm={6} className="cartOut">
        <div className="cartBox">
            <div className="boxImg">
                <img src={img} alt="" />
            </div>
            <div className="titleBox">
                {title}
            </div>
        </div>
    </Col>
}
export default UseCase