import React, {useState, useEffect} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

const Pet = (props) => {
    
    const [pets, setPets] = useState([])

    useEffect(() => {
        axios.get("http://localhost:8000/api/pets")
            .then((response) => {
                console.log("response: ", response);
                setPets(response.data.results);
            })
            .catch(error => console.log(error))
    }, [props.FormSubmitted])

    return(
        <div>
            <Link to={`/pets/new`} className="btn btn-primary">Add a pet to the shelter</Link>
            {
                pets.map((pet, index) => {
                    return(
                        <div key={index}>
                            <div key={pet._id} className="card text-bg-light m-3 p-3">
                                <h2>{pet.name}</h2>
                                <p>Pet Type: {pet.type}</p>
                                <p>Pet Description: {pet.description}</p>
                                <Link to={`/pets/${pet._id}`} className="btn btn-success btn-sm mx-5">Details</Link>
                                <Link to={`/pets/edit/${pet._id}`} className="btn btn-secondary btn-sm mx-5 mt-2">Edit</Link>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Pet;