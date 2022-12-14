<script setup>
</script>

<template>
    <main class="d-flex flex-column align-items-center gap-3">
        <div class="title_about">
            <img src="../assets/logo_completo.png" alt="logo completo de la marca">
            <h1>Apply Now</h1>
        </div>

        <form action="">
            <div class="textbox">
                <input type="text" name="nameSurname" id="" required>
            <label>Name and surname</label>
            </div>

            <div class="textbox">
                <input type="mail" name="mail" id="" required>
            <label>E-mail</label>
            </div>

            <!-- <div class="textbox2">
                <input type="date" name="birth" id="birth" required>
            <label>Birth</label>
            </div> -->

            <div class="textbox">
                <input type="text" name="age" id="" required>
            <label>Age</label>
            </div>

            <div class="textbox">
                <input type="text" name="currentResidence" id="" required>
            <label>Current residence</label>
            </div>

            <div class="textbox">
                <input type="text" name="in" id="in" required>
            <label>Linkedin</label>
            </div>

            <div class="textbox">
                <input type="text" name="in" id="in" required>
            <label>Github</label>
            </div>

            <div class="textbox2">                
                <input type="file" name="file" id="" required>
                <label>Upload CV</label>
            </div>
            
            <button class="btn btn-more" type="submit">
                Apply now
            </button>
        </form>
        <RouterLink to="/workwithus" class="btn btn-more return">Return</RouterLink>
    </main>
</template>

<style scoped>
    #file {
        display: none;
    }
    .title_about{
        display:flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 2rem;
        padding-bottom: 2rem;
        padding-top: 4rem;
    }

    .title_about img{
        width: 20%;
    }
     button, input{
        border: 0;
        height: auto;
        background: transparent;
        outline: none;
    }
    input{        
        width: 100%;
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
    .textbox{
        width: 90%;
        position: relative;
        margin-bottom: 16px;
    }

    .textbox2{
        width: 90%;
        position: relative;
        margin-bottom: 16px;
        margin-top: 2rem;
        /* padding-bottom: 4rem; */
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
    a{
        color: var(--color-primary);
        text-decoration: none;
    }
    .textbox input{
        width: 100%;
        padding: 0 24px 0 36px;
        border-bottom: 2px solid var(--color-primary);
        height: 72px;        
        color: var(--color-text-dark);
    }

    .textbox2 input{
        width: 100%;
        padding: 24px 24px 0 36px;
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
    .textbox label{
        position: absolute;
        top: 50%;
        left: 36px;
        translate: 0 -50%;
        color: var(--color-primary);
        pointer-events: none;
        transition: 0.4s;
    }

    .textbox2 label{
        position: absolute;
        top: -20%;
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

    button{
        padding: 10px 20px !important;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        padding: 0 24px;
        border-radius: 5rem;
        background: var(--color-btn);
        color: var(--color-text-dark);
        border: 0;
        font-weight: 600;
        width: 50%;
        margin-bottom: 1rem;
    }

    .return{
        width: 45%;
        color: var(--color-text-dark);
        margin-bottom: 2rem;
    }

    .return:hover{
        color: var(--color-text-ligth);
        
    }
    

</style>