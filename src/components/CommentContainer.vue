<script setup>
import { ref, computed } from 'vue';
import CommentItem from './CommentItem.vue';
import { comments } from '../store/PostStore.js'

const commentsWithId = ref([])
const verMas = ref(false)
const textoP = ref('')

const props = defineProps({
    postId: '',
    typeOf: String,
})


const updateComments = computed(() => {
    commentsWithId.value = comments.value.filter(comment => comment.postId === props.postId)
    if (commentsWithId.value.length == 1) {
        textoP.value = `See coment`
    } else {
        textoP.value = `See the ${commentsWithId.value.length} coments`
    }
})

const verMasMenos = () => {
    verMas.value = !verMas.value
    if (verMas.value) {
        textoP.value = `Hide`
    } else {
        if (commentsWithId.value.length == 1) {
            textoP.value = `See comment`
        } else {
            textoP.value = `See the ${commentsWithId.value.length} coments`
        }
    }
}

</script>

<template>
    {{ updateComments }}
    <div v-if="commentsWithId.length" class="commentContainer">
        <p @click="verMasMenos" class="verMas">{{ textoP }}</p>

        <CommentItem v-if="verMas" v-for="comment in commentsWithId" :comment="comment" :key="comment.id" />

    </div>
</template>

<style scoped>
.commentContainer {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 10px;
    padding: 10px;
    border-radius: 10px;
}

.verMas {
    color: var(--color-btn);
    cursor: pointer;
    font-weight: 600;
}
</style>