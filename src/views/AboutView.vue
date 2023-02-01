<template>
  <div class="about">
    <section class="headings">
      <h1>About me</h1>
      <h2>And why you should hire me</h2>
    </section>
    <section class="aboutSection">
      <article>
        <p>
          Cras non metus eget elit ornare ultricies. Praesent porta tincidunt tempus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam tempus ante odio. Aliquam vestibulum ipsum ut nulla pulvinar pharetra. Vivamus gravida lorem ac orci mattis imperdiet. Fusce odio lectus, rhoncus vel metus vitae, tempus congue purus. Ut finibus ipsum sit amet euismod sagittis. Suspendisse velit nunc, rhoncus sed feugiat quis, volutpat nec sem.
        </p>
        <p>
          Cras non metus eget elit ornare ultricies. Praesent porta tincidunt tempus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam tempus ante odio. Aliquam vestibulum ipsum ut nulla pulvinar pharetra. Vivamus gravida lorem ac orci mattis imperdiet. Fusce odio lectus, rhoncus vel metus vitae, tempus congue purus. Ut finibus ipsum sit amet euismod sagittis. Suspendisse velit nunc, rhoncus sed feugiat quis, volutpat nec sem.
        </p>
        <p>
          Cras non metus eget elit ornare ultricies. Praesent porta tincidunt tempus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam tempus ante odio. Aliquam vestibulum ipsum ut nulla pulvinar pharetra. Vivamus gravida lorem ac orci mattis imperdiet. Fusce odio lectus, rhoncus vel metus vitae, tempus congue purus. Ut finibus ipsum sit amet euismod sagittis. Suspendisse velit nunc, rhoncus sed feugiat quis, volutpat nec sem.
        </p>
        <p>
          Cras non metus eget elit ornare ultricies. Praesent porta tincidunt tempus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam tempus ante odio. Aliquam vestibulum ipsum ut nulla pulvinar pharetra. Vivamus gravida lorem ac orci mattis imperdiet. Fusce odio lectus, rhoncus vel metus vitae, tempus congue purus. Ut finibus ipsum sit amet euismod sagittis. Suspendisse velit nunc, rhoncus sed feugiat quis, volutpat nec sem.
        </p>
      </article>
      <img src="../assets/Anna-Ipsen.jpg">
    </section>
  </div>
</template>

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
  gap: 5rem;
  align-items: flex-start;
}
.aboutSection article p{
  margin-top: 0;
}
.aboutSection img {
  height: 33rem;
  width: auto;
  border-radius: 20px;
}
</style>
