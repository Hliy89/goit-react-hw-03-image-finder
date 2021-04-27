import React from 'react';

import styles from './Button.module.css';

const Button = ({ fetchGallery }) => {
  return (
    <button type="button" className={styles.Button} onClick={fetchGallery}>
      Load more...
    </button>
  );
};

export default Button;
