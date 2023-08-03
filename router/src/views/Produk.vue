<template>
    <div>
        <h1>Produk</h1>
        <div class="flex-container">
        <div v-for="produk in state" :key="produk.id" class="card">
            <img :src="getimgSrc(produk.img)" alt="Category Image" class="card-image">
            <router-link class="container" :to="{name: 'Detail', params:{id_produk: produk.id}}">
            <h4>Id Produk : {{ produk.id }}</h4>
            <h4>Nama Produk: {{ produk.nama }}</h4>
            <h4>Harga Produk: {{ produk.harga }}</h4>
            <h4>Deskripsi : {{ produk.deskripsi }}</h4>
            <h4>Id Kategori : {{ produk.nid }}</h4>
            </router-link>
        </div>
    </div>
    </div>
</template>
<script>
import { onMounted, reactive } from 'vue';
import { produk } from '@/assets/Produk';

export default {
    setup(props, context)
    {
        const getimgSrc = (imgFileName)=>{
            return '../src/assets/img/' + imgFileName + '';
        };

        const state = reactive(produk.produk);

        onMounted(() => {
            context.emit("id-menu", 4);
        });

        return{
            state,
            getimgSrc
        }
    }
}
</script>
<style scoped>
.flex-container{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
.card{
    box-shadow: 0 4px 8px 0 rgb(0, 0, 0, 0.2);
    transition: 0.3s;
    margin: 10px;
    min-width: 200px;
    cursor: pointer;
    flex: 0 0 calc(25% - 20px);
}

.card:hover{
    box-shadow: 0 8px 16px 0 rgb(0, 0, 0, 0.2);
}

h4{
    margin: 10px;
}

.card-image {
  width: 100%;
  height: 200px; /* Sesuaikan tinggi gambar sesuai kebutuhan */
  object-fit: cover;
}

.container{
    padding: 2px 16px;
}
</style>