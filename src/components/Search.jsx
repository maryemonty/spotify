import { useState } from "react";
import SearchCards from "./SearchCards";

const Search = () => {
    const [query, setQuery] = useState('')

    const handleChange = (e) => {
        setQuery(e.target.value)
    }

    return (
        <div className="p-4 m-2">
            <div className='d-flex ms-4'>
                    <input className='mt-3 input' 
                    type='text' 
                    placeholder='Search'
                    value={query}
                    onChange={handleChange}
                    />
                </div>
            <SearchCards artist= {query}/>
        </div>
    );

}
export default Search