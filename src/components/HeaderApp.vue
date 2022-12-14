<script septup>

</script>

<template>
    <header class="d-flex justify-content-center">
        <nav class="d-flex w-100 justify-content-between align-items-center">
        <div class="nav-s d-flex gap-3 align-items-center nav navbar-menu justify-content-between flex-wrap">
            <a data-bs-toggle="offcanvas" href="#offcanvasRight" role="button" aria-controls="offcanvasRight">
                <span class="material-symbols-outlined">menu<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" /></span>
            </a>   
            <RouterLink to="/"><img class="logo_header" src="../assets/logo_nav.png" alt="Leelo Gluten"></RouterLink>
            <RouterLink v-if="!user" to="/login">
                <span class="material-symbols-outlined">login<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" /></span>
            </RouterLink>
            <span v-if="user" class="material-symbols-outlined" @click="logout">logout<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" /></span>
        </div>

        <!-- <div class="nav-lx d-flex gap-3 align-items-center nav navbar-menu justify-content-evenly  p-1">
            <RouterLink to="/" class="active">
                <font-awesome-icon icon="fa-solid fa-house-chimney" />
                
                <span class="navbar-logo-text">Home</span>
            </RouterLink>
            <RouterLink to="/profile">
                <font-awesome-icon icon="fa-solid fa-user" />
                <span class="navbar-logo-text">Profile</span>
            </RouterLink>
            <RouterLink to="/news">
                <font-awesome-icon icon="fa-solid fa-newspaper" />
                <span class="navbar-logo-text">News</span>
            </RouterLink>
            <RouterLink to="/save">
                <font-awesome-icon icon="fa-solid fa-heart" />
                <span class="navbar-logo-text">Loves</span>
            </RouterLink>
        </div> -->
        
        <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
        <div class="offcanvas-header d-flex justify-content-end">
           <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body d-flex flex-column gap-2 ">
            <!-- <RouterLink to="/"><font-awesome-icon icon="fa-solid fa-house-chimney" /><span>Home</span></RouterLink> -->
            <!-- <RouterLink to="/profile"><font-awesome-icon icon="fa-solid fa-user" /><span>Profile</span></RouterLink> -->
            <!-- <RouterLink to="/save"><font-awesome-icon icon="fa-solid fa-heart" /><span>Favorites</span></RouterLink> -->
            <RouterLink to="/about"><span>ABOUT US</span></RouterLink>
            <RouterLink to="/contact"><span>CONTACT US</span></RouterLink>
            <RouterLink to="/new"><span>NEWS</span></RouterLink>
            <RouterLink to="/terms"><span>T&C</span></RouterLink>
            <RouterLink to="/workwithus"><span>WORK WITH US</span></RouterLink>
        </div>
        </div>
        </nav>
    </header>

</template>


<style scoped>
    @import url('../assets/main.css');

.material-symbols-outlined {
    font-size: 30px !important;
}

header{
    /* border-right: var(--color-primary) solid 1px; */
    min-height: 10vh;
    width: 100%;
    position: fixed;
    z-index: 10;
    top: 0;
    left: 0;
    width: 100%;
    flex-wrap: wrap;
}
nav{
    gap: 3rem;
    margin: 0;
    padding: .2rem;
}

.logo_header{
    width: 9rem;
    height: 5rem;
}

/* .navbar-menu{

} */

nav img{
    width: 9rem;
    height: 5rem;
}

nav .nav a{
    color: var(--color-text-ligth);
    text-decoration: none;
    font-size: 2.3rem;
    display: flex;
}
nav .nav a span{
    margin-left: 5px;
    font-size: 1.2rem;
}
.navbar-logo-text{
    display: none;
    height: 19px;
}
.navbar-menu{
    transition: .3s;
}
.navbar-menu a{
    position: relative;
    flex: 0 0 36px;
    display: flex;
    width: auto;
    opacity: .8;
    transition: .5s;
}
/* .navbar-menu img{
    width: 8rem;
} */

.navbar-menu > a.active::after{
    content: "";
    display: block;
    position: absolute;
    top: 18px;
    left: 50%;
    translate: -50% 0;
    width: 4px;
    height: 4px;
    border-radius: 50%;
}
.navbar-menu a:hover{
    border-bottom: var(--color-principal-text) solid 1px;
    transform: scaleY(1.5px);
}
.offcanvas{
    background-color: var(--color-btn);
    border-radius: 0rem 0rem 0rem 1rem;
    font-family: 'Shadows Into Light', cursive;
    font-weight: 600;
    font-size: 2rem;
    text-align: end;
    /* padding-right: 5rem; */
        
}
.offcanvas a{
    color: var(--color-text-ligth);
    text-decoration: none;
    font-size: 1.8rem;
    margin: 2px;
    padding-right: 5rem;

}

.offcanvas a:hover{
    color: var(--color-text-dark);
    text-decoration-line: underline;
    text-decoration-color: yellow;
    text-decoration-style: dotted;
}


.offcanvas-body span{
    margin-left: 10px;
    font-size: 1.4rem;

}

.offcanvas-title, nav h1{
    color: yellow;
    -webkit-text-stroke: blue 1.5px;
    font-size: 2rem;
}

@media screen and (max-width: 766px){
    .nav-lx{
    display: none !important;
    }
    
    .navbar-logo{
        display: none;
    }
    
    .navbar-menu{
        font-size: 1.5rem;
        width: 100%;
        justify-content: space-evenly;

    }
    nav{
        border-left: none;
    }
    header{
    border-right: none;
    background-color: var(--color-primary);
}
}
@media screen and (max-width: 599px){
    .navbar-logo{
        display: none;
    }
    .navbar-menu{
        gap: 0 !important;
        flex: 1 1 auto;
    }
    .offcanvas{
        width: 70% !important;
        height: 80%;
    }
    .navbar-menu a{
        margin: 0 12px;
        width: 40px;
    }
    
}

@media screen and (max-width: 360px){
    .navbar{
        padding: 0 .5rem;
    }
    .navbar-menu{
        gap: 0 !important;
        
    }
    .navbar-menu a{
        margin: 0 5px;
        width: 40px;
    }
}

</style>