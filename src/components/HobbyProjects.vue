<template>
  <section class="hobby">
    <section class="headings">
      <h1>Hobby projects</h1>
      <h2>photography, adobe illustrator, crochet & baking</h2>
    </section>
    <div class="collage">
      <section class="column">
        <img src="../assets/project-images/moontart.jpg">
        <img src="../assets/project-images/nz.jpg">
        <img src="../assets/project-images/citron.png">
        <img src="../assets/project-images/hue.jpg">
        <img src="../assets/project-images/water.jpg">

      </section>
      <section class="column">
        <img src="../assets/project-images/hortensia.jpg">
        <img src="../assets/project-images/kage.png">
        <img src="../assets/project-images/nissehue.jpg">
        <img src="../assets/project-images/vin.png">
        <img src="../assets/project-images/minitaerte.jpg">

      </section>
      <section class="column">
        <img src="../assets/project-images/bryllupskage.jpg">
        <img src="../assets/project-images/grapes.jpg">
        <img src="../assets/project-images/generationer.png">
        <img src="../assets/project-images/halsedisse.jpg">
        <img src="../assets/project-images/vejle.jpg">

      </section>
      <section class="column">
        <img src="../assets/project-images/pildskadde.png">
        <img src="../assets/project-images/taerte.jpg">
        <img src="../assets/project-images/croissant.png">
        <img src="../assets/project-images/paris.jpg">
        <img src="../assets/project-images/gul-kage.jpg">

      </section>
    </div>
  </section>
</template>

<script>
export default {
  name: 'hobbyProjects',

}
</script>

<style scoped>
.hobby {
  display: flex;
  flex-direction: column;
  gap: 4rem;
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
  gap: 1rem;
}
.column {
  flex: 23%;
}

.column img {
  margin-top: 1rem;
  width: 100%;
  border-radius: 20px;
}

</style>