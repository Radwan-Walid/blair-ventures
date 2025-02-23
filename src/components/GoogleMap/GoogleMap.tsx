"use client"
import {APIProvider, Map} from "@vis.gl/react-google-maps";

const GoogleMap = () => {
  return (
    <APIProvider apiKey={""}>
        <Map
            defaultCenter={{lat: 53.55120756822512, lng: -113.61912500208736}}
            defaultZoom={3}
            gestureHandling="greedy"
            disableDefaultUI={true}
            className="w-96 h-96 flex-1"
        />
    </APIProvider>
  )
}

export default GoogleMap