<template>
    <header id="header">
        <nav class="navbar navbar-expand-lg navbar-light">
            <div class="container">
                <p class="navbar-brand"><span>Planet</span><span>ary</span></p>
                <button
                    class="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div
                    class="collapse navbar-collapse"
                    id="navbarSupportedContent"
                >
                    <ul class="navbar-nav me-auto">
                        <li class="nav-item">
                            <router-link
                                to="/"
                                class="nav-link active"
                                aria-current="page"
                                >Home</router-link
                            >
                        </li>
                        <li class="nav-item">
                            <router-link to="/about" class="nav-link"
                                >About</router-link
                            >
                        </li>
                    </ul>
                    <form class="d-flex flex-column flex-md-row">
                        <input
                            class="form-control me-2"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                        />
                        <button
                            class="btn btn-md btn-outline-success"
                            type="submit"
                        >
                            Search
                        </button>
                    </form>
                </div>
            </div>
        </nav>
    </header>
</template>

<script>
export default {};
</script>

<style scoped>
#header .navbar {
    /* height: 60px; */
    padding-top: 10px;
    padding-bottom: 10px;
}

.navbar-brand {
    margin: auto 50px auto 0;
    font-family: "Roboto Mono", monospace;
    font-size: 1.05rem;
    font-weight: 600;
    border: 5px solid #e7e7e7;
    border-radius: 25px 0 25px 0;
    padding: 5px 10px;
}

.navbar-brand span:first-child {
    text-transform: uppercase;
}

.navbar-brand span:last-child {
    text-transform: capitalize;
}

#header .navbar a {
    color: #2c3e50;
}

#header .navbar a.router-link-exact-active {
    color: #42b983;
}

.navbar-light .navbar-toggler {
    border-radius: 50%;
    padding: 0;
    height: 40px;
    width: 40px;
}

.navbar-toggler:focus {
    text-decoration: none;
    outline: 0;
    box-shadow: none;
    background: #e7e7e7;
}

@media screen and (max-width: 768px) {
    .navbar-collapse {
        margin-top: 12px;
        padding: 10px 20px 25px;
        border-radius: 0.25rem;
        background: rgba(0, 0, 0, 0.825);
    }

    #header .navbar a {
        color: #f7f7f7;
    }
}

@media screen and (max-width: 426px) {
    form input {
        margin-top: 15px;
        margin-bottom: 10px;
    }
}
</style>