
import React,{ Component } from 'react';
import GoogleMapReact from 'google-map-react';
 
const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
class MapContainer extends Component {
  static defaultProps = {
    center: {
      lat: 37.778519,
      lng: -122.405640
    },
    zoom: 11
  };
 
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyAFEc0KfOi_pcpVeU34v2tTzxN7i6BkxMk" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={37.778519}
            lng={-122.405640}
            text="Clinica Aviacion"
          />
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default MapContainer;