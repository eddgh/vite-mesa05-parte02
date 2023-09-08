/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { useState } from 'react'

import Cart from './components/cart';
import FormCart from './components/formcart'
import styles from './App.module.css';

function App() {

  const [itemList, setItemList] = useState([]);
  const [error, setError] = useState(false);

  const handleItemSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const { item } = Object.fromEntries(formData);

    if (item.length >= 3) {
      setItemList([...itemList, item]);
      setError('');
      document.querySelector("#item").value = '';
    } else
      setError(!error);
    return
  }

  const resetError = () => {
    document.querySelector("#error").innerHTML = '';
  }


  const removeItemFromList = (itemToBeRemoved) => {
    const newList = itemList.filter((item) => {
      return itemToBeRemoved !== item
    });
    setItemList(newList);
  }

  return (
    <main className={styles.main}>
      <FormCart handleSubmit={handleItemSubmit} />
  
      <section id="card" className={styles.cardSection}>
      {error && <small className={styles.error}>Digite pelo menos 3 caracteres</small>}
        <h4>Itens Adicionados :</h4>

        <div className={styles.cardContainer}>
          {itemList && (
            itemList.map((item, index) => {
              return (
                <Cart
                  key={index}
                  index={index + 1}
                  item={item}
                  removeItemFromList={() => removeItemFromList(item)}
                />
              )
            })
          )

          }

        </div>

      </section>

    </main>
  )
}


export default App