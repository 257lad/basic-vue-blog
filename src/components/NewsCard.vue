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
    </div>
</template>
<script>
export default {
    props: ['news_item'],
}
</script>
<style></style>