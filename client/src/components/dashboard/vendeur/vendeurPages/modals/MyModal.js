import React, {useState} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
const MyModal = ({modal, setModal, toggle, id}) => {

const test = [
  {id:1, name:'ahmed'},
  {id:2, name:'ali'},
  {id:3, name:'saad'},
  {id:4, name:'badr'},
  ]
    return (
        <div>
          <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader>Modal title</ModalHeader>
       
            <ModalBody>
            {
              test.length && test.map((name)=>name.id === id && (<h1>{name.name}</h1>))
            }
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
              <Button color="secondary" onClick={toggle}>Cancel</Button>
            </ModalFooter>
          </Modal>
        </div>
    )
}

export default MyModal
