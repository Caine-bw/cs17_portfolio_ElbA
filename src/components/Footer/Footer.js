import React from 'react';
import './Footer.sass';

function Footer(){

    return(
        <div>
<footer class="bg-dark text-center text-white">
  <div class="container p-4">
    <section class="mb-4">
      <a class="btn btn-outline-light btn-floating m-1" target="_blank" href="https://www.facebook.com/" role="button"
        ><i class="fab fa-facebook-f"></i
      ></a>

      <a class="btn btn-outline-light btn-floating m-1" target="_blank" href="https://twitter.com/Caine1ooo" role="button"
        ><i class="fab fa-twitter"></i
      ></a>

      <a class="btn btn-outline-light btn-floating m-1" target="_blank" href="https://www.google.be/" role="button"
        ><i class="fab fa-google"></i
      ></a>

      <a class="btn btn-outline-light btn-floating m-1" target="_blank" href="https://www.instagram.com/lilmayo/?hl=fr" role="button"
        ><i class="fab fa-instagram"></i
      ></a>

      <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><i class="fab fa-linkedin-in"></i
      ></a>

      <a class="btn btn-outline-light btn-floating m-1" target="_blank" href="https://github.com/Caine-bw?tab=repositories" role="button"
        ><i class="fab fa-github"></i
      ></a>
    </section>
    <section class="mb-4">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt distinctio earum
        repellat quaerat voluptatibus placeat nam, commodi optio pariatur est quia magnam
        eum harum corrupti dicta, aliquam sequi voluptate quas.
      </p>
    </section>
    <section class="">
      <div class="row">
        <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 class="text-uppercase">Contriubutors</h5>

          <ul class="list-unstyled mb-0">
            <li>
              <a href="#!" class="text-white">Bilal's Github</a>
            </li>
            <li>
              <a href="#!" class="text-white">Said's Github</a>
            </li>
          </ul>
        </div>
        <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 class="text-uppercase">Associates</h5>

          <ul class="list-unstyled mb-0">
            <li>
              <a href="#!" class="text-white">Mahad Liban the XRP Guy</a>
            </li>
            <li>
              <a href="#!" class="text-white">Selim Brabus Music</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </div>
  <div class="text-center p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
    © 2020 Copyright : 
    <a class="text-white" href="https://mdbootstrap.com/">Project Dharma</a>
  </div>
</footer>
        </div>
    )
}

export default Footer;