import React from 'react';
import './Projets.sass';
// import chefs from '../img/chefs'

function Projets(){
    return(
        <div className="text-center">
            <h1 className="text-center mb-5" >Projets</h1>
            <div class="container">
                <div class="product row ">
                    <div class="product__card  col-md-6 col-lg-4">
                        <div class="product__card__style card">
                            <img className="img-fluid h-100 w-100" src="/img/Emporium_dark.JPG"/>
                        </div>
                        <h5 className="titreProj">Emporium</h5>
                        <p className="text-center monText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi voluptatibus quibusdam, inventore amet voluptate quod saepe eveniet minus enim ratione dolorum qui corrupti aut dolorem soluta laboriosam explicabo modi nisi! Unde maxime labore explicabo, excepturi ducimus cumque voluptates asperiores laborum vero eaque, esse sapiente molestias tenetur dolores eos distinctio molestiae aperiam reiciendis mollitia ab cupiditate id, deserunt quas. Ducimus, odit.</p>
                    </div>
                    <div class="product__card col-md-6 col-lg-4">
                        <div class="product__card__style card">
                            <img className="img-fluid h-100 w-100" src="/img/stylegene.JPG"/>
                        </div>
                        <h5 className="titreProj">Style génerator</h5>
                        <p className="text-center monText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi voluptatibus quibusdam, inventore amet voluptate quod saepe eveniet minus enim ratione dolorum qui corrupti aut dolorem soluta laboriosam explicabo modi nisi! Unde maxime labore explicabo, excepturi ducimus cumque voluptates asperiores laborum vero eaque, esse sapiente molestias tenetur dolores eos distinctio molestiae aperiam reiciendis mollitia ab cupiditate id, deserunt quas. Ducimus, odit.</p>
                        <div class="overlay">
                            <div class="text">Style Generator</div>
                        </div>
                    </div>
                    <div class="product__card col-md-6 col-lg-4">
                        <div class="product__card__style card">
                            <img className="img-fluid h-100 w-100" src="/img/chefs.jpg"/>
                        </div>
                        <h5 className="titreProj">Les Chefs</h5>
                        <p className="text-center monText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi voluptatibus quibusdam, inventore amet voluptate quod saepe eveniet minus enim ratione dolorum qui corrupti aut dolorem soluta laboriosam explicabo modi nisi! Unde maxime labore explicabo, excepturi ducimus cumque voluptates asperiores laborum vero eaque, esse sapiente molestias tenetur dolores eos distinctio molestiae aperiam reiciendis mollitia ab cupiditate id, deserunt quas. Ducimus, odit.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projets;