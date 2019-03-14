<template>
  <div class="main-page">
    <p>hello</p>
    <div class="board-wrap">
      <markBoard 
        class="board-item"
        v-for="(times, name) in boards" 
        @mark="handleMarked"
        :times="times" 
        :name="name" 
        :key="name"/>
    </div>

    <div class="add-board">
      <input type="text" 
        v-model="newBoardName">
      <button
        @click="handleAdd">
        添加
      </button>
    </div>
  </div>
</template>
<script>
  import Vue from 'vue'
  import markBoard from '../components/markBoard'
  import { updateBoard, getMarkList } from '../utils/request'
  export default {
    components: {
      markBoard
    },
    data() {
      return {
        boards: {},
        newBoardName: ''
      }
    },
    created() {
      getMarkList().then(({status, data}) => {
        if (status === 200) {
          let obj = {}
          data.forEach(item => {
            obj[item.name] = item.times
          })

          this.boards = obj
        }
      })
    },
    methods: {
      handleAdd() {
        updateBoard(this.newBoardName).then(({status, data}) => {
          if (status === 200) {
            this.newBoardName = ''
            Vue.set(this.boards, data.name, data.times)
          }
        })
      },
      handleMarked(name) {
        updateBoard(name).then(({status, data}) => {
          if (status === 200) {
            Vue.set(this.boards, data.name, data.times)
          }
        })
      }
    }
  }
</script>
<style lang="less" scoped>
  .board-wrap {
    display: inline-flex;
    flex-wrap: wrap;
  }
  .board-item {
    flex-grow: 1;
    width: 300px;
    margin: 10px 20px;
  }
</style>
