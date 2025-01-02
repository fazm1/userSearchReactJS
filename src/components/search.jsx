import { useState } from "react";
import "./search.css"
function Search(props) {
    const { search } = props;
    const [email, setEmail]  = useState('');
    const handleChange = (e) =>{
        setEmail(e.target.value);
    }
    const handleClear = () =>{
        search(setEmail(''));
    }
    return (<>
        <input className = "searchBar" placeholder="Search by email" value={email} onChange={handleChange}/>
        <button className = "searchButton" onClick={()=>search(email)}>Search</button>
        <button className = "clearButton" onClick={()=>handleClear()} style={email=== '' ? {display:"none"} : {}}>Clear</button>
    </>  );
}

export default Search;