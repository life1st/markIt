<template>
  <div class="connect-db">
    <input type="text" v-model="pwd">
    <button @click="handleClick">Connect</button>
  </div>
</template>
<script>
  import { connectDB } from '../utils/request'

  export default {
    data() {
      return {
        pwd: ''
      }
    },
    methods: {
      handleClick() {
        connectDB(this.pwd).then(({status, data}) => {
          console.log(data)

          if (status === 200) {
            this.pwd = '好了 可以了'
          }
        })
      }
    }
  }
</script>

