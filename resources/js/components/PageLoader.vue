<template>
    <div class="loader">
        <spring-spinner
            :animation-duration="3000"
            :size="100"
            color="#ffffff"
        />
    </div>
</template>

<script>
    import { SpringSpinner } from 'epic-spinners';

    export default {
        name: 'PageLoader',
        components: {
            SpringSpinner
        },
        mounted() {
            this.$emit('open-loader');
        },
        destroyed() {
            this.$emit('close-loader');
        }
    };
</script>
