/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import styles from './cart.module.css'
export default function Cart({ index, item, removeItemFromList }) {

    return (
        <div className={styles.itemList}>
            <p style={
                item.length <= 22 ? { 'line-height': '0.1rem' } : { 'line-height': '1.5rem' }
            }>
                O item <b>{index + 1 < 11 ? '0' : ''}{index}</b> - <span className={styles.item}>{item}</span> foi adicionado à lista!
            </p>
            <button
                className={styles.button}
                title='remover item'
                onClick={removeItemFromList}>❌
            </button>
        </div>


    )
}