<template>
  <div id='MainComponent' class='container-fluid'>
    <nav class="navbar navbar-default">
      <div class="container-fluid">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" @click="showNavbar=!showNavbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" role="button">Todo-Fancy</a>
        </div>
        <collapse class="navbar-collapse" v-model="showNavbar">
        </collapse>
      </div>
    </nav>
    <div class='row'>
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {
  name: 'MainComponent',
  data: () => ({
    showNavbar: true
  })
}
</script>
<style scoped>
</style>
