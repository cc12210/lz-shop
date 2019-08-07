<template>
  <div class="home">
    <comHeader/>
    <router-view></router-view>
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
