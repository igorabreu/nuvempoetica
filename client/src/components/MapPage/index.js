import React, { Component } from 'react'
import Footer from '../Footer'
import HeaderHome from '../HeaderHome'
import MenuBar from '../MenuBar'
import dataMarkers from './markers.js'
import mapStyles from './mapStyles.js'
import './style.css'

class MapPage extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.map = new window.google.maps.Map(document.getElementById('map'), {
        center: { lat: -14.1666006, lng: -59.2697109 },
        zoom: 4,
        styles: mapStyles,
      })
      dataMarkers.map((marker, index) => {
        this.newMarker = new window.google.maps.Marker({
          position: { lat: marker.lat, lng: marker.long },
          map: this.map,
          title: marker.name,
          index,
        })
        this.newMarker.addListener('click', e => {
          this.infowindow = new window.google.maps.InfoWindow({
            content: marker.name,
          })
          this.infowindow.setPosition(e.latLng)
          this.infowindow.open(this.map)
        })
      })
    }, 1000)
  }
  render() {
    return (
      <div className="MapPage">
        <HeaderHome />
        <MenuBar selected={'map'} />
        <div id="map" className="MapComponent" />
        <Footer />
      </div>
    )
  }
}

export default MapPage
