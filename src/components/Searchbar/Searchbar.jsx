import React, { Component } from 'react';

import styles from './Searchbar.module.css';

class Searchbar extends Component {
  state = { query: '' };

  // ---------------------------------------  handleChange
  handleChange = e => {
    this.setState({ query: e.currentTarget.value });
  };

  // ---------------------------------------  handleSubmit
  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.query);
    this.reset();
  };

  reset = () => {
    this.setState({ query: '' });
  };

  render() {
    return (
      <header className={styles.Searchbar}>
        <form onSubmit={this.handleSubmit} className={styles.SearchForm}>
          <button type="submit" className={styles.SearchFormButton}>
            <span className={styles.SearchFormButtonLabel}>Search</span>
          </button>

          <input
            value={this.state.query}
            onChange={this.handleChange}
            className={styles.SearchFormInput}
            type="text"
            // autocomplete="off"
            // autofocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
