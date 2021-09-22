import React, {useState} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
const ShippingModal = ({shipping, setShipping, toggle2}) => {


    return (
        <div>
          <Modal isOpen={shipping} toggle={toggle2}>
            <ModalHeader>Modal title</ModalHeader>
       
            <ModalBody>
            mark as shipped
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={toggle2}>Do Something</Button>{' '}
              <Button color="secondary" onClick={toggle2}>Cancel</Button>
            </ModalFooter>
          </Modal>
        </div>
    )
}

export default ShippingModal
