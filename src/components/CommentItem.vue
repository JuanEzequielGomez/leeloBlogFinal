<script setup>

const props = defineProps({
    comment: {},
    typeof: Object,
})

</script>

<template>
    <div class="card">
        <div class="cardHeader">
            <h3>{{ comment.name }}</h3>
            <img :src="comment.photo" alt="foto perfil">
        </div>
        <div class="cardContent">
            <p>📨 {{ comment.text }}</p>
        </div>
    </div>
</template>

<style scoped>

.card {
    position: relative;
    width: 100%;
    border: none;
}

.cardHeader{
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    align-items: center;
    height: 3rem;
    padding: 0.5rem;
    background-color: var(--color-btn);
    border-radius: 5px 10px 10px 0;
}

h3{
    font-weight: bold;
    font-size: 1rem;
    padding-top: 0.5rem;
    padding-left: 1rem;
}

.cardHeader img{
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    border-radius: 0 10px 0 0;
    z-index: 1;
}

.cardContent {
    border: 1px solid pink;
    border-radius: 0 0 10px 10px;
    padding: 0.5rem;
}

</style>