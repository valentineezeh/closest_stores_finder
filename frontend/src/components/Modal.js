import React from 'react';
import { Modal } from 'react-bootstrap';

export const ModalContainer = ({ show, onHide, nearestFiveStores }) => {

  const style = {
    modalBody: {
      border: "1px"
    },
    address: {
      fontSize: '14px'
    },
    time: {
      fontSize: '12px',
      fontWeight: 'bold'
    }
  }
  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
          <Modal.Title>
            5 Closest Stores
          </Modal.Title>
        </Modal.Header>
      <Modal.Body>
        {
          nearestFiveStores.length === 0 ? (
            <div className="text-center">
              <p>Loading....</p>
            </div>
          ) :
          nearestFiveStores?.map(store => (
        <div style={style.modalBody} key={store._id}>
          <h6>Name: {store?.addressName}</h6>
          <div className="mb-4">
            <span style={style.address}>Address: {`${store.street} ${store.city}`}</span> <br />
            <div style={style.time}>
              <span>Open Time: {store.todayOpen}</span> <br/>
              <span>Close Time: {store.todayClose}</span>
            </div>
          </div>
        </div>
          ))
        }
      </Modal.Body>
    </Modal>
  )
}