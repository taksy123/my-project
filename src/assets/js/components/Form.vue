<template>
  <div>
  <span> 生徒</span><br>
    <div>
      名前
      <input class="input" v-model="form.name" placeholder="名前"><br>
      学校名
      <input class="input" v-model="form.school" placeholder="学校"><br>
      <button @click="createForm">フォームを作る</button>
    </div>
    <hr>
    <div>
      名前: {{finalform.name}}<br>
      学校: {{finalform.school}}<br>
    </div>
  </div>
</template>

<script>
export default {
  data: function(){
    return{
      finalform:"",
      form: [
        {name: '', school:''}
      ]
    }
  },
  methods: {
    createForm(){
      this.finalform = this.form
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

