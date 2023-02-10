<template>
  <section class="hobby">
    <section class="headings">
      <h1>Hobby projects</h1>
      <h2>photography, adobe illustrator, crochet & baking</h2>
    </section>
    <div class="collage">
      <section class="column">
        <img src="../assets/project-images/moontart.jpg" >
        <img src="../assets/project-images/nz.jpg" >
        <img src="../assets/project-images/citron.png" class="reveal">
        <img src="../assets/project-images/hue.jpg" class="reveal">
        <img src="../assets/project-images/water.jpg" class="reveal">
        <img src="../assets/project-images/gul-kage.jpg" class="reveal">
        <img src="../assets/project-images/paris.jpg" class="reveal">

      </section>
      <section class="column">
        <img src="../assets/project-images/hortensia.jpg" >
        <img src="../assets/project-images/kage.png" >
        <img src="../assets/project-images/nissehue.jpg" class="reveal">
        <img src="../assets/project-images/vin.png" class="reveal">
        <img src="../assets/project-images/minitaerte.jpg" class="reveal">
        <img src="../assets/project-images/croissant.png" class="reveal">

      </section>
      <section class="column">
        <img src="../assets/project-images/bryllupskage.jpg" >
        <img src="../assets/project-images/grapes.jpg" >
        <img src="../assets/project-images/generationer.png" class="reveal">
        <img src="../assets/project-images/halsedisse.jpg" class="reveal">
        <img src="../assets/project-images/vejle.jpg" class="reveal">
        <img src="../assets/project-images/pildskadde.png" class="reveal">
        <img src="../assets/project-images/taerte.jpg" class="reveal">
      </section>
    </div>
  </section>
</template>

<script>
export default {
  name: 'hobbyProjects',
  methods: {
    reveal () {
      const reveals = document.querySelectorAll(".reveal");

      for (let i = 0; i < reveals.length; i++) {
        let windowHeight = window.innerHeight;
        let elementTop = reveals[i].getBoundingClientRect().top;
        let elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add("active");
        } else {
          reveals[i].classList.remove("active");
        }
      }
    }
  },
  mounted () {
    window.addEventListener('scroll', this.reveal);
  }
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
  gap: 2rem;
}
.column {
  flex: 23%;
}

.column img {
  margin-top: 2rem;
  width: 100%;
  border-radius: 20px;
}

.reveal{
  position: relative;
  transform: translateY(150px);
  opacity: 0;
  transition: ease-in .5s;
}
.reveal.active{
  transform: translateY(0);
  opacity: 1;
  animation: fade-buttom .5s ease-in;
}
@keyframes fade-bottom {
  0% {
    transform: translateY(50px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

</style>