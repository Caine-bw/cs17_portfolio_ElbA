import React from 'react';
import './Skills.sass';
import {useHistory} from 'react-router-dom'

function Skills(){

    let history = useHistory();
    return(
        
        <div>
            <div className="text-center">
              <h1>Section Skills</h1>

              <div>
  <ul class="skills-bar-container">
  <li>
    <div class="progressbar-title">
      <h3>HTML5  - 100%</h3>
      <span class="percent" id="html-pourcent"></span>
    </div>
    <div class="bar-container">
      <span class="progressbar progressred" id="progress-html"></span>
    </div>
  </li>
  <li>
    <div class="progressbar-title">
      <h3>CSS / SASS    - 100%</h3>
      <span class="percent" id="css-pourcent"></span>
    </div>
    <div class="bar-container">
      <span class="progressbar progressblue" id="progress-css"></span>
    </div>
  </li>
  
  <li>
    <div class="progressbar-title">
      <h3>JavaScript / jQuery   - 80%</h3>
      <span class="percent" id="javascript-pourcent"></span>
    </div>
    <div class="bar-container">
      <span class="progressbar progresspurple" id="progress-javascript"></span>
    </div>
  </li>
  
  <li>
    <div class="progressbar-title">
      <h3>Bootstrap - 100%</h3>
      <span class="percent" id="php-pourcent"></span>
    </div>
    <div class="bar-container">
      <span class="progressbar progressorange" id="progress-php"></span>
    </div>
  </li>
  
  <li>
    <div class="progressbar-title">
      <h3>Git/ Github - 300%</h3>
      <span class="percent" id="angular-pourcent"></span>
    </div>
    <div class="bar-container">
      <span class="progressbar progressgreen" id="progress-angular"></span>
    </div>
  </li>
  
</ul>
              </div>
            <button onClick={()=> history.push('/')} type="button" class="btn btn-outline-dark">Retour a l'Acceuil ?</button>  
            </div>
        </div>
    )
}

export default Skills;