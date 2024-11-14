<template>
    <section id="AboutProject" class="section about-project">
    <h1>{{ $t('About-Project.Project') }}</h1>
    <p> {{ $t('About-Project.Text') }} </p>
      <div class="video-container">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/qSRvwSn-nZ4"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: "AboutProject",
  };
  </script>
  
  <style scoped>
  .section {
    padding: 40px;
    text-align: center;
    color: rgb(14, 14, 14);
  }
  .about-project {
    background-color: #ffffff;
  }
  .description {
    font-size: 1.2em;
    margin-bottom: 20px;
  }
  .video-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
  }
  </style>
  