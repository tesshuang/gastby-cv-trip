import React from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'

export default class MyMap extends React.Component {
  state = {
    locations: [
      {
        city: "vancouver",
        lat: 49.283,
        lng: -123.121,
      },
      {
        city: "kamloop",
        lat: 50.675,
        lng: -120.327,
      },
      {
        city: "jasper",
        lat: 52.874,
        lng: -118.081,
      },
      {
        city: "lakeLouise",
        lat: 51.425,
        lng: -116.177,
      },
      {
        city: "banff",
        lat: 51.178,
        lng: -115.57,
      },
      {
        city: "calgary",
        lat: 51.044,
        lng: -114.071,
      },
    ],
    zoom: 6,
  }

  initMarker = ref => {
    if (ref) {
      ref.leafletElement.openPopup()
    }
  }
  render() {
    // const { options } = this.props
    const centerlat = (Math.max(...this.state.locations.map(e => e.lat)) + Math.min(...this.state.locations.map(e => e.lat)))/2 ;
    const centerlng = (Math.max(...this.state.locations.map(e => e.lng)) + Math.min(...this.state.locations.map(e => e.lng)))/2;
    const postion = [centerlat, centerlng];

    if (typeof window !== 'undefined') {
      console.log(this.state.locations.map(e => e.lat));
      return (
        <Map center={postion} zoom={this.state.zoom} style={{ height: '360px'}}>
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {this.state.locations.map(location => (
            <Marker position={[location.lat, location.lng]} key={location.city} ref={this.initMarker}>
              <Popup autoClose={false}>
                {location.city}
              </Popup>
            </Marker>
          ))}
        </Map>
      )
    }
    return null
  }
}
