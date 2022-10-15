import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import {useNavigate} from "react-router-dom";
import {Link} from "react-router-dom";
import axios from "axios";

const EditForm = (props) => {

    const {id} = useParams()
    
    const [details, setDetails] = useState({})
    const [FormErrors, setFormErrors] = useState({});
    const navigate = useNavigate();


    useEffect(() => {
        axios.get(`http://localhost:8000/api/pets/${id}`)
        .then((response) => {
            console.log(response)
            if(response.data.results) {
                setDetails(response.data.results)
            }
        })
        .catch((error) => console.log(error))
    }, [])

    const changeHandler = (e) => {
            setDetails({
                ...details,
                [e.target.name]: e.target.value
            })
    }

    const submitHandler = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/pets/edit/${id}`, details)
        .then((response) => {
            console.log("response: ", response)
            if(response.data.error) {
                setFormErrors(response.data.error.errors);
                console.log(response.data.error.errors)
            } else {
                setFormErrors({})
                navigate("/")
            }
        })
            .catch(error => console.log(error))
    }

    return(
        <div>
            <Link to={`/`} className="btn btn-secondary">Back to Home</Link>
            <form onSubmit={submitHandler}>
                <div className="form-group">
                    <label>Pet Name:</label>
                    <input onChange={changeHandler} type="text" name="name" className="form-control" value={details.name} />
                    <p className="text-danger">{FormErrors.name?FormErrors.name.message: null}</p>
                </div>
                <div className="form-group">
                    <label>Pet Type:</label>
                    <input onChange={changeHandler} type="text" name="type" className="form-control" value={details.type} />
                    <p className="text-danger">{FormErrors.type?FormErrors.type.message: null}</p>
                </div>
                <div className="form-group">
                    <label>Pet Description:</label>
                    <input onChange={changeHandler} type="text" name="description" className="form-control" value={details.description} />
                    <p className="text-danger">{FormErrors.description?FormErrors.type.message: null}</p>
                </div>
                <p>Skills(optional):</p>
                <div className="form-group">
                    <label>Skills 1:</label>
                    <input onChange={changeHandler} type="text" name="skill_1" className="form-control" value={details.skill_1}/>
                </div>
                <div className="form-group">
                    <label>Skills 2:</label>
                    <input onChange={changeHandler} type="text" name="skill_2" className="form-control" value={details.skill_2}/>
                </div>
                <div className="form-group">
                    <label>Skills 3:</label>
                    <input onChange={changeHandler} type="text" name="skill_3" className="form-control" value={details.skill_3}/>
                </div>
                <button type="submit" className="btn btn-primary btn-sm mt-3">Edit Pet</button>
            </form>
        </div>
    )
}

export default EditForm;