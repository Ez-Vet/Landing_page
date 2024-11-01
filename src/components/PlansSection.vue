<template>
  <section id="plans" class="plans">
    <h2>PLANS</h2>
    <div class="plans-cards">
      <!-- Tarjeta BASIC -->
      <div class="plan-card">
        <h3>BASIC</h3>
        <div class="price-container">
          <p class="price">$29</p>
        </div>
        <ul>
          <li>{{ $t('Plans.a') }}</li>
          <li>{{ $t('Plans.ab') }}</li>
        </ul>
        <button>{{ $t('Plans.accept') }}</button>
      </div>

      <!-- Tarjeta SILVER -->
      <div class="plan-card">
        <h3>SILVER</h3>
        <div class="price-container">
          <p class="price">$49</p>
        </div>
        <ul>
          <li>{{ $t('Plans.b') }}</li>
          <li>{{ $t('Plans.bc') }}</li>
        </ul>
        <button>{{ $t('Plans.accept') }}</button>
      </div>

      <!-- Tarjeta GOLD -->
      <div class="plan-card">
        <h3>GOLD</h3>
        <div class="price-container">
          <p class="price">$60</p>
        </div>
        <ul>
          <li>{{ $t('Plans.c') }}</li>
          <li>{{ $t('Plans.cd') }}</li>
        </ul>
        <button>{{ $t('Plans.accept') }}</button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.plans {
  width: 99vw;
  min-height: 80vh;
  background-color: #fff;
  text-align: center;
  position: relative;
  padding-top: 2rem;
  padding-bottom: 5rem;
  background-image: url('../assets/loros.png'); /* Imagen de los loros */
  background-repeat: no-repeat;
  background-position: center bottom;
  background-size: contain;
}

.plans h2 {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 2rem;
  color: #333;
}

.plans-cards {
  display: flex;
  justify-content: center;
  gap: 2rem;
}

.plan-card {
  background-color: #00BFB2;
  color: #fff;
  padding: 1.5rem;
  border-radius: 15px;
  width: 280px;
  box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.15);
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.plan-card h3 {
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.price-container {
  background-color: #bde7df; /* Fondo más claro detrás del precio */
  border-radius: 10px;
  padding: 0.5rem 1rem;
  margin: 0.5rem 0 1rem;
  width: 60%; /* Ancho del contenedor de precio */
}

.price {
  font-size: 2.5rem;
  font-weight: bold;
  color: #000; /* Color negro para el precio */
  margin: 0;
}

.plan-card ul {
  list-style: none;
  padding: 0;
  margin: 1rem 0;
  text-align: center;
  color: #fff;
}

.plan-card li {
  font-size: 1.1rem;
  margin: 0.3rem 0;
}

.plan-card button {
  background-color: #bfc4ff;
  color: #4a3083;
  border: none;
  padding: 0.7rem 1.5rem;
  font-weight: bold;
  font-size: 1rem;
  border-radius: 8px;
  cursor: pointer;
  margin-top: auto;
}

.plan-card button:hover {
  background-color: #fff;
  color: #4a3083;
}
</style>
