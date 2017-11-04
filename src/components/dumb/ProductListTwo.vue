<template>
    <div>
        <ul>
            <li v-for="product in saleProducts">
                <div class="name">{{ product.name }}</div>
                <div class="price">${{ product.price }}</div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        computed: {
            products() {
                return this.$store.state.products;
            },
            saleProducts() {
                return this.$store.getters.saleProducts;
            },
        }
    }
</script>

<style scoped="">
    li {
        color: blue;
    }
</style>
