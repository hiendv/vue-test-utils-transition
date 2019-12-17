<template>
  <div>
    Show: {{ show }}
    <transition
    v-on:before-enter="beforeEnter"
    v-on:enter="enter"
    v-on:after-enter="afterEnter"

    v-on:before-leave="beforeLeave"
    v-on:leave="leave"
    v-on:after-leave="afterLeave"
    >
      <p v-if="show">qux</p>
    </transition>
  </div>
</template>
<script>
export default {
  props: {
    beforeEnter: {
      type: Function,
      default: function (el) {
        console.log('beforeEnter')
      }
    },
    enter: {
      type: Function,
      default: function (el, done) {
        console.log('enter')
        done()
      }
    },
    afterEnter: {
      type: Function,
      default: function (el) {
        console.log('afterEnter')
      }
    },
    beforeLeave: {
      type: Function,
      default: function (el) {
        console.log('beforeLeave')
      }
    },
    leave: {
      type: Function,
      default: function (el, done) {
        console.log('leave')
        done()
      }
    },
    afterLeave: {
      type: Function,
      default: function (el) {
        console.log('afterLeave')
      }
    }
  },
  data () {
    return {
      show: true
    }
  }
}
</script>
