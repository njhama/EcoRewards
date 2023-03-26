function getLocation() {
    const successCallback = (position) => {
        console.log(position);
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        const zoom = '15z'
        const url = `https://www.google.com/maps/search/recycling+center/@${latitude},${longitude},${zoom}`;

        //window.location.href = url;
        window.open(url, '_blank');
      };
      
      const errorCallback = (error) => {
        console.log(error);
      };
      
      navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
}


