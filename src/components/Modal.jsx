import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

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
                <Modal.Title id="contained-modal-title-vcenter">
                    {props.title}
                </Modal.Title>
            </Modal.Header>
        
            <Modal.Body>
            
            <p>
              {props.text}
            </p>
            </Modal.Body>
          
            <Modal.Footer>
                <Button onClick={props.onHide}>X</Button>
            
            </Modal.Footer>
        </Modal>
      );

}   

export default ModalContainer;

