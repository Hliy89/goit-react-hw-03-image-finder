import React from 'react';

import styles from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ image, onClick }) => {
  const { webformatURL, tags, largeImageURL } = image;
  return (
    <>
      <li className={styles.ImageGalleryItem}>
        <img
          src={webformatURL}
          alt={tags}
          className={styles.ImageGalleryItemImage}
          onClick={() => onClick(largeImageURL)}
        />
      </li>
    </>
  );
};

export default ImageGalleryItem;
