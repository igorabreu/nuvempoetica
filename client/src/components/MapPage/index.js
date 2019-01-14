import React, { Component } from 'react'
import Footer from '../Footer'
import HeaderHome from '../HeaderHome'
import MenuBar from '../MenuBar'
import './style.css'

class MapPage extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.map = new window.google.maps.Map(document.getElementById('map'), {
        center: { lat: -14.1666006, lng: -59.2697109 },
        zoom: 4,
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
