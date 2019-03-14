<template>
  <div class="mark-board">
    <h2>{{name}} ({{count}})</h2>
    <button @click="handleClick">Mark it!</button>
    <div class="content">
      <p v-for="time in times" :key="time">{{time}}</p>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      times: {
        type: Array,
        default: () => ([])
      },
      name: {
        type: String,
        default: () => ('')
      }
    },
    computed: {
      count() {
        return this.times.length
      }
    },
    methods: {
      handleClick() {
        this.$emit('mark', this.name)
      }
    }
  }
</script>
<style lang="less" scoped>
  .mark-board {
    border: 1px solid #ccc;
    border-radius: 4px;
    .content {
      height: 200px;
      overflow: auto;
    }
  }
</style>
