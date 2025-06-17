import styles from './styles.module.scss';
import Select from 'react-select';

const colourOptions = [
    { value: 1, label: 'Culto do Jovens' },
    { value: 2, label: 'Culto das Crianças' },
    { value: 3, label: 'Culto da Irmãs' },
    { value: 4, label: 'Culto da Melhor Idade' },
];
export default function PlayListHeader() {
    return (
        <header className={styles.containerHeader}>
                    <h2>Play List</h2>

                    <div className={styles.containerSelect}>
                        <Select
                            closeMenuOnSelect={false}
                            defaultValue={[colourOptions[0], colourOptions[1]]}
                            isMulti
                            options={colourOptions}
                            // styles={colourStyles}
                        />
                    </div>
            </header>
    );
}