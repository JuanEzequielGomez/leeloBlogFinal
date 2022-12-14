<script setup>
</script>

<template>
    <footer class="d-flex justify-content-between align-items-center">
        <nav class="d-flex w-100 justify-content-between align-items-center">
        <div class="foo-s d-flex gap-3 align-items-center nav navbar-menu justify-content-evenly p-1">
            <RouterLink to="/"  active-class="active">
                <span class="material-symbols-outlined">Home<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" /></span>
            </RouterLink>
            <RouterLink to="/about" active-class="active">
                <span class="material-symbols-outlined">info<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" /></span>
            </RouterLink>
            <RouterLink to="/contact" active-class="active">
                <span class="material-symbols-outlined">mail<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" /></span>
            </RouterLink>
            <RouterLink to="/workwithus" active-class="active">
                <span class="material-symbols-outlined"><span class="material-symbols-outlined">handshake</span><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" /></span>
            </RouterLink>
            <RouterLink to="/terms" active-class="active">
                <span class="material-symbols-outlined">menu_book<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" /></span>
            </RouterLink>         
            <!-- <RouterLink to="/profile" active-class="active">
                <span class="material-symbols-outlined">account_circle<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" /></span>
            </RouterLink> -->
        </div>
        
        
    </nav>

    </footer>
</template>

<style scoped>

.material-symbols-outlined {
    font-size: 30px !important;
    background-color: transparent;
}

.material-symbols-outlined:hover {
    font-size: 40px !important;
    color: var(--color-text-dark);
}

footer{
    background-color: var(--color-primary);
    min-height: 10vh;
    width: 100%;
    position: fixed;
    z-index: 1;
    bottom: 0;
    width: 100%;
}
nav{
    gap: 1rem;
    margin: 0;
    padding: .2rem;
}
nav img{
    width: 40px;
    height: 60px;
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
    width: 100%;
}
.navbar-menu a{
    position: relative;
    flex: 0 0 36px;
    display: grid;
    width: auto;
    opacity: .8;
    transition: .3s;
}



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
    border-bottom: var(--color-text-dark) solid 1px;
    transform: scaleY(1.5px);
}

.active{
    color: var(--color-text-dark) !important;
    /* background-color: var(--color-text-ligth); */
    padding: .5rem 0.9rem .5rem 0.6rem;
    border-radius: 1.5rem;
    animation: brillar 2s infinite ease-in-out;
    /* transform: scale(1.05); */
}

@keyframes brillar{
    0%{
        background-color: var(--color-btn);
    }
    50%{
        background-color: var(--color-btn);
        transform: scale(1.05);
    }
    100%{
        background-color: var(--color-btn);
    }
}

.offcanvas{
    background-color: var(--color-primary);
    border-radius: 0rem 0rem 0rem 1rem;
        
}
.offcanvas a{
    color: var(--color-text-ligth);
    text-decoration: none;
    font-size: 1.4rem;
    margin: 2px;

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
    .foo-lx{
        display: none !important;
    }
}
</style>