import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function CommonModal(props) {
    //const [show, setShow] = useState(show);
    const {handleClose,show, size} = props
  
    return (
      <>
        <Modal className='custom-modal' size={size} show={show} onHide={handleClose}>
          {/* <Modal.Header closeButton>
            <Modal.Title>{title}</Modal.Title>
          </Modal.Header> */}
          <Modal.Body>{props.children}</Modal.Body>
          {/* <Modal.Footer>
            <Button variant="primary" onClick={handleClose}>
              Save 
            </Button>
          </Modal.Footer> */}
        </Modal>
      </>
    );
  }
  
  export default CommonModal;
  export {CommonModal}