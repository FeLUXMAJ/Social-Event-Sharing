<template>
  <div class="app">
    <nav-bar></nav-bar>
    <router-view></router-view>
  </div>
</template>

<script>
  import Navbar from './components/dumb/Navbar'
  import ProductListOne from './components/dumb/ProductListOne';
  import ProductListTwo from './components/dumb/ProductListTwo';
export default {
    components: {
        'product-list-one': ProductListOne,
        'product-list-two': ProductListTwo,
        'nav-bar': Navbar
    },
    name: 'app',
    data() {
        return {

        };
    },
}
</script>

<style>

</style>
