<template>
  <div class="mark-board">
    <i class="icon-delete" @click="handleDelete">❌</i>
    <h2>{{name}} ({{count}})</h2>
    <button @click="handleMark">Mark it!</button>
    <div class="content">
      <p v-for="time in times" :key="time">{{time | parseTime}}</p>
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
    filters: {
      parseTime(val) {
        const time = new Date(val)

        const preFix0 = (num) => num < 10 ? '0' + num : num

        const M = time.getMonth()
        const D = time.getDate()
        const hh = preFix0(time.getHours())
        const mm = preFix0(time.getMinutes())
        const ss = preFix0(time.getSeconds())

        return `${M}/${D} - ${hh}:${mm}:${ss}`
      }
    },
    methods: {
      handleMark() {
        this.$emit('mark', this.name)
      },
      handleDelete() {
        this.$emit('delete', this.name)
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
  .icon-delete {
    float: right;
  }
</style>
