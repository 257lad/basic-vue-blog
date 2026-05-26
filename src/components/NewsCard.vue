<template>
    <div class="news-card">
        <img :src="news_item.img" alt="">
        <div>
            <span class="subtitle">{{ news_item.subtitle }}</span>
            <h2>{{ news_item.title }}</h2>
            <p>{{ news_item.description }}</p>
        </div>
        <div class="btns">
            <span v-for="topic in news_item.topics" :key="news_item.id">
                {{ topic }}
            </span>
        </div>
        <div class="link-button">
            <button @click="$router.push(`/read/${news_item.id}`)" >
                <i class="fa-solid fa-arrow-up-right-from-square"></i>
                Read article
            </button>
        </div>
    </div>  
</template>
<script>
export default {
    props: ['news_item'],
}
</script>
<style scoped>
    .news-card {
        position: relative;

        &:hover .link-button{
            display: flex;
        }

        .link-button{
            display: none;
            align-items: center;
            justify-content: center;
            height: 100%;
            width: 100%;
            position: absolute;
            background-color: rgba(0, 0, 255, 0.4);

            button {
                cursor: pointer;
                padding: 10px 15px;
                border-radius: 10px;
                border: 1px solid;
            }
        }
    }
</style>