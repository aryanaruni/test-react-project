import React from 'react'

function NavBar() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <span class="navbar-brand" href="#">Navbar</span>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <span class="nav-link" href="#">Home <span class="sr-only">(current)</span></span>
                        </li>
                        <li class="nav-item">
                            <span class="nav-link" href="#">Link</span>
                        </li>
                        <li class="nav-item dropdown">
                            <span class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Dropdown
                            </span>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <span class="dropdown-item" href="#">Action</span>
                                <span class="dropdown-item" href="#">Another action</span>
                                <div class="dropdown-divider"></div>
                                <span class="dropdown-item" href="#">Something else here</span>
                            </div>
                        </li>
                        <li class="nav-item">
                            <span class="nav-link disabled" href="#">Disabled</span>
                        </li>
                    </ul>
                    <form class="form-inline my-2 my-lg-0">
                        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        </div>
    )
}

export default NavBar