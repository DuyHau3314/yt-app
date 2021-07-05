import React, { useState } from 'react';


const Searchbar = ({onFormSubmit}) => {
    const [term, setTerm] = useState('');

    const onInputChange = (e) => {
       setTerm(e.target.value);
    };  

    const onSubmit = (e) => {
        e.preventDefault();
        onFormSubmit(term);
    };

    
    return (
        <div className="search-bar ui segment">
            <form onSubmit={onSubmit} className="ui form">
                <div className="field">
                    <label>Search For A Video</label>
                    <input onChange={onInputChange} type="text" value={term} />

                </div>
            </form>
        </div>
    )
}
 
export default Searchbar;

