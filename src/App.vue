<template>
  <nav>
    <router-link to="/">Home</router-link> |
  </nav>
  <router-view/>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap');
#app {
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100vw;
  height: max-content;
  background-color:#F8F8FA;
  padding-left: 20vw;
  padding-right: 20vw;
  padding-top: 8vh;
  padding-bottom: 8vh;

}
input, textarea{
  -webkit-appearance: none;
}
nav {
  padding: 30px;
  display: none;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
