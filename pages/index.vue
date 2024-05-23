<script>
const services = [
  'H2S safety services',
  'Supplied air trailers',
  'Breathing apparatus, gas detection',
  'Fit testing',
  'Safety supervisor contractors',
  'Course completions',
  'Fracking and flowback operations',
  'Drilling rigs',
  'Telemetry equipment',
  'Confined space entry',
  'High angle rescue',
]
</script>

<template>
  <main>
    <section>
      <div class="relative py-64 lg:py-96">
        <div class="relative z-50 px-4">
          <h2 class="mx-auto max-w-96 text-center text-4xl font-bold uppercase text-white lg:text-5xl">
            SAFEGUARD WHAT MATTERS MOST -- YOUR PEOPLE
          </h2>
        </div>
        <img class="absolute left-0 top-0 z-10 h-full w-full object-cover" src="/assets/images/hero.jpg" />
        <div class="absolute left-0 top-0 z-20 h-full w-full bg-primary-800 opacity-60"></div>
        <div class="absolute left-0 top-0 z-20 h-full w-full bg-primary-900 opacity-30"></div>
      </div>
    </section>
    <section>
      <div class="container">
        <div class="mx-auto mb-6 h-1 w-20 bg-secondary-500"></div>
        <h2 class="text-center">20+ years of Industrial Safety Experience</h2>
        <div class="mt-6 flex flex-col gap-8 lg:mt-20 lg:flex-row lg:gap-16">
          <div class="order-2 lg:order-1 lg:flex-1">
            <img src="/assets/images/about.jpg" alt="" />
          </div>
          <div class="order-1 lg:order-2 lg:mt-6 lg:flex-1">
            <p class="font-bold">
              For more than two decades, Cape Energy Services has been delivering safety services across Western Canada.
            </p>
            <p>
              Cape Energy was founded by Darren and Chris Oilund, with a single purpose:
              <strong>to protect what is important</strong>. Your workers and employees are your most valuable asset,
              and Cape Energy Services is here to ensure that your investment in your people stays valuable.
            </p>
            <p></p>
            <p>
              As a premier provider of industrial safety services and training, we are dedicated to the well-being of
              our clients, students, employees, and the communities near our worksites. Our passion for helping others
              drives our commitment to the safety industry. Trust the experts at Cape Energy Services to ensure your
              operations comply with all provincial and federal safety regulations, keeping your workers protected on
              the job.
            </p>
            <div>
              <a href="/about" class="button">Learn More</a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="container">
        <div class="mx-auto mb-6 h-1 w-20 bg-secondary-500"></div>
        <h2 class="text-center">Our Services</h2>
        <div class="mt-6 lg:mt-12">
          <Carousel :items-to-show="2.5" :wrap-around="true">
            <Slide v-for="service in services" :key="service">
              <div class="carousel__item">{{ service }}</div>
            </Slide>
            <template #addons>
              <Navigation />
              <Pagination />
            </template>
          </Carousel>
        </div>
      </div>
    </section>
    <section class="dark">
      <div class="container">
        <p>
          Cape Energy has been providing the Peace region oilfield safety equipment and services since the early 2000s.
        </p>
        <ul>
          <li>H2S safety services</li>
          <li>Supplied air trailers</li>
          <li>Breathing apparatus, gas detection</li>
          <li>Fit testing</li>
          <li>Safety supervisor contractors</li>
          <li>Course completions</li>
          <li>Fracking and flowback operations</li>
          <li>Drilling rigs</li>
          <li>Telemetry equipment</li>
          <li>Confined space entry</li>
          <li>High angle rescue</li>
        </ul>
      </div>
    </section>
    <section>
      <div class="container">
        <h2>Get in touch</h2>
      </div>
    </section>
  </main>
  <footer class="bg-secondary-800 text-white">
    <div class="container py-2">
      <p class="mb-0 text-white">
        <small>Cape Energy Services. Website by <a href="https://teleoinc.com" target="_blank">Teleo</a></small>
      </p>
    </div>
  </footer>
</template>
