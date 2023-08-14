<template>
  <div class="home" data-aos="fade-up" data-aos-duration="2000">
    <h1>Anna Ipsen</h1>
    <h3 >creative frontend developer</h3>
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
  margin-top: 1rem;
}
hr {
  width: 80%;
  margin-top: -1px;
  border: 1px solid #98A589;
}

</style>
