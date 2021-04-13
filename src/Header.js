import React from "react";

export default function Header() {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-white">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">
            LYBRA
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav mx-auto"></div>
            <div class="navbar-nav">
              <a class="nav-link" href="/">
                About
              </a>
              <a class="nav-link" href="/">
                Features
              </a>
              <a class="nav-link" href="/">
                Contact us
              </a>

              <a class="nav-link" href="/">
                Latest post
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
