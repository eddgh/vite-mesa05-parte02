/* eslint-disable react/prop-types */
import { Input } from './components/Input';
import styles from './formCart.module.css';

export default function FormCart({ handleSubmit }) {
    return (
        <form className={styles.FormContainer} onSubmit={handleSubmit}>
            <h3>Adicione um item</h3>
            <div className={styles.item}>
                <Input
                    type="text" name="item" id="item"
                    placeholder="Digite o nome de um item"
                />
                <button type="submit">⬇</button>
            </div>           

        </form>
    )
}