<template>
  <div id="loading">
    <h3>Sorry to keep you waiting...</h3>
    <loading-flower/>
    <hr/>
  </div>
</template>

<script>
import loadingFlower from "@/components/loadingFlower";
export default {
  name: "loadingComponent",
  components: {loadingFlower}
}
</script>

<style lang="scss" scoped>
#loading {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1000;
  height: 100vh;
  width: 100%;
  background-color: #FBF6EF;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  svg {
    position: relative;
    width: 20rem;
    height: auto;
    margin: 0;
  }

  hr {
    width: 35%;
    margin-top: -1px;
    border: .5px solid #98A589;
  }
}



</style>