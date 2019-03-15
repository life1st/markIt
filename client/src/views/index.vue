<template>
  <div class="main-page">
    <connectDB />
    <p>hello</p>
    <div class="add-board">
      <input type="text" 
        v-model="newBoardName">
      <button
        @click="handleAdd">
        添加
      </button>
    </div>
    <div class="board-wrap">
      <markBoard 
        class="board-item"
        v-for="(times, name) in boards" 
        @mark="handleMarked"
        @delete="handleDelete"
        :times="times" 
        :name="name" 
        :key="name"/>
    </div>
  </div>
</template>
<script>
  import Vue from 'vue'
  import markBoard from '../components/markBoard'
  import connectDB from '../components/connectDB'

  import { updateBoard, getMarkList, deleteBoard } from '../utils/request'
  export default {
    components: {
      markBoard, connectDB
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
      },
      handleDelete(name) {
        const bool = confirm('sure to delete this board?')
        if (bool) {
          deleteBoard(name).then(({status, data}) => {
            if (status === 200) {
              Vue.delete(this.boards, name)
            }
          })
        }
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
