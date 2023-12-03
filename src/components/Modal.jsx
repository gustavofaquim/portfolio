import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/components/modal.sass';


const ModalContainer = (props) => {
    return (
        <Modal 
          {...props}
          size="lg"
          centered
          
          
        >
            <Modal.Header closeButton>
               
            </Modal.Header>
           
            <Modal.Body>

            <Container>
                <Row className='align-items-center'>
                    <Col lg={6}>
                        <div>
                            <img src={props.img} alt="" />
                        </div>
                    </Col>
                    <Col lg={6}>
                       <div className='texto'>
                        <h2> {props.title}</h2>
                        <p>{props.text}</p>
                       </div>
                        
                    </Col>
                </Row>
            </Container>

            </Modal.Body>
          
        
        </Modal>
      );

}   

export default ModalContainer;

