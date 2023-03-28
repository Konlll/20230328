import './Forms.css'
import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import Alert from './Alert';

const NewLanguage = ({ method }) => {

    let { id } = useParams()
    if (id === undefined) {
        id = -1
    }

    const navigate = useNavigate()

    const [name, setName] = useState("")
    const [year, setYear] = useState("")
    const [githut, setGithut] = useState("")
    const [pypl, setPypl] = useState("")
    const [tiobe, setTiobe] = useState("")
    const [error, setError] = useState()
    const [errorMessage, setErrorMessage] = useState("")

    if (id != -1) {
        console.log("asd")
        fetch(`http://localhost:5000/programming/${id}`)
            .then(res => res.json())
            .then(data => {
                setName(data[0].name)
                setYear(data[0].released_year)
                setGithut(data[0].githut_rank)
                setPypl(data[0].pypl_rank)
                setTiobe(data[0].tiobe_rank)
            })
    }

    const languageSubmit = async () => {
        if (!name || !year) {
            setError(true)
            setErrorMessage("Please fill the name and the relesead year fields correctly!")
        } else {
            setError(false)
            const language = { id, name, year, githut, pypl, tiobe, error }
            fetch("http://localhost:5000/programming", {
                method: method,
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(language)
            }).then(res => {
                if (res.status === 422) {
                    setError(true)
                    setErrorMessage("The given programming language is already exists.")
                } else {
                    navigate('/')
                }
            })
        }
    }

    const deleteLanguage = async () => {
        fetch("http://localhost:5000/programming", {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ id: id })
        }).then(() => {
            navigate('/')
        })
    }

    return (
        <>
            <div className="form">
                {error && <Alert message={errorMessage} />}
                <div className="form-item">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" value={name} onChange={e => setName(e.target.value)} />
                </div>
                <div className="form-item">
                    <label htmlFor="year">Released year</label>
                    <input type="number" value={year} min="1900" max="2023" id="year" onChange={e => setYear(e.target.value)} />
                </div>
                <div className="form-item">
                    <label htmlFor="githut">Githut rank</label>
                    <input type="number" value={githut} min="0" id="githut" onChange={e => setGithut(e.target.value)} />
                </div>
                <div className="form-item">
                    <label htmlFor="pypl">Pypl rank</label>
                    <input type="number" value={pypl} min="0" id="pypl" onChange={e => setPypl(e.target.value)} />
                </div>
                <div className="form-item">
                    <label htmlFor="tiobe">Tiobe rank</label>
                    <input type="number" value={tiobe} min="0" id="tiobe" onChange={e => setTiobe(e.target.value)} />
                </div>
                <div className="form-item">
                    <button onClick={languageSubmit}>Submit</button>
                    {method === "PUT" && <button onClick={deleteLanguage}>Delete</button>}
                </div>
            </div>
        </>
    );
}

export default NewLanguage;