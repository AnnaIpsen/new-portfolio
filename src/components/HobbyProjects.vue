<template>
  <section class="hobby">
    <section class="headings">
      <h1>Hobby projects</h1>
      <h3>photography, adobe illustrator, crochet & baking</h3>
    </section>
    <div class="collage">
      <section class="column">
        <img data-aos="fade-up" data-aos-duration="1500" src="../assets/project-images/moontart.jpg">
        <img data-aos="fade-up" data-aos-duration="1500" src="../assets/project-images/nz.jpg" >
        <img data-aos="fade-up" data-aos-duration="1500" src="../assets/project-images/citron.png">
        <img data-aos="fade-up" data-aos-duration="1500" src="../assets/project-images/jordbaertærter.jpg">
        <img data-aos="fade-up" data-aos-duration="1500" src="../assets/project-images/hue.jpg" >
        <img data-aos="fade-up" data-aos-duration="1500" src="../assets/project-images/flasker.jpg">
        <img data-aos="fade-up" data-aos-duration="1500" src="../assets/project-images/gul-kage.jpg">
        <img data-aos="fade-up" data-aos-duration="1500" src="../assets/project-images/paris.jpg">

      </section>
      <section class="column">
        <img data-aos="fade-up" data-aos-duration="1500" src="../assets/project-images/hortensia.jpg" >
        <img data-aos="fade-up" data-aos-duration="1500" src="../assets/project-images/kage.png" >
        <img data-aos="fade-up" data-aos-duration="1500" src="../assets/project-images/solnedgang.jpg">
        <img data-aos="fade-up" data-aos-duration="1500" src="../assets/project-images/nissehue.jpg" >
        <img data-aos="fade-up" data-aos-duration="1500" src="../assets/project-images/amsterdam.jpg">
        <img data-aos="fade-up" data-aos-duration="1500" src="../assets/project-images/vin.png">
        <img data-aos="fade-up" data-aos-duration="1500" src="../assets/project-images/minitaerte.jpg" >
        <img data-aos="fade-up" data-aos-duration="1500" src="../assets/project-images/croissant.png">

      </section>
      <section class="column">
        <img data-aos="fade-up" data-aos-duration="1500" src="../assets/project-images/bryllupskage.jpg" >
        <img data-aos="fade-up" data-aos-duration="1500" src="../assets/project-images/grapes.jpg" >
        <img data-aos="fade-up" data-aos-duration="1500" src="../assets/project-images/generationer.png" >
        <img data-aos="fade-up" data-aos-duration="1500" src="../assets/project-images/halsedisse.jpg">
        <img data-aos="fade-up" data-aos-duration="1500" src="../assets/project-images/vejle.jpg" >
        <img data-aos="fade-up" data-aos-duration="1500" src="../assets/project-images/cykel.jpg">
        <img data-aos="fade-up" data-aos-duration="1500" src="../assets/project-images/pildskadde.png" >
        <img data-aos="fade-up" data-aos-duration="1500" src="../assets/project-images/water.jpg" >
        <img data-aos="fade-up" data-aos-duration="1500" src="../assets/project-images/taerte.jpg">
      </section>
    </div>
  </section>
</template>

<script>
import AOS from "aos"
export default {
  name: 'hobbyProjects',
  mounted() {
    AOS.init()
  }

}
</script>

<style scoped>
.hobby {
  display: flex;
  flex-direction: column;
  gap: 5rem;
}
.headings {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.headings h1, .headings h2{
  margin: .2rem 0;
}
.collage {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
}
.column {
  flex: 23%;
}

.column img {
  margin-top: 2rem;
  width: 100%;
  border-radius: 20px;
  transition: all 0.4s ease-in-out 0s;
}


</style>