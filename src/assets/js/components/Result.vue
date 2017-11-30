<template>
  <div>
    {{form}}
    {{msg}}
    hi
  </div>
</template>

><script>
export default {
  data: function () {
      return {
          form: "",
          msg: 'Hey Nic Raboy'
      }
  },
  created() {
      this.form = $route.params.form;
  }
}
</script>
