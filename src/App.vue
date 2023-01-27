<template>
  <nav>
    <router-link to="/"><img src="./assets/logo.png"></router-link>
    <router-link to="/about">About me</router-link>
    <router-link to="/projects">Projects</router-link>
  </nav>
  <router-view/>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');

body {
  background-color: #FBF6EF;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #98A589;
  margin: 2rem 4rem;
}

h1, h2, h3, h4, nav {
  font-family: "Playfair Display", sans-serif;
  text-transform: uppercase;
}
h1, h2 {
  font-weight: 400;
  letter-spacing: .3rem;
}
h1 {font-size: 30px;}
h2 {font-size: 16px;}
p {
  font-family: 'Montserrat', sans-serif;
  font-size: 12px;
}

nav {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4rem;
}

nav img {
  height: 2rem;
}

nav a {
  font-weight: 500;
  color: #98A589;
  text-decoration: none;
  text-transform: uppercase;
}

nav a:nth-child(n+2).router-link-exact-active {
  border-bottom: #98A589 solid 1px;
}
</style>
