<template>
  <div class="home">
    <h1>Anna Ipsen</h1>
    <h3>creative frontend developer</h3>
        <img id="flowers" src="../assets/blomsterPng.png">
    <hr/>
  </div>
</template>

<script>

export default {
  name: 'HomeView',
  components: {

  }
}
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 83%;
}
.home h1, .home h2 {
  margin: .2rem 0;
}
#flowers {
  width: 50vw;
}
hr {
  width: 80%;
  margin-top: -1px;
  border: .5px solid #98A589;
}

</style>
