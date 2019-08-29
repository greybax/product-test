const ProductsAPI = {

  show: function (page, size, cb) {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", `http://localhost:8000/api/products?page=${page}&size=${size}`);
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
