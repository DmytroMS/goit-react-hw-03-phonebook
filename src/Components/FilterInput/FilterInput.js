import shortid from "shortid";
import PropTypes from 'prop-types';
import f from './Filter.module.css';

export default function Filter({ value, onChange }) {
    const filteredID = shortid.generate();
    return (
        <>
            <label htmlFor={filteredID}>Find contacts by name
                <input type="text"
                    id={filteredID}
                    value={value}
                    onChange={onChange}
                    className={f.filter__input}
                
                />
            
            </label>
        </>
    );
};

Filter.propTypes = {
    value: PropTypes.string,
    onchange: PropTypes.func,
}