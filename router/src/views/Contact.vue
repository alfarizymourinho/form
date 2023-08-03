<template>
    <div>
        <h1>Hubungi Gua cuy</h1>
    </div>
</template>

<script>
import { onMounted } from 'vue';

export default {
    setup(props, context)
    {
        onMounted(() => {
            context.emit("id-menu", 2);
        })
    }
}
</script>