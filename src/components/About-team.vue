<template>
    <section id="AboutTeam" class="section about-team">
    <h1>{{ $t('About-team.Project') }}</h1>
    <p> {{ $t('About-team.Text') }} </p>
    
      <div class="video-container">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/kqvg1FP5PLg"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: "AboutTeam",
  };
  </script>
  
  <style scoped>
  .section {
    padding: 40px;
    text-align: center;
    color: #333333;
  }
  .about-team {
    background-color: #00BFB2;
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
  