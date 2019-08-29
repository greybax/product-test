import React, { Component } from 'react';
import ProductsAPI from '../api/products';

import './Products.scss';

class Products extends Component {

  constructor(props) {
    super(props);

    this.state = { tiles: [] };
  }

  componentWillMount() {
    ProductsAPI.showFirst((tiles => {
      this.setState({ tiles: tiles });
    }));
  }

  render() {
    return (
      <div className="tiles">
        {
          this.state.tiles.map(p => (
            <div className="product" key={`${p.title}`}>
              <div className="image-block">
                <img src={p.image} />
              </div>
              <div className="title">
                {p.title}
              </div>
              <div className="price">{p.price}</div>
            </div>
          ))
        }
      </div>
    );
  }
}

export default Products;
