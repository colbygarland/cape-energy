<template>
  <section id="hero">
    <div class="relative py-32 lg:pt-40">
      <div class="container relative z-50 text-white [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">
        <h1 class="mb-20 text-4xl font-normal leading-snug text-white lg:text-6xl">About Cape Energy</h1>
        <p class="mb-12 lg:max-w-lg">
          For over two decades, Cape Energy Services' leadership group has diligently provided safety services to
          oilfield operations across Western Canada. After a brief sabbatical, we've re-established—not out of
          necessity, but driven by a genuine passion for this industry.
        </p>
      </div>
      <img class="absolute left-0 top-0 z-10 h-full w-full object-cover" src="/assets/images/hero-2.jpg" />
      <div class="absolute left-0 top-0 z-[11] h-full w-full bg-black opacity-20"></div>
    </div>
  </section>
  <section>
    <div class="container">
      <div class="gap:16 grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div class="lg:col-span-2">
          <p class="mb-8 text-3xl font-bold text-secondary-600">
            Many questions have been asked regarding the name ‘Cape.’
          </p>
          <p>
            It’s a simple answer: our old company’s name was known as ‘Cloak’. We do not wear a ‘Cloak’ anymore; when
            you wield your superpowers, you get to wear a ‘Cape’.
          </p>
        </div>
        <div>
          <img src="/assets/images/cape-energy-logo.png" alt="Cape Energy Services" />
        </div>
      </div>
    </div>
  </section>
  <section class="bg-gray-50">
    <div class="container">
      <h2>Our Team</h2>
      <div class="grid gap-4 lg:grid-cols-2 lg:gap-20">
        <TeamMembers />
      </div>
    </div>
  </section>
</template>
