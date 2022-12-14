<script setup>  
    
    import twPosteos from './twPosteos.vue';
 
</script>

<template>
    <main class="d-flex flex-column align-items-center">
            
        <twPosteos />
    
    </main>
</template>

<style scoped>

.post-container{
    width: 95%;
}
#search{
        width:clamp(250px, 50vw, 600px) !important;
        height: clamp(30px, 40px, 50px);
        border: 1px solid #ccc;
        border-radius: 20px;
        padding: 0 10px;
        background: rgba(255, 255, 255, 0.11);
        color: var(--color-text-ligth);

    }
    .icon{
        color: #191919;
        position: absolute;
        width: 20px;
        height: 20px;
        left: 12px;
        top: 50%;
        transform: translateY(-50%);
    }
    button{
        width: 10rem !important;
    }
    button svg, button{
        font-size: 1.2rem;
    }
    form{
    width: 100%;
}
.contenedor{
    width: 95%;
}
textarea{
 width: clamp(280px, 90%, 600px) !important;
 background: rgba(255, 255, 255, 0.205);
 border: none;
 border-radius: .5rem;
 color: #FEFEFE;
 height: auto;
 padding: 1rem;
}
</style>