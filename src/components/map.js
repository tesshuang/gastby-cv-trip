import React from 'react'
import { Map, TileLayer } from 'react-leaflet'

export default class MyMap extends React.Component {
  state = {
    lat: 51.505,
    lng: -0.09,
    zoom: 13,
  }
  render() {
    // const { options } = this.props
    const position = [this.state.lat, this.state.lng];

    if (typeof window !== 'undefined') {
      return (
        <Map center={position} zoom={this.state.zoom}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        </Map>
      )
    }
    return null
  }
}
