<script setup>

</script>

<template>
    <main class="d-flex flex-column align-items-center gap-3 justify-content-center">

        <div class="d-flex flex-column div-header align-items-center justify-content-center gap-3">
            <div class="title_about">
            <img src="../assets/logo_completo.png" alt="logo completo de la marca">
            <h1>Contact us</h1>
        </div>
        <p>This space is for you, so that you can share what you want with each one of us, from talking about present or future projects, innovative ideas that you have in mind or simply getting in touch to be part of the team. We will answer you as soon as possible. We are in contact! Thank you!</p>
        </div>

        <form action="">
            <div class="textbox">
                <input type="text" name="" id="" required>
            <label>Name and surname</label>
            </div>
            <div class="textbox">
                <input type="mail" name="" id="" required>
            <label>E-mail</label>
            </div>
            <div class="textbox">
                <!-- <textarea type="text" name="" id="" required></textarea> -->
                <input type="text" name="" id="" required>
            <label>Message</label>
            </div>
            <button type="submit" class="btn-more">
                Submit
            </button>
            <!-- <RouterLink to="/" class="btn-more2">Return</RouterLink> -->
        </form>
        
    </main>
</template>

<style scoped>
    .div-header{
        width: 90%;
    }

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
    
    button{
        width: 10rem;
    }
    form{
        width: 90% !important;
        margin: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 16px;
    }
    button, input{
        border: 0;
        height: 60px;
        background: transparent;
        outline: none;
    }
    input{        
        width: 100%;
    }
    .textbox{ 
        width: 90%;
        position: relative;
        margin-bottom: 16px;
    }
    .textbox span{
        position: absolute;
        top: 50%;
        translate: 0 -50%;
        left: 0;
        font-size: 22px;
        pointer-events: none;
        color: rgb(255 255 255/40%)
    }
    .textbox input{
        width: 100%;
        padding: 0 24px 0 36px;
        border-bottom: 2px solid var(--color-primary);
        height: 72px;        
        color: var(--color-text-dark);
    }
    input:focus{
        border-color: var(--color-btn);
    }
    :is(input:focus, input:valid)~span{
       color: rgb(255 255 255/96%);
    }
    /* .textbox textarea{
        width: 100%;
        padding: 0 24px 0 36px;
        border-bottom: 2px solid var(--color-primary);
        height: 72px;        
        color: var(--color-text-dark);
        border: none;
        background-image: url(../assets/fondo.jpg);
    }
    textarea:focus{
        border-color: var(--color-btn);
    }
    :is(textarea:focus, textarea:valid)~span{
       color: rgb(255 255 255/96%);
    } */
    .textbox label{
        position: absolute;
        top: 50%;
        left: 36px;
        translate: 0 -50%;
        color: var(--color-primary);
        pointer-events: none;
        transition: 0.4s;
    }
    :is(input:focus, input:valid)~label{
       translate: -40px -40px;
       scale: 0.875;
    }
    input:focus ~ label{
        color: var(--color-btn);
    }

    :is(textarea:focus, textarea:valid)~label{
       translate: -40px -40px;
       scale: 0.875;
    }
    textarea:focus ~ label{
        color: var(--color-btn);
    }

    button{
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        padding: 0 24px;
        border-radius: 6px;
        background: var(--color-btn);
        color: var(--color-text-ligth);
        border: 0;
        font-weight: 600;
    }
    img{
        width: 290px;
    }

    p{
        text-align: justify;
        width: 90%;
        padding-bottom: 1rem;
    }

    .btn-more{
    font-weight: 600;
    padding: 10px 20px;
    color: var(--color-text-dark);
    background-color: var(--color-btn);
    transition: .3s;
    border-radius: 7rem;
    /* font-family: 'La Belle Aurore', cursive; */
    font-family: 'Shadows Into Light', cursive;
    font-size: 1.2rem;
    width: 90%;
    margin-bottom: 1rem;
    margin-top: 1rem;
    text-decoration: none;
  }
  .btn-more:hover{
    transform: scale(1.03);
    background-color: var(--color-btn-hover);
    color: var(--color-text-ligth);
  }

  .btn-more2{
    font-weight: 600;
    padding: 10px 20px;
    color: var(--color-text-dark);
    background-color: var(--color-btn);
    transition: .3s;
    border-radius: 7rem;
    /* font-family: 'La Belle Aurore', cursive; */
    font-family: 'Shadows Into Light', cursive;
    font-size: 1.2rem;
    width: 90%;
    margin-bottom: 2rem;
    text-decoration: none;
  }
  .btn-more2:hover{
    transform: scale(1.03);
    background-color: var(--color-btn-hover);
    color: var(--color-text-ligth);
  }
</style>