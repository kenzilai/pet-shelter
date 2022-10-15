import './App.css';
import {useState} from 'react';
import {
    Routes,
    Route,
} from "react-router-dom";
import Pet from './components/Pet'; //Import all components files
import Form from './components/Form'; 
import OnePet from './components/OnePet';
import EditForm from './components/EditForm';

function App() {
    const [formSubmitted,setFormSubmitted] = useState(false);

    return (
        <div className="App container">
            <h1>Pet Shelter</h1>
            <Routes>
                <Route exact path="/pets/new" element = {
                    <div>
                        <Form formSubmitted={formSubmitted} setFormSubmitted={setFormSubmitted}/>
                    </div>
                } />
                <Route exact path="/" element = {<Pet />} />
                <Route exact path="/pets/:id" element = {<OnePet />} />
                <Route exact path="/pets/edit/:id" element = {<EditForm />} />
            </Routes>
        </div>
    );
};

export default App;