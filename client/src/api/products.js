const ProductsAPI = {

  showFirst: function (cb) {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "http://localhost:8000/api/products?page=1&size=8");
    xhr.setRequestHeader('Content-Type', 'application/json');

    xhr.onload = () => {
      // get all tiles
      if (typeof cb === 'function') {
        cb(JSON.parse(xhr.response).products);
      }
    };

    xhr.send();
  }
}

export default ProductsAPI
