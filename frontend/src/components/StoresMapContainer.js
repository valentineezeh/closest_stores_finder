import React, { useState } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react'
import { ModalContainer } from './Modal';
import { nearByStores } from '../services'

const MapContainer = (props) => {
const mapStyles = {
  position: 'relative',
  width: '100%',
  height: '100%',
  overflow: 'scroll'
}
const containerStyle = {
  position: 'relative',
  width: '100%',
  height: '100vh',
  overflow: 'scroll'
}

const [showModal, setShowModal] = useState(false);
const [closestStore, setClosestStore] = useState([])

const onMarkerClick = async (store) => {
  // when marker is click set showModal to true
  setShowModal(true);
  const payload = {
    uuid: store.uuid,
    longitude: store.longitude,
    latitude: store.latitude
  }

  // call function that fetches nearby stores
  const resp = await nearByStores(payload);
  setClosestStore(resp)
}

// function to hide modal and return the state to the initial state
const onHideModal = () => {
  setShowModal(false)
  setClosestStore([])
}


  return (
    <>
      <Map
        google={props.google}
        zoom={12}
        initialCenter={{ lat: 52.1326, lng: 5.2913 }}
        containerStyle={containerStyle}
        style={mapStyles}
      >
        {
          props.stores?.map(store => (
            <Marker
                key={store.uuid}
                position={{ lat: Number(store?.latitude), lng: Number(store?.longitude) }}
                onClick={() => onMarkerClick(store)}
    />
          ))
        }
        { showModal && <ModalContainer
            show={showModal}
            nearestFiveStores={closestStore}
            onHide={onHideModal}
    />}
      </Map>
    </>
  )
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_MAP_API_KEY
})(MapContainer)