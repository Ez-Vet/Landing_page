<template>
  <section id="testimonials" class="testimonials">
    <h2>{{ $t('Testimonials.Testimonials') }}</h2>

    <!-- Testimonio de Maria Lopez (alineado a la izquierda) -->
    <div class="testimonial-card left">
      <div class="testimonial-image-container">
        <img src="../assets/doctor-1.png" alt="Maria Lopez" class="testimonial-image" />
        <div class="rating">⭐⭐⭐⭐⭐</div>
      </div>
      <div class="testimonial-content">
        <h4>{{ $t('Testimonials.Maria') }}</h4>
        <p>{{ $t('Testimonials.a') }}</p>
      </div>
    </div>

    <!-- Testimonio de Martin Jimenez (alineado a la derecha) -->
    <div class="testimonial-card right">
      <div class="testimonial-content">
        <h4>{{ $t('Testimonials.Martin') }}</h4>
        <p>{{ $t('Testimonials.b') }}</p>
      </div>
      <div class="testimonial-image-container">
        <img src="../assets/doctor-2.png" alt="Martin Jimenez" class="testimonial-image" />
        <div class="rating">⭐⭐⭐⭐⭐</div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.testimonials {
  width: 99vw;
  padding: 3rem 0;
  background-color: #00BFB2;
  color: #000000;
  text-align: center;
}

.testimonials h2 {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 3rem;
  color: #000;
}

.testimonial-card {
  display: flex;
  align-items: center;
  background-color: #8BDCD6;
  color: #000000;
  padding: 1.5rem;
  margin: 1rem auto;
  border-radius: 15px;
  max-width: 700px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  text-align: left;
}

.testimonial-card.left {
  justify-content: flex-start;
  margin-right: 30%;
}

.testimonial-card.right {
  justify-content: flex-end;
  margin-left: 30%;
}

.testimonial-image-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 1rem;
}

.testimonial-image {
  width: 80px;
  height: 80px;
  border-radius: 10px; /* Ahora es cuadrada */
  margin-bottom: 0.5rem;
}

.testimonial-card.right .testimonial-image-container {
  margin-left: 1rem;
  margin-right: 0;
}

.testimonial-content {
  max-width: 500px;
}

.testimonial-content h4 {
  margin: 0;
  font-size: 1.3rem;
  font-weight: bold;
  color: #000000;
}

.testimonial-content p {
  margin: 0.5rem 0;
  color: #333;
  line-height: 1.4;
}

.rating {
  color: #ffcc00;
  font-size: 1.2rem;
}
</style>
