import React, {useState} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
const EtatModal = ({etat, setEtat, toggle3}) => {
const productEtat = true

    return (
        <div>
          <Modal isOpen={etat} toggle={toggle3}>
            <ModalHeader>Modal title</ModalHeader>
       
            <ModalBody>
            <div className="d-flex align-items-center justify-content-between">
            {
                productEtat === true ? (
                    <>
                    Mettre votre produit en mode Désactiver
                    <button className="btn btn-danger">Désactiver</button>
                    </>

                ) : (
                    <>
                    Mettre votre produit en mode Active
                    <button className="btn btn-primary">Activer</button>
                    </>
                )
            }
            </div>
            </ModalBody>
            <ModalFooter>
              <Button color="secondary" onClick={toggle3}>Cancel</Button>
            </ModalFooter>
          </Modal>
        </div>
    )
}

export default EtatModal
