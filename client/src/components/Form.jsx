import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import {Link} from "react-router-dom";
import axios from "axios";

const Form = (props) => {
    const [FormInfo, setFormInfo] = useState({});
    const [FormErrors, setFormErrors] = useState({});
    const navigate = useNavigate();

    const changeHandler = (e) => {
            setFormInfo({
                ...FormInfo,
                [e.target.name]: e.target.value
            })
    }

const submitHandler = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8000/api/pets/new", FormInfo)
        .then((response) => {
            console.log("response: ", response)
            if(response.data.error) {
                setFormErrors(response.data.error.errors);
                console.log(response.data.error.errors)
            } else {
                setFormErrors({})
                props.setFormSubmitted(!props.formSubmitted)
                navigate("/")
            }
        })
        .catch(error => console.log(error))
    }

    return(
        <div>
            <Link to={`/`} className="btn btn-secondary">Back to Home</Link>
            <form onSubmit = {submitHandler}>
                <div className="form-group">
                    <label>Pet Name:</label>
                    <input onChange={changeHandler} type="text" name="name" className="form-control" />
                    <p className="text-danger">{FormErrors.name?FormErrors.name.message: null}</p>
                </div>
                <div className="form-group">
                    <label>Pet Type:</label>
                    <input onChange={changeHandler} type="text" name="type" className="form-control" />
                    <p className="text-danger">{FormErrors.type?FormErrors.type.message: null}</p>
                </div>
                <div className="form-group">
                    <label>Pet Description:</label>
                    <input onChange={changeHandler} type="text" name="description" className="form-control" />
                    <p className="text-danger">{FormErrors.description?FormErrors.type.message: null}</p>
                </div>
                <p>Skills(optional):</p>
                <div className="form-group">
                    <label>Skills 1:</label>
                    <input onChange={changeHandler} type="text" name="skill_1" className="form-control" />
                </div>
                <div className="form-group">
                    <label>Skills 2:</label>
                    <input onChange={changeHandler} type="text" name="skill_2" className="form-control" />
                </div>
                <div className="form-group">
                    <label>Skills 3:</label>
                    <input onChange={changeHandler} type="text" name="skill_3" className="form-control" />
                </div>
                <button type="submit" className="btn btn-primary btn-sm mt-3">Add Pet</button>
            </form>
        </div>
    )
}

export default Form;