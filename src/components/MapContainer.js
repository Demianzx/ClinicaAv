import {Map,  Marker, GoogleApiWrapper} from 'google-maps-react';
import React,{ Component } from 'react';
 
export class MapContainer extends Component {
  render() {
    const style = {
      width: '50%',
      height: '50%'
    }
    return (
      <div className="ml-5">
        <Map google={this.props.google}
        style={style}
        initialCenter={{
          lat: 37.778519,
          lng: -122.405640
        }}
        zoom={15}>

        <Marker
        title={'The marker`s title will appear as a tooltip.'}
        name={'SOMA'}
        position={{lat: 37.778519, lng: -122.405640}} />

        
      </Map>
      </div>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: ('AIzaSyAFEc0KfOi_pcpVeU34v2tTzxN7i6BkxMk')
})(MapContainer)