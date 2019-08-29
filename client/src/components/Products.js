import React, { Component } from 'react';
import ProductsAPI from '../api/products';

import './Products.scss';

class Products extends Component {

  constructor(props) {
    super(props);

    this.state = {
      currentPage: 1,
      size: 8,
      tiles: []
    };

    this.handleLoadMore = this.handleLoadMore.bind(this);
  }

  componentWillMount() {
    ProductsAPI.show(this.state.currentPage, this.state.size, (tiles => {
      this.setState({ tiles: tiles });
    }));
  }

  handleLoadMore(event) {
    let page = this.state.currentPage + 1;

    ProductsAPI.show(page, this.state.size, (tiles => {
      let prevTiles = this.state.tiles;
      let allTiles = prevTiles.concat(tiles);
      this.setState({
        tiles: allTiles,
        currentPage: page
      });
    }));
  }

  render() {
    return (
      <div className="container">
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

        <div className="commands">
          <button className="load-more" onClick={this.handleLoadMore}> More Button </button>
        </div>
      </div>
    );
  }
}

export default Products;
