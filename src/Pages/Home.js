import React from 'react';
import { Link } from 'react-router-dom';
import Categories from '../components/Categories';

class Home extends React.Component {
  render() {
    return (
      <>
        <Categories />
        <form>
          <label htmlFor="busca">
            <input type="text" id="busca" />
          </label>
        </form>
        <Link
          to="/shopping-cart"
          data-testid="shopping-cart-button"
        >
          Carrinho de Compras
        </Link>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      </>
    );
  }
}
// alteração para commit
export default Home;
