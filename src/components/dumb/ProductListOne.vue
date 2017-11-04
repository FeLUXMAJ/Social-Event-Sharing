<template>
    <div>
        <ul>
            <li v-for="product in products">
                <p>
                    <div class="name">{{ product.name }}</div>
                    <div class="price">${{ product.price }}</div>
                </p>
            </li>
        </ul>
        <button @click="reducePrice(5)">Reduce Price</button>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';
    import {mapActions} from 'vuex';

    export default {
        computed: {
            products() {
                return this.$store.state.products;
            },
            ...mapGetters([
               'saleProducts',
            ]),
        },

        methods: {
            ...mapActions([
               'reducePrice',
            ]),
        },
    }
</script>

<style scoped="">
    li {
        color: red;
    }
</style>
