"use client"
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
import { useEffect, useState } from "react";

const LeafletMap = () => {
    const [isClient, setIsClient] = useState<boolean>(false);

    useEffect(() => {
      setIsClient(true);
    }, []);
  
    if (!isClient) return null;

    return (
        <MapContainer
            center={[53.55112792022747, -113.61913572698462]}
            zoom={19}
            scrollWheelZoom={false}
            className="w-full h-96 z-0 relative max-636:w-[calc(100vw-4rem)]"
            dragging={false}
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[53.55112792022747, -113.61913572698462]} draggable={false}>
            </Marker>
        </MapContainer>
    )
}

export default LeafletMap