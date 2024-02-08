<template>
  <div class="home">
    <h1 data-aos="fade-up" data-aos-duration="1500">Anna Ipsen</h1>
    <h3 data-aos="fade-up" data-aos-duration="1500">creative frontend developer</h3>
    <flowersSvg id="flowers"/>
    <hr/>
  </div>
  <loadingComponent v-if="isLoading"/>
</template>

<script>
import loadingComponent from "@/components/loadingComponent";
import flowersSvg from "@/components/flowersSvg";
import AOS from "aos"
export default {
  name: 'HomeView',
  components: {
    loadingComponent,
    flowersSvg
  },
  data () {
    return {
      isLoading: true
    }
  },
  mounted() {
    this.isLoading = false
    AOS.init()
  }
}
</script>

<style scoped lang="scss">
.home {
  display: flex block;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 90vh;
}
.home h1, .home h2 {
  margin: .2rem 0;
}
#flowers {
  width: 50vw;
  height: auto;
  margin-top: 1rem;
}
hr {
  width: 80%;
  margin-top: -1px;
  border: 1px solid #98A589;
}

@media only screen and (max-width: 768px) {
  .home {
    height: 100vh;
    overflow: hidden;
    justify-content: end;
    h1 {font-size: 40px}
    h3 {font-size: 12px}
    #flowers {
      height: 55vh;
      width: auto;
      object-position: left bottom;
      margin-top: 3rem;
    }
    hr {width: 100%; margin: 0}

  }
}

</style>
