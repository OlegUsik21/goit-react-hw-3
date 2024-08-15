import css from './SearchBox.module.css'

const SearchBox = ({ value, onChange }) => {
    return (
        <div className={css.box}>
            <p className={css.boxText}>Find contact by name</p>
            <label className={css.boxLabel}>
                <input className={css.boxInput} type="text" value={value} onChange={onChange} />
            </label>
        </div>
    )
};

export default SearchBox;