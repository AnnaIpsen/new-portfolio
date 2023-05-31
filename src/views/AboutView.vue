<template>
  <loadingComponent v-if="isLoading"/>

  <div class="about">
    <section class="headings">
      <h1>About me</h1>
      <h3>And why you should hire me</h3>
    </section>
    <section class="aboutSection">
      <article>
        <p>
          I’m 27 year old creative frontend developer. I am not only interested in the technical aspect, but also in
          making a design seem alive and create a good experience.  My great passion is to make a connection between
          the creativity and frontend developing.  I feel the best when I can use my flair for digital aesthetics and
          combine it with code. So whenever I make a new application, I do it  with a lot of thought on the design
          as well as the technical aspect.
        </p>
        <p>
          When I develop it is with focus on making the code as readable as possible - that makes it easier for me
          and others. But I also do it with an approach on clean coding, where I always try to make it as simple
          as possible to reach the best possible performance and to avoid any noice.
        </p>
        <p>
          My fellow students describe me as well liked, helpful and a good sparring partner. This is qualities that
          i’m happy to give to my surroundings. Especially sparring is an important part for me, as I believe that
          everyone can learn something from one another.
        </p>
        <p>
          Whenever i’m not developing i like to do a lot of creative things. Since I was little a have always spent
          a lot of time in the kitchen and i still bake many cakes for my self but also for different occasions
          like birthdays and my sisters wedding.
        </p>
        <p>
          I also crochet and knit a lot, mostly for my friends and family's babies, and hats. I love have
          relaxing it is. But my newest hobby is making posters in Adobe Illustrator and going for a walk
          with my camera. Exercise and fun at the same time - whats not to like?
        </p>
        <p>
          All my projects (and hobby projects) can be seen at the projects page.
        </p>
      </article>
      <img src="../assets/Anna-Ipsen.jpg">
    </section>
  </div>
</template>

<script>
import loadingComponent from "@/components/loadingComponent";
export default {
  name: 'AboutView',
  components: {
    loadingComponent
  },
  data () {
    return {
      isLoading: true
    }
  },
  mounted() {
    this.isLoading = false
  }
}
</script>

<style scoped>
.about {
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

.aboutSection {
  display: flex;
  flex-direction: row;
  gap: 4rem;
  align-items: flex-start;
}
.aboutSection article p{
  margin-top: 0;
}
.aboutSection img {
  height: 31rem;
  width: auto;
  border-radius: 20px;
}
</style>
