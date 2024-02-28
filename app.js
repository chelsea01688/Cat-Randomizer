const headers = new Headers({
    "Content-Type": "application/json",
    "x-api-key": "live_lzB2PseQzQpJnkDFWplGRkfIrAUxH99SGAbAGBnbQfiQ2XK06H5FC7Clx59cFIE3"
  });
  
  var requestOptions = {
    method: 'GET',
    headers: headers,
    redirect: 'follow'
  };
  
  fetch("https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=10", requestOptions)
    .then(response => response.json())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));        