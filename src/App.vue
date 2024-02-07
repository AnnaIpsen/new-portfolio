<template>
  <nav id="desktop">
    <section class="links">
      <router-link to="/"><img src="./assets/blomsterlogo.png"></router-link>
      <router-link to="/about">About me</router-link>
      <router-link to="/projects">Projects</router-link>
      <router-link to="/cv">CV</router-link>
    </section>
    <section class="logos">
      <a href="https://www.linkedin.com/in/anna-ipsen/"><img src="./assets/linkedin-logo.png"></a>
      <a href="https://github.com/AnnaIpsen"><img src="./assets/github-logo.png"></a>
    </section>
  </nav>

  <nav id="mobile">
    <section id="menu" @click="handleToggleMenu">
      <img src="./assets/menu.svg" >
    </section>

    <section id="navContent" :class="{ open: menuOpen }">
      <section class="links">
        <router-link to="/"><img src="./assets/blomsterlogo.png"></router-link>
        <router-link to="/about">About me</router-link>
        <router-link to="/projects">Projects</router-link>
        <router-link to="/cv">CV</router-link>
      </section>
      <section class="logos">
        <a href="https://www.linkedin.com/in/anna-ipsen/"><img src="./assets/linkedin-logo.png"></a>
        <a href="https://github.com/AnnaIpsen"><img src="./assets/github-logo.png"></a>
      </section>
    </section>

  </nav>
  <router-view/>
</template>

<script>

export default {
  data() {
    return {
      menuOpen: false,
    }
  },
  methods: {
    handleToggleMenu() {
      this.menuOpen = !this.menuOpen
    },
  },
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');

body {
  background-color: #FBF6EF;
  margin: 0;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #98A589;
  margin: 4% 20% 4% 4%;
}

h1, h2, h3, h4, nav, button {
  font-family: 'Playfair Display', sans-serif;
  text-transform: uppercase;
}
h1, h2, h3, button {
  font-weight: 400;
  letter-spacing: .3rem;
}
h1 {font-size: 50px;}
h2 {font-size: 22px;}
h3, a {font-size: 16px;}
button {font-size: 12px;}
p {
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
  line-height: 200%;
  color: #2E2E2E;
}

@media only screen and (max-width: 768px) {
  #app {margin: 0}
  #desktop {display: none}
  #mobile {
    #menu {
      position: absolute;
      top: 2rem;
      right: 2rem;
      z-index: 2;
      background: #98A589;
      border-radius: 100px;
      padding: 1rem;
      box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

      img {
        width: 2rem;
        height: 2rem;
        object-position: center;
        display: block;
      }
    }

    #navContent {
      height: 100vh;
      width: 100%;
      position: absolute;
      left: 0;
      top: 0;
      z-index: 1;
      background: #FBF6EF;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 4rem;
      opacity: 0;
      transform: translate(100%, 0);
      transition: all 1s cubic-bezier(0.68, -0.6, 0.32, 1.6) 0s;

      &.open {
        opacity: 1;
        transform: translate(0,0);
      }

      .links {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 4rem;
        img {
          width: 8rem;
        }

        a {
          font-weight: 500;
          color: #98A589;
          text-decoration: none;
          text-transform: uppercase;
          padding-bottom: .5rem;
        }
      }

      .logos {
        display: flex;
        flex-direction: row;
        justify-content: center;
        gap: 2rem;
        img {
          height: 2rem;
          width: auto;
        }
      }

      nav a:nth-child(n+2).router-link-exact-active {
        border-bottom: #98A589 solid 1px;
      }

    }
  }
}

@media only screen and (min-width: 769px) {
  #mobile {display: none}
  #desktop {
    width: fit-content;
    height: 85%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: fixed;
    top: 0;
    right: 0;
    z-index: 2;
    overflow-x: hidden;
    padding: 4%;
    background-color:#FBF6EF;
    .links {
      display: flex;
      flex-direction: column;
      gap: 4rem;
    }
     .links img {
      width: 10rem;
    }

    .links a {
      font-weight: 500;
      color: #98A589;
      text-decoration: none;
      text-transform: uppercase;
      padding-bottom: .5rem;
      &:nth-child(n+2):hover {
        border-bottom: #98A589 solid 1px
      }
    }
    nav a:nth-child(n+2).router-link-exact-active {
      border-bottom: #98A589 solid 1px;
    }

    .logos {
      display: flex;
      flex-direction: row;
      gap: 2rem;
    }
    .logos img {
      height: 2rem;
      width: auto;
    }
  }

}


</style>
