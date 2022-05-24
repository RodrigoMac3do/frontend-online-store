import React from 'react';
import { Link } from 'react-router-dom';
import { getProductsFromCategoryAndQuery } from '../services/api';
import ProductCard from '../Components/ProductCard';

class Home extends React.Component {
  state ={
    search: '',
    category: '',
    searchResults: [],
    hasSearched: false,
  }

  handleChange = (event) => {
    this.setState({
      search: event.target.value,
    });
  }

  handleClick = async () => {
    const { search, category } = this.state;
    const fetchProduct = await getProductsFromCategoryAndQuery(category, search);
    this.setState({
      searchResults: fetchProduct.results,
      hasSearched: true,
    });
  }

  conditionalRender = () => {
    const { searchResults, hasSearched } = this.state;
    if (hasSearched) {
      if (searchResults.length) {
        return (
          <ol>
            {searchResults.map((result) => (
              <ProductCard
                result={ result }
                key={ result.id }
              />
            ))}
          </ol>);
      } return <p>Nenhum produto foi encontrado</p>;
    }
    return (
      <p data-testid="home-initial-message">
        Digite algum termo de pesquisa ou escolha uma categoria.
      </p>);
  }

  render() {
    const { search } = this.state;
    return (
      <>
        <form>
          <label htmlFor="busca">
            <input
              onChange={ this.handleChange }
              value={ search }
              data-testid="query-input"
              type="text"
              id="busca"
            />
            <button
              type="button"
              data-testid="query-button"
              onClick={ this.handleClick }
            >
              Buscar
            </button>
          </label>
        </form>
        <Link
          to="/shopping-cart"
          data-testid="shopping-cart-button"
        >
          Carrinho de Compras
        </Link>
        {
          this.conditionalRender()
        }
      </>
    );
  }
}
// alteração para commit
export default Home;
