<template>
  <div>
    Show: {{ show }}
    <transition>
      <p v-if="show">qux</p>
    </transition>
  </div>
</template>
<script>
export default {
  data () {
    return {
      show: true
    }
  }
}
</script>
