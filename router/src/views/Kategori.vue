<template>
    <div>
        <h1>Kategori</h1>
        <div class="flex-container">
        <div v-for="kategori in data" :key="kategori.id" class="card" >
            <img :src="getimgSrc(kategori.img)" alt="Category Image" class="card-image">
            <router-link class="container" :to="{name: 'DetailDua', params:{id_kategori: kategori.id}}">
                <h4>{{ kategori.nama }}</h4>
            </router-link>
        </div>
    </div>
    </div>
</template>
<script>
import { onMounted, reactive } from 'vue';
import { kategori } from '@/assets/Kategori';

export default {
    setup(props, context)
    {
        const data = reactive(kategori.kategori);

        const getimgSrc = (imgFileName)=>{
            return '../src/assets/img/' + imgFileName + '';
        }

        onMounted(() => {
            context.emit("id-menu", 5);
        });

        return{
            data,
            getimgSrc
        }
    }
}
</script>
<style scoped>
.flex-container{
    display: flex;
}
.card{
    box-shadow: 0 4px 8px 0 rgb(0, 0, 0, 0.2);
    transition: 0.3s;
    margin: 10px;
    min-width: 200px;
    cursor: pointer;
}

.card:hover{
    box-shadow: 0 8px 16px 0 rgb(0, 0, 0, 0.2);
}

h4{
    margin: 10px;
}
.container{
    padding: 2px 16px;
}

.card-image {
  width: 100%;
  height: 200px; /* Sesuaikan tinggi gambar sesuai kebutuhan */
  object-fit: cover;
}
</style>