import styles from './styles.module.scss';

export default function selectEvent({

}) {
    return (
        <div className={styles.selectGroup}>
            <label className="input-label">
                Selecione um evento
                <span className="required">*</span>
            </label>
            <select className="select-event-dropdown">
                <option value="">Selecione um evento</option>
                <option value="evento1">Evento 1</option>
                <option value="evento2">Evento 2</option>
                <option value="evento3">Evento 3</option>
            </select>
        </div>
    );
}