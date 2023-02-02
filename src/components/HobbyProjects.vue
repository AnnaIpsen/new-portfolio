<template>
  <section class="hobby">
    <section class="headings">
      <h1>Hobby projects</h1>
      <h2>photography, adobe illustrator, crochet & baking</h2>
    </section>
    <div class="row">
      <section class="column">
        <img src="../assets/images/tærte.jpg">
        <img src="../assets/images/IMG_5566.jpg">
        <img src="../assets/images/citron-chris.png">
        <img src="../assets/images/hue.jpg">
        <img src="../assets/images/DSC_2628.jpg">

      </section>
      <section class="column">
        <img src="../assets/images/CSC_3410.jpg">
        <img src="../assets/images/kage.png">
        <img src="../assets/images/nissehue.jpg">
        <img src="../assets/images/vin.png">
        <img src="../assets/images/barnevogn.jpg">

      </section>
      <section class="column">
        <img src="../assets/images/bryllupskage.jpg">
        <img src="../assets/images/DSC_3342.jpg">
        <img src="../assets/images/generationer-mormor.png">
        <img src="../assets/images/halsedisse.jpg">
        <img src="../assets/images/IMG_7131.jpg">

      </section>
      <section class="column">
        <img src="../assets/images/pildskadde.png">
        <img src="../assets/images/tærte2.jpg">
        <img src="../assets/images/croissant-ulla.png">
        <img src="../assets/images/paris.jpg">
        <img src="../assets/images/gul-kage.jpg">

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
.row {
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