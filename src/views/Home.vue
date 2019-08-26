<template>
  <div class="home">
    <comHeader/>
    <!-- <router-view></router-view> -->
<div class="home">
  我是首页
</div>
    <comFooter/>
  </div>
</template>

<script>
import comHeader from '../components/comHeader.vue'
import comFooter from '../components/comFooter.vue'
export default {
  name: 'home',
  components: {
  comHeader,
  comFooter,
  }
}
</script>
