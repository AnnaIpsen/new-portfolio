<template>
  <section class="card" :class = "{ reverse : reversePosition }">
    <section>
      <h2>{{ projectName }}</h2>
      <p> {{ projectDescription }}</p>
      <div class="buttons">

        <button  v-if="demoUrl" @click="openUrl(this.demoUrl)" class="button">
          <div class="button__line"></div>
          <div class="button__line"></div>
          <span class="button__text">Demo</span>
        </button>

        <button  v-if="gitHubUrl" @click="openUrl(this.gitHubUrl)" class="button">
          <div class="button__line"></div>
          <div class="button__line"></div>
          <span class="button__text">Code</span>
        </button>

      </div>
    </section>
    <img id="project" :src="resolvePath(img)">
  </section>
</template>

<script>

export default {
  name: "ProjectCard",
  props: {
    projectName: String,
    projectDescription: String,
    gitHubUrl: String,
    demoUrl: String,
    img: String,
    reversePosition: Boolean
  },
  methods: {
    openUrl(url){
      window.open(url, '_blank');
    },
    resolvePath(file) {
      return require(`@/assets/work-project-images/${file}`)
    }
  }
}
</script>

<style scoped lang="scss">
.card {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 3rem;
  margin-bottom: 5rem;
}
.reverse {
  flex-direction: row-reverse !important;
  justify-content: flex-end;
}

.card section h2 {
  margin-top: 0;
}
.card section {width: 45%}
.card #project {
  flex-shrink: 0;
  width: 45%;
  height: auto;
  object-fit: cover ;
  border-radius: 20px;
}
.buttons {
  margin-top: 2rem;
  display: flex;
  flex-direction: row;
  gap: 2rem;
}
.buttons .button {
  cursor: pointer;
  border: none;
  background: none;
  border-radius: 300px;
  position : relative ;
  z-index : 0 ;
  width : 180px;
  height : 56px ;
  text-decoration : none ;
  font-size : 14px ;
  font-weight : 400 ;
  color : #98A589 ;
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

@media only screen and (max-width: 844px) {
  .card, .reverse {
    flex-direction: column-reverse !important;
  }
  .card {
    align-items: normal;
    gap: 2rem;
    margin-bottom: 6rem;
    section{width: 100%}
    #project {
      width: 100%;
    }
  }

}

@media only screen and (orientation: landscape) and (max-width: 844px) {
  .card, .reverse {
    flex-direction: column-reverse !important;
  }
  .card {
    align-items: center;
    gap: 2rem;
    max-width: 600px;
    margin-bottom: 4rem;
  }
}

</style>