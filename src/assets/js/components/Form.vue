<template>
  <div>
    <h2>Create a New Form</h2>
    <form>
      <div>
          <label>名前</label>
          <input type="text" v-model="input" placeholder="名前" @keyup.enter="add()">
      </div>
      <button type="button" @click="add()">Create</button>
    </form>
    <h2>Form List</h2>
    <ul>
        <li v-for="(form, index) in forms" :key="index">
            {{ index }}: {{ form }}
          <button @click="deleteItem(form)">削除</button><br>
        </li>
    </ul>
    <router-link :to="{ path: '/result', params: {forms}}">送信する</router-link>
  </div>
</template>

<script>
  export default {
      data () {
          return {
              forms: [],
              input: ""
          }
      },
      methods: {
          add() {
              this.forms.push(this.input);
              this.input = "";
          },
          deleteItem(){
            this.forms.splice(this.index, 1)
          }
      }
  }
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>

