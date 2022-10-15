import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import {useNavigate} from "react-router-dom";
import {Link} from "react-router-dom";
import axios from "axios";

const OnePet = () => {

    const {id} = useParams()

    const [details, setDetails] = useState({})
    const [notFound, setNotFound] = useState(false)
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/pets/${id}`)
        .then((response) => {
            console.log(response)
            if(response.data.results) {
            setDetails(response.data.results)
            } else {
                setNotFound(true)
            }
        })
        .catch((error) => console.log(error))
    }, [])

    const deletePet = () => {
        axios.delete(`http://localhost:8000/api/pets/delete/${id}`)
        .then(response => {
            console.log(response)
            navigate("/")
        })
        .catch(error => console.log(error))
    }

    return(
        <div>
            <Link to={`/`} className="btn btn-secondary">Back to Home</Link>
            {
                notFound == true?
                <h3>Pet Not Found</h3>:
                <div>
                    <h3>Details About: {details.name}</h3>
                    <div className="card m-3 p-3">
                        <h3>Pet Type: {details.type}</h3>
                        <h3>Description: {details.description}</h3>
                        <h3>Skills: {details.skill_1}<br />{details.skill_2}<br/>{details.skill_3}</h3>
                    </div>
                    <button onClick={deletePet} className="btn btn-danger">Adopt {details.name}</button>
                </div>
            }
        </div>
    );
    
};

export default OnePet;