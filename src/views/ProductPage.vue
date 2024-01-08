<template>

   <h1>
    Product Page
   </h1>
</template>


<script>
  export default {
    name: 'ProductPage',
    props: {
      msg: String
    }
  }
</script>

<style scoped>
  h1 {
    margin: 40px 0 0;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>
