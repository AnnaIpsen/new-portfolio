<template>
  <nav>
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
  <router-view/>
</template>

<script>

export default {
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');

body {
  background-color: #FBF6EF;
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

nav {
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
}
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

</style>
