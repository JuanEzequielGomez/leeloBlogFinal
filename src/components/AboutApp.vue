<script setup>

</script>

<template>
    <main class="d-flex flex-column align-items-center">
        <div class="title_about">
            <img src="../assets/logo_completo.png" alt="logo completo de la marca">
            <h1>About Us</h1>
        </div>
        <img src="../assets/celiacos.png" alt="planta">
        <article>
            LeeLo will open the doors to a new world of health and new experiences.
            It will accompany you at all times to help you decide on your meal plans and improve your diet.
            It will also offer you the latest news from the gluten free world.
            It is the ideal companion to advise you on this path.
            Don't wait any longer and join the LeeLo world.
        </article>
        <!-- <RouterLink to="/" class="btn btn-more">Return</RouterLink> -->
    </main>
</template>

<style scoped>
    .title_about{
        display:flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 2rem;
        padding-bottom: 2rem;
        /* padding-top: 4rem; */
    }

    .title_about img{
        width: 20%;
    }

    
    article{
        width: 90%;
        text-align: justify;
        padding-bottom: 1.5rem;
        padding-top: 2rem;
    }
    img{
        width: 20rem;
        border-radius: 4rem;
    }

    .btn-more{
        margin-bottom: 2rem;
    }
</style>