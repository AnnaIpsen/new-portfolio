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
        <button class="button">
          <div class="button__line"></div>
          <div class="button__line"></div>
          <router-link to="/projects/work" class="button__text">See all my projects</router-link>
        </button>
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

<style scoped lang="scss">
.about {
  display: flex;
  flex-direction: column;
  gap: 4rem;
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
    article p{
      margin-top: 0;
    }
    img {
      height: 31rem;
      width: auto;
      border-radius: 20px;
    }
  }

  .button {
    cursor: pointer;
    border: none;
    background: none;
    margin-top: 2rem;
    border-radius: 300px;
    position : relative ;
    z-index : 0 ;
    width: 100%;
    height : 56px ;
    letter-spacing : 2px ;
    transition : all .3s ease ;
    &::before{
      top : 0 ;
      left : 54px ;
      width : calc( 100% - 56px * 2 - 16px ) ;
    }
    &::after{
      top : 0 ;
      right : 54px ;
      width : 8px ;
    }
    &:hover{
      letter-spacing : 6px ;
      font-size: 16px;
    }
    &:hover::before,
    &:hover .button__text::before{
      width : 8px ;
    }
    &:hover::after,
    &:hover .button__text::after{
      width : calc( 100% - 56px * 2 - 16px ) ;
    }
    .button__text{
      display : flex ;
      justify-content : center ;
      align-items : center ;
      text-decoration: none;
      font-size : 14px ;
      font-weight : 400 ;
      color : #98A589 ;
      width : 100% ;
      height : 100% ;
      &::before{
        bottom : 0 ;
        right : 54px ;
        width : calc( 100% - 56px * 2 - 16px ) ;
      }
      &::after{
        bottom : 0 ;
        left : 54px ;
        width : 8px ;
      }
    }
    &::after, &::before, .button__text::before,
    .button__text::after{
      content : '' ;
      position : absolute ;
      height : 1px ;
      border-radius : 2px ;
      background : #98A589 ;
      transition : all .5s ease ;
    }
    .button__line{
      position : absolute ;
      top : 0 ;
      width : 56px ;
      height : 100% ;
      overflow : hidden ;
      &::before{
        content : '' ;
        position : absolute ;
        top : 0 ;
        width : 150% ;
        height : 100% ;
        box-sizing : border-box ;
        border-radius : 300px ;
        border : solid 1px #98A589 ;
      }
      &:nth-child(1),
      &:nth-child(1)::before{
        left : 0 ;
      }
      &:nth-child(2),
      &:nth-child(2)::before{
        right : 0 ;
      }
    }


  }
}

@media only screen and (max-width: 767px) {
  .about {
    margin: 9rem 1rem;
    gap: 1rem;
    .headings {
      text-align: center;
    }
    .aboutSection {
      flex-direction: column-reverse;
      gap: 2rem;
      img {
        width: 100%;
        height: 17rem;
        object-fit: cover;
      }
    }
  }
}
@media only screen and (min-width: 767px) and (max-width: 844px) {
  .about {
    margin: 9rem 1rem;
    gap: 1rem;
    .headings {
      text-align: center;
    }
    .aboutSection {
      flex-direction: column-reverse;
      gap: 2rem;
      img {
        width: 100%;
        height: 30rem;
        object-fit: cover;
      }
    }
  }
}


</style>
