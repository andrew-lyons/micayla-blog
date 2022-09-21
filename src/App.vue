<template>
  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
  </nav>

  <header>
    <h1>
      Micayla
    </h1>
  </header>

  <router-view/>
</template>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
</style>

<style lang="scss">
body {
  font-family: 'Montserrat', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: rgb(249, 247, 245);
  margin: 0;
  padding: 0;
}

header {
  h1 {
    font-size: 60px;
    font-weight: 100;
    letter-spacing: 5px;
    line-height: 2.5;
    margin-bottom: 10px;
    font-family: 'Montserrat', sans-serif;
  }
}

nav {
  display: flex;
  justify-content: center;
  color: #5d5d5d;
  font-weight: 600;
  text-align: center;
  background: #ffffff;
  text-transform: uppercase;
  letter-spacing: 5px;
  font-size: 12px;

  a {
    color: #5d5d5d;
    font-weight: 600;
    text-align: center;
    background: #ffffff;
    text-transform: uppercase;
    letter-spacing: 5px;
    font-size: 12px;
    padding: 20px;
    text-decoration: none;
  }
}

</style>
