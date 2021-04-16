import React from 'react';
import './Contact.sass';
import {useHistory} from 'react-router-dom'

function Contact(){

    let history = useHistory();
    return(
        
        <div>
            <div className="text-center">
              <h1>Section Contact</h1>
              <form className="container">
                <div class="form-outline mb-4">
                  <input type="text" id="form4Example1" class="form-control" />
                  <label class="form-label" for="form4Example1">Nom & Prénom</label>
                </div>
                <div class="form-outline mb-4">
                  <input type="email" id="form4Example2" class="form-control" />
                  <label class="form-label" for="form4Example2">Addresse Email </label>
                </div>
                <div class="form-outline mb-4">
                  <textarea class="form-control" id="form4Example3" rows="4"></textarea>
                  <label class="form-label" for="form4Example3">Message</label>
                </div>
                <div class="form-check d-flex justify-content-center mb-4">
                </div>
                <button type="submit" class="btn btn-dark btn-block mb-4">Envoyer</button>
                </form>
            <button onClick={()=> history.push('/')} type="button" class="btn btn-outline-dark">Retour a l'Acceuil ?</button>  
            </div>
        </div>
    )
}

export default Contact;