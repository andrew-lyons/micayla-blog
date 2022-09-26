<template>
  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/blog">Blog</router-link>
    <router-link to="/store">Store</router-link>
  </nav>

  <header>
    <h1>
      The Marigold Project
    </h1>
  </header>

  <router-view />

  <footer>
    <div>
      <div class="column">
        <h4>The Marigold Project</h4>

        <p>Something stigma, something something</p>
      </div>

      <div class="column logo">
        <img src="https://jane.brandingmypurpose.com/wp-content/uploads/2022/06/submark-150x150.png" alt="">
      </div>

      <div class="column">
        <h4>Get In Touch</h4>
        <a href="mailto:mhupp21@gmail.com"><font-awesome-icon icon="envelope" /></a>
        <a><font-awesome-icon icon="fa-brands fa-facebook" /></a>
        <a><font-awesome-icon icon="fa-brands fa-instagram" /></a>
      </div>
    </div>
  </footer>
</template>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=MonteCarlo&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap');
</style>

<style lang="scss">
:root {
  --white: #FFFFFF;
  --primary: #3B0D11;
  --primary-light: #6A3937;

  --width: 79.166vw;
}

* {
  box-sizing: border-box;
  color: var(--primary);
  fill: var(--primary);
}

body {
  font-family: 'Montserrat', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background: #FFEBD9;
  margin: 0;
  padding: 0;
  position: relative;
}

#app {
  overflow: hidden;
}

nav {
  position: fixed;
  width: 100%;
  z-index: 4;
  display: flex;
  justify-content: center;
  font-weight: 600;
  text-align: center;
  background: var(--white);
  text-transform: uppercase;
  letter-spacing: 5px;
  font-size: 12px;

  a {
    font-weight: 600;
    text-align: center;
    background: var(--white);
    text-transform: uppercase;
    letter-spacing: 5px;
    font-size: 12px;
    padding: 20px;
    text-decoration: none;

    &.router-link-exact-active {
      border-bottom: 1px solid var(--primary);
    }
  }
}

header {
  @media screen and (max-width: 768px) {
    margin-top: 50px;
  }

  h1 {
    display: inline-block;
    font-size: 7.15vw;
    font-weight: 100;
    letter-spacing: 5px;
    line-height: 2;
    margin-bottom: 10px;
    font-family: 'Montserrat', sans-serif;
    cursor: default;

    @media screen and (min-width: 1441px) {
      font-size: 103px;
    }

    @media screen and (max-width: 600px) {
      font-size: 64px;
      line-height: 72px;
      margin-bottom: 16px;
      padding: 0 16px;
    }
  }
}

footer {
  position: relative;
  z-index: 1;
  background: var(--white);
  clear: both;
  border-top: 0;
  width: var(--width);
  margin: 0 auto;
  padding: 60px 0;

  &:before {
    content: " ";
    display: block;
    position: absolute;
    top: 0;
    bottom: 0;
    width: 150vw;
    left: -25vw;
    right: -25vw;
    background-color: var(--white);
    box-shadow: 0 0 20px 15px var(--white);
    z-index: -1;
  }

  @media screen and (max-width: 768px) {
    margin-top: 70px;
  }

  > div {
    display: flex;
    justify-content: space-between;
    margin: 0 auto;

    @media screen and (max-width: 768px) {
      justify-content: flex-end;
      flex-wrap: wrap;
    }

    .column {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      align-self: center;
      width: 33%;

      h4 {
        margin-bottom: 0;
        background: transparent;
        font-family: 'Montserrat', sans-serif;
        font-size: 15px;
        letter-spacing: 3px;
        font-weight: 600;
        text-align: center;
        text-transform: uppercase;
        padding: 12px 0px;
        width: 100%;
      }

      p {
        width: 100%;
      }

      a {
        cursor: pointer;
        margin-right: 12px;
        width: 25px;
        height: 25px;

        svg {
          width: 100%;
          height: 100%;

          path {
            transition: fill 0.25s;
          }
        }

        &:last-child {
          margin-right: 0;
        }

        &:hover {
          svg {
            path {
              fill: grey;
            }
          }
        }
      }

      @media screen and (max-width: 768px) {
        width: 60%;
      }

      &.logo {
        @media screen and (max-width: 768px) {
          position: absolute;
          justify-content: flex-start;
          left: 0;

          img {
            width: 26.04vw;
          }
        }
      }
    }
  }
}
</style>
