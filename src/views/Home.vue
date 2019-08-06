<template>
  <div class="home">
    <comHeader/>
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
