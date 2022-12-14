<script>
</script>


<template>
    <main class="d-flex flex-column align-items-center">
        <div class="title_about">
            <img src="../assets/logo_completo.png" alt="logo completo de la marca">
            <h1>Work Whit Us</h1>
        </div>

    <article>
        <img src="../assets/logo_sin_tacc.png" alt="sin tacc" class="logo">
        <div>
            <h3>Our mission</h3>
            <p>Creating a feeling of trust is one of the most important objectives for us, since LeeLo seeks to reach each of the celiac homes in Argentina.</p>
            <RouterLink to="/about" class="btn btn-more">Know more about us</RouterLink>
        </div>
    </article>

    <article>
        <img src="../assets/logo_arg.png" alt="Asociación Arg de Celíacos" class="logo">
        <div>
            <h3>Volunteering</h3>
            <p>It is part of the Argentine Celiac Association, particularly in the volunteer area, where we are in charge of bringing information to different educational centers and providing support and information to people who request it, to accompany them in adapting this way of life to each and every one of the Argentine celiacs. Do not hesitate to be part of this beautiful group. If you want more information, leave us your information and we will contact you. Do not forget to specify in the message about volunteering, please. </p>
            <RouterLink to="/contact" class="btn btn-more">Send us a message</RouterLink>
        
        </div>
    </article>

    <article>
        <img src="../assets/logo_gral.png" alt="logo sin tacc" class="logo">
        <div>
            <h3>Team LeeLo</h3>
        <p>If what you want is to go further and become a professional part of our team, do not hesitate to contact us and request information about open positions. The fastest way to do so is by filling out the form in the labor section with all the requested information, so that we can contact you in case you apply for one of our available positions. We will wait for you! Come be part of LeeLo.</p>
        <RouterLink to="/formWork" class="btn-more btn">
            Apply same time
        </RouterLink>
        </div>
    </article>

    <!-- <RouterLink to="/" class="btn btn-more return">Return</RouterLink> -->
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
    h1{
        margin: 2rem;
    }
    article{
    width: 90%;
    height: auto;
    margin: 2rem 0rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    }
    article img{
        width: 100%;
        height: 50%;
        border-radius: 1.5rem 1.5rem 0rem 0rem;
    }
    article div{
        padding: 5px;
        height: 50%;
        background-color: rgba(240, 248, 255, 0.089);
        border-radius: 0rem 0rem 1.5rem 1.5rem;
    }
    article h3{
        margin: 1rem 0rem;
    }
    article p{
        text-align: justify;
        padding-bottom: 2rem;
        padding-top: 2rem;
    }

    .logo{
        width: 12rem;
    }

    .return{
        margin-bottom: 2rem;
        width: 42%;
    }
</style>