<script setup>
import user from '../store/User.js'

const emits = defineEmits(['hideMenu'])
</script>

<template>
    <div class="menu1">
        <ul>
            <li v-if="user"><img :src="user.photoURL" alt=""></li>
            <li v-if="user"><h1>{{user.displayName}}</h1></li>
            <li v-if="user"><h2>{{user.email}}</h2></li>
            <li v-if="user"><RouterLink @click="emits('hideMenu')" active-class="active" to="/login">Profile</RouterLink></li>
            <li v-if="user"><RouterLink @click="emits('hideMenu')" active-class="active" to="/myposts">My posts</RouterLink></li>
            <li v-if="user"><RouterLink @click="emits('hideMenu')" active-class="active" to="/favorites">Favorites</RouterLink></li>
            <li><RouterLink @click="emits('hideMenu')" active-class="active" to="/posts">Posts</RouterLink></li>
            <li><RouterLink @click="emits('hideMenu')" active-class="active" to="/news">News</RouterLink></li>
            <!-- <li><RouterLink @click="emits('hideMenu')" active-class="active" to="/valoraciones">Valoraciones</RouterLink></li> -->
            <li><RouterLink @click="emits('hideMenu')" active-class="active" to="/login">Login</RouterLink></li>
        </ul>
    </div>
</template>

<style scoped>
.menu1{
    z-index: 13;
    top: 72px;
    width: 100%;
    display: flex;
    justify-content: center;
}

li img{
    width: 10rem;
    border-radius: 50%;
    align-content: center;
    padding-left: 3rem;
    margin-left: 1.5rem;
}

li h1, li h2{
    color: white;
    text-align: center;
    padding-top: 1rem;
}

li h2{
    font-size: 1rem;
    margin-bottom: 1rem;
}

ul{
    padding-top: 5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    width: 90%;
}

ul li{
    width: 100%;
    color: black;
    list-style: none;
}

li a{
    display: inline-block;
    width: 100%;
    text-align: center;
    background-color: var(--color-btn);
    padding: 0.5rem;
    text-decoration: none;
    font-weight: bold;
    color: white;
    border-radius: 10px;
    transition: all 0.5s;
}

li a:hover{
    background-color: #DA9724;
    transform: scale(1.05);
    color: black;
}

.active{
    /* animation: brillar 2s infinite ease-in-out; */
    color: black;
    transform: scale(1.05);
}

/* @keyframes brillar{
    0%{
        background-color: rgb(85, 117, 113);
    }
    50%{
        background-color: rgb(85, 117, 113, 0.8);
        transform: scale(1.05);
    }
    100%{
        background-color: rgb(85, 117, 113);
    }
} */
</style>