import React, { useEffect, useState } from "react";

export default function Temp() {
   const [location, setLocation] = useState([]);
   const [icon, setIcon] = useState([]);
   const [threeDays, setThreeDays] = useState([]);

   const roundNumbers = (number) => Math.round((number - 273.15) * 1.8 + 32);

   let unixConvert = (unix_timestamp) => {
      var date = new Date(unix_timestamp * 1000);
      var hours = date.getHours();
      var minutes = "0" + date.getMinutes();
      var seconds = "0" + date.getSeconds();
      var formattedTime =
         hours + ":" + minutes.substr(-2) + ":" + seconds.substr(-2);
      return formattedTime;
   };

   useEffect(() => {
      getLocation();
   }, []);
   //ask for location
   function getLocation() {
      if (navigator.geolocation) {
         navigator.geolocation.getCurrentPosition(showPosition);
      } else {
         console.log("couldnt set the position");
      }
   }
   //POST lat and long
   //set geolocation
   function showPosition(position) {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      const locationData = { lat, lon };
      const options = {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify(locationData),
      };
      fetch("/weather", options)
         .then((response) => response.json())
         .then((data) => {
            let weatherTemp = ((data.current.temp - 273.15) * 1.8 + 32).toFixed(
               0
            );
            let iconURL = data.current.weather[0].icon;
            let daysMap = data.daily;
            setLocation(weatherTemp);
            setIcon(iconURL);
            setThreeDays(data.daily);
            console.log(data);
         });
   }

   return (
      <div>
         <div className="temperature">
            <img
               src={`https://openweathermap.org/img/wn/${icon}.png`}
               alt=""
               srcSet=""
            />
            {location} °F{" "}
         </div>
      </div>
   );
}
