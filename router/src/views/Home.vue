<template>
    <div>
        <h1>Ini Home nya cuy</h1>
    </div>
</template>

<script>
import { onMounted } from 'vue';

export default {
    setup(props, context)
    {
        onMounted(() => {
            context.emit("id-menu", 1);
        })
    }
}
</script>