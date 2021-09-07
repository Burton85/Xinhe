<template>
    <div class="index">
        <div class="head">
            <div class="head__logo">
                <img :src="logo" alt="logo">
            </div>
            <h1 class="head__tit">{{title}}</h1>
            <h2 class="head__quote">{{quote}}</h2>
        </div>
        <ul class="social">
            <li><img src="@/assets/icon/youtube.svg" alt="youtube"></li>
            <li><img src="@/assets/icon/instagram.svg" alt="instagram"></li>
            <li><img src="@/assets/icon/facebook.svg" alt="facebook"></li>
            <li><img src="@/assets/icon/email.svg" alt="gmail"></li>
            <li><img src="@/assets/icon/tiktok.svg" alt="tiktok"></li>
            <li><img src="@/assets/icon/twitch.svg" alt="twitch"></li>
            <li><img src="@/assets/icon/spotify.svg" alt="spotify"></li>
        </ul>
        <div class="btns">
            <a :href="lastvideo" class="btn"><span></span>最新影片</a>
            <a href="https://open.spotify.com/show/0sSxQ6E25Od1Bb6OdcY8lV" class="btn">Podcast</a>
        </div>
    </div>
</template>
<script>
import { toRefs, reactive } from "vue";
import logo from '@/assets/img/logo.jpg'
import axios from "axios";

const getData = async () => {
    const lastvideo = await axios
        .get("https://trello.com/card/613788c23e2baf86542d49cc/lastest-viedo.json")
        .then(function(response) {
            console.log(response);
            return response.data.desc;
        })
        .catch(function(error) {
            console.log(error);
        });
    let logo,title,quote;
    await axios
        .get("https://trello.com/card/61377c62ab23184f4b923284/logo.json")
        .then(function(response) {
            console.log(response);
            logo = response.data.cover.scaled[2].url;
            title= response.data.name;
            quote= response.data.desc;
        })
        .catch(function(error) {
            console.log(error);
        });
    return {lastvideo, logo, title, quote};
};

export default {
    name: "index",
    setup() {
        // let loadImg = ref(false);
        let state = reactive({
            title: 'XIN HE',
            quote: 'I MAKE THINGS ON THE INTERNET.',
            logo: logo,
            lastvideo: 'https://www.youtube.com/watch?v=gXV7pErUKxU&ab_channel=XINHE',
        });
        getData().then((item) => {
            state.lastvideo = item.lastvideo;
            state.logo = item.logo;
            state.title = item.title;
            state.quote = item.quote;
            
        });
        return {
            // loadImg,
            ...toRefs(state),
        };
    },
    mounted() {
        setTimeout(() => {
            this.loadImg = true;
        }, 1000);
    },
};
</script>
