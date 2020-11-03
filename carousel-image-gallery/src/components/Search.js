import React from 'react';
import {useState} from 'react';

function Search() {
    const [query, setQuery] = useState("");
    
    return (
        <div>
            <div className="input-wrapper">
                <input 
                    type="text" 
                    placeholder="Search for an image"
                    value={query}
                    onChange={e => 
                        setQuery(e.target.value)}
                />
            </div>
        </div>
    )
}

export default Search
