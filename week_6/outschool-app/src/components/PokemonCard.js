import React from 'react'
import styles from './PokemonCard.module.css';
import Image from 'next/image';

export const PokemonCard = ({imageURL, pokemonName, type, favoriteMove, weight}) => {
  return (
    <div className={styles.cardWrapper}>
        <div className={styles.employeeImageWrapper}>
            <img className={styles.employeeImage} src={imageURL} />
        </div>
        <div>
            <h2>
                {pokemonName}
            </h2>
            <h3>{type}</h3>
        </div>
        <p>Move: {favoriteMove}</p>
        <p>Weight: {weight}</p>
    </div>
  )
}
