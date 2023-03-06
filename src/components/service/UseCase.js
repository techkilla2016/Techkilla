import { Col } from "react-bootstrap"

const UseCase = ({ img, title }) => {
<<<<<<< HEAD
    return <Col xxl={3} xl={3} lg={4} md={6} sm={6} xm={6} className="cartOut">
=======
    return <Col xxl={3} xl={3} lg={3} md={6} sm={12} className="cartOut">
>>>>>>> 187a4d6181c551b274dbe0f9df58daf6f22551ef
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