import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import './List.css'

const List = () => {

    const [langauges, setLanguages] = useState([])

    useEffect(() => {
        fetch("http://localhost:5000/programming")
            .then(res => res.json())
            .then(data => setLanguages(data))
    }, [])

    return (
        <>
            <div className="list">

                {langauges.map((language, index) => {
                    return (
                        <div className="list-item" key={index}>
                            <h2>{index+1}</h2>
                            <h2>{language.name}</h2>
                            <Link to={`/edit/${language.id}`}>Continue</Link>
                        </div>
                    )
                })}
            </div>
        </>
    );
}

export default List;