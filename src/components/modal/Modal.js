import React, {Component} from "react";
import "./Modal.css";

import {MapContainer, TileLayer, useMap, Marker} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import {Link} from "react-router-dom";

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;

class Modal extends Component {
  render() {
    return (
      <div>
        {this.props.isVisible && this.props.parentState.currentUser ? (
          <>
            <div className='backdrop' onClick={this.props.hide}></div>
            <div className='modal'>
              <MapContainer
                center={this.props.parentState.currentUser.address.geo}
                zoom={2}
                scrollWheelZoom={false}>
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                />
                <Marker
                  icon={DefaultIcon}
                  position={
                    this.props.parentState.currentUser.address.geo
                  }></Marker>
              </MapContainer>
              <Link to={`/profile/${this.props.parentState.currentUser.id}`}>
                <button className='btn'>Read More</button>
              </Link>
            </div>
          </>
        ) : null}
      </div>
    );
  }
}

export default Modal;
