<script setup>

import { ref, onMounted } from 'vue';
import CommentContainer from './CommentContainer.vue';
import NewComment from './NewComment.vue';
import user from '../store/User.js';

const haceCuanto = ref('Hace')


const props = defineProps({
    post: {},
    typeof: Object
})

let divisor = 1000 * 60
let calculo = Math.floor((Date.now() - props.post.date) / divisor)
let texto = 'min'
if (calculo > 59) {
    texto = 'hs'
    divisor *= 60
}
calculo = Math.floor((Date.now() - props.post.date) / divisor)
if (calculo > 59) {
    texto = 'dias'
    divisor *= 24
}
haceCuanto.value = "Hace " + calculo + " " + texto
onMounted(() => {
    setInterval(() => {
        calculo = Math.floor((Date.now() - props.post.date) / divisor)
        if (calculo > 59) {
            texto = 'hs'
            divisor *= 60
        }
        calculo = Math.floor((Date.now() - props.post.date) / divisor)
        if (calculo > 59) {
            texto = 'dias'
            divisor *= 24
        }
        haceCuanto.value = "Hace " + calculo + " " + texto
    }, 60000)
})


const favorito = ref(false)
const toggleFavorite = () => {
    favorito.value = !favorito.value
}
</script>

<template>
    <div class="card">
        <div class="cardHeader">
            <img :src="post.photo ? post.photo : 'https://picsum.photos/200'" alt="">
            <h3>{{ post.name }}</h3>
            <span class="contador">0</span>
            <span @click="toggleFavorite" :class="favorito? 'material-symbols-outlined favorite added' : 'material-symbols-outlined favorite'">
                favorite
            </span>
        </div>
        <div class="cardContent">
            <p>{{ post.body }}</p>
            <p class="muted">{{ haceCuanto }}</p>
        </div>
        <CommentContainer :postId="post.id" />
        <NewComment v-if="user" :postId="post.id" />
    </div>
</template>

<style scoped>
button {
    padding: 0.5rem;
    border: none;
    border-radius: 4px;
    background-color: #ccc;
    cursor: pointer;
}

h3{
    font-family: 'Shadows Into Light', cursive;
    font-weight: 600;
    font-size: 1.5rem;
}

.favorite{
    cursor: pointer;
    transition: all 1s;
    color: pink;
}

.contador{
    margin-left: auto;
}

.added{
    color: red;
    font-variation-settings: 'FILL' 1;
}

.favorite:active{
    transform: scale(2);
}

.card {
    display: flex;
    flex-direction: column;
    background-color: white;
    position: relative;
    padding: 1rem;
    width: 500px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    transition: 0.5s all;
    border: 0.2rem solid var(--color-primary);
}

.cardHeader {
    display: flex;
    width: 100%;
    height: 3rem;
    align-items: center;
    gap: 1rem;
    border-bottom: 2px solid palevioletred;
    border-radius: 50px 0 0 50px;
    
}

h3 {
    font-weight: bold;
}

.cardHeader img {
    height: 100%;
    border-radius: 50%;
    border: 2px solid palevioletred;
}

.cardContent {
    display: flex;
    box-shadow: 2px 2px var(--color-primary);
    border-radius: 5rem;
    margin-top: 2rem;
    margin-bottom: 1rem;
    flex-direction: column;
    background-color: white;
    padding: 1rem;
}

.card button {
    position: absolute;
    bottom: 0;
    right: 0;
    margin: 0.5rem;
    background-color: red;
    color: white;
    border: none;
    border-radius: 0.25rem;
    padding: 0.25rem 0.5rem;
    cursor: pointer;
}

.muted {
    color: black;
    font-size: 0.6rem;
    text-align: start;
    width: 100%;
    position: absolute;
    bottom: 0;
    right: 0;
    left: 1rem;
    /* opacity: 0.5; */
}

@media screen and (max-width: 600px) {
    .card {
        width: 95%;
    }
}
</style>