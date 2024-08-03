<template>
  <section id="hero">
    <div class="relative py-32 lg:pt-40">
      <div class="container relative z-50 text-white">
        <h1 class="mb-20 text-4xl font-normal leading-snug text-white lg:text-6xl">Rentals</h1>
        <p class="max-w-lg">
          At Cape Energy Group, we understand the importance of reliable and efficient safety equipment during
          industrial operations. That’s why we offer a comprehensive range of rental services tailored to meet your
          needs:
        </p>
      </div>
      <img class="absolute left-0 top-0 z-10 h-full w-full object-cover" src="/assets/images/rentals.jpg" />
    </div>
  </section>
  <section class="container">
    <div class="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-16">
      <Card
        title="Personal Monitors"
        body="Ensure the safety of your workforce with our state-of-the-art multi-gas and personal gas monitors keeping your workers safe"
      />
      <Card
        title="Continuous Gas Monitors"
        body="Our continuous gas monitors ensure that jobs requiring ongoing gas detection monitoring are equipped with state-of-the-art- equipment."
      />
      <Card
        title="Stand Alone Gas Detection Systems"
        body="Our advanced OTIS Gas Detection Systems provide real-time monitoring of gas levels in industrial environments, offering accurate real time data to enhance safety protocols."
      />
      <Card
        title="SCBA (Self-Contained Breathing Apparatus)"
        body="Providing your team with the respiratory protection they need in hazardous environments, ensuring peace of mind and compliance with safety regulations."
      />
      <Card
        title="Air Skids"
        body="2 bottle 6,000 psi bottles along with SABA and hoses for quick small jobs needing respiratory protection."
      />
    </div>
  </section>
  <Callout
    body="Whether you require short-term rentals for a specific project or long-term solutions for ongoing operations, Cape Energy Group delivers top-quality equipment maintained to the highest standards. Our commitment to safety and customer satisfaction sets us apart as your trusted partner in industrial safety rentals. Contact Cape Energy Group today to learn more about how we can support your safety equipment needs."
  />
</template>
