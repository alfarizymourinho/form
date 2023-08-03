<template>
    <h1>Detail {{ detail.nama }}</h1>
    <h4>Id Produk : {{ detail.id }}</h4>
    <h4>Nama Produk: {{ detail.nama }}</h4>
    <h4>Harga Produk: {{ detail.harga }}</h4>
    <h4>Deskripsi : {{ detail.deskripsi }}</h4>
    <h4>Id Kategori : {{ detail.nid }}</h4>
</template>
<script>
import { produk } from '@/assets/Produk';

export default{
    props:[
        "id_produk"
    ],
    setup(props)
    {
        const detail = produk.produk.find((item)=>{
            return item.id == props.id_produk;
        });
        return{
            detail
        }
    }
}
</script>