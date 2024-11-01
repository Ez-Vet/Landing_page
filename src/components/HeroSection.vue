<template>
  <section id="about" class="hero"> <!-- Agregamos id="about" aquí -->
    <div class="hero-content">
      <!-- Imagen de la mascota -->
      <img src="../assets/dog-cat.png" alt="Dog and Cat" class="hero-image" />

      <!-- Texto descriptivo -->
      <div class="hero-text">
        <h1>{{ $t('Hero.plataform') }}</h1>
        <p>{{ $t('Hero.optimize') }}</p>
        <button class="cta-button">{{ $t('Hero.sesion') }}</button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  width: 99vw;
  height: 99vh;
  background-color: #00BFB2;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin: 0;
  overflow: hidden;
  box-sizing: border-box;
}

.hero-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1400px;
  width: 100%;
  padding: 0 3rem;
  gap: 2rem;
}

.hero-image {
  width: 50%;
  max-width: 600px;
  height: auto;
}

.hero-text {
  flex: 1;
  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.hero-text h1 {
  font-size: 3rem;
  line-height: 1.1;
  margin-bottom: 1rem;
  color: #fff;
  max-width: 500px;
}

.hero-text p {
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
  color: #e6f7f8;
  max-width: 400px;
}

.cta-button {
  background-color: #B9B9D2;
  color: #000000;
  border: 1px solid #000000;
  padding: 0.5rem 1.5rem;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  align-self: flex-start;
  margin-top: 0.5rem;
}

.cta-button:hover {
  background-color: #4a3083;
  color: #fff;
}
</style>
