// import React from 'react'
import GoogleMapReact from 'google-map-react'

// const myKey = "AIzaSyDDXy4AbKqic_14dzBrN--1EPeX_VkxC50"
// const location = 6.563271823867139, 3.3642566465778665

// const location = {
//     // address: '1600 Amphitheatre Parkway, Mountain View, california.',
//     lat: 37.42216 ,
//     lng: 122.08427,
// }

// const FooterMap = () => {
//     return (
//         <div className="footerMap">
//             <h1>Google Map</h1>
//             <div className="footerMap_map">
//                 <GoogleMapReact
//                     bootstrapURLKeys={{ key: myKey }}
//                     // defaultCenter={location}
//                     Zoom={9}
//                     center={ [59.938043, 30.337157]}
//                     greatPlaceCoords= {{lat: '59', lng: '30'}}
//                 />


//             </div>
//         </div>
//     )
// }

// export default FooterMap


import React from 'react'



// const AnyReactComponent = ({ text }) => (
//     <div style={{
//         color: 'white',
//         background: 'grey',
//         padding: '15px 10px',
//         display: 'inline-flex',
//         textAlign: 'center',
//         alignItems: 'center',
//         justifyContent: 'center',
//         borderRadius: '100%',
//         transform: 'translate(-50%, -50%)'
//     }}>
//         {text}
//     </div>
// );

class FooterMap extends React.Component {
    static defaultProps = {
        center: { lat: 59.95, lng: 30.33 },
        zoom: 11
    };

    render() {
        return (
            <div className='footerMap'>
                <GoogleMapReact
                    defaultCenter={this.props.center}
                    // key={{key:"AIzaSyDDXy4AbKqic_14dzBrN--1EPeX_VkxC50"}}
                    defaultZoom={10}
                    
                >
                    {/* <AnyReactComponent
                        lat={59.955413}
                        lng={30.337844}
                        text={'Kreyser Avrora'}
                    /> */}
                </GoogleMapReact>
            </div>
        );
    }
}

export default FooterMap




