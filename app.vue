<script setup lang="ts">
import { ref } from 'vue'

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
</script>

<template>
  <div class="bg-primary-900">
    <header class="container py-4 lg:py-8">
      <div class="flex justify-between">
        <div>
          <NuxtLink to="/">
            <Logo />
          </NuxtLink>
        </div>
        <div class="lg:hidden">
          <button @click="toggleMenu">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              version="1.1"
              x="0px"
              y="0px"
              viewBox="0 0 100 125"
              xml:space="preserve"
              class="h-12 w-12 fill-white stroke-white text-white"
            >
              <g>
                <path
                  d="M81.4,20.5H18.7c-2.5,0-4.5,2-4.5,4.5s2,4.5,4.5,4.5h62.7c2.5,0,4.5-2,4.5-4.5S83.9,20.5,81.4,20.5z"
                />
                <path
                  d="M18.7,54.5h32.7c2.5,0,4.5-2,4.5-4.5s-2-4.5-4.5-4.5H18.7c-2.5,0-4.5,2-4.5,4.5S16.2,54.5,18.7,54.5z"
                />
                <path
                  d="M71.4,71.5H18.7c-2.5,0-4.5,2-4.5,4.5s2,4.5,4.5,4.5h52.7c2.5,0,4.5-2,4.5-4.5S73.9,71.5,71.4,71.5z"
                />
              </g>
            </svg>
          </button>
        </div>
        <div class="hidden pt-4 lg:block">
          <nav>
            <ul class="flex gap-16">
              <MenuItem to="/" text="Home" />
              <MenuItem to="/about" text="About" />
              <div class="group relative">
                <MenuItem to="/services" text="Services" />
                <ul
                  class="l-0 b-0 invisible absolute z-10 min-w-64 bg-primary-900 px-6 opacity-0 shadow-xl transition duration-150 group-hover:visible group-hover:opacity-100"
                >
                  <MenuItem to="/services/safety-services" text="H2S Safety Services" />
                  <MenuItem to="/services/advanced-equipment" text="Advanced Equipment & Technology" />
                  <MenuItem to="/services/safety-support" text="Plant Turnaround Safety Support" />
                  <MenuItem to="/services/hse-advisors" text="HSE Advisors" />
                  <MenuItem to="/services/rentals" text="Rentals" />
                </ul>
              </div>
              <MenuItem to="/contact" text="Contact" />
              <MenuItem to="/careers" text="Careers" />
              <MenuItem to="tel:587-297-9099" text="Call Dispatch" />
            </ul>
          </nav>
        </div>
      </div>
    </header>
  </div>

  <nav v-if="isMenuOpen" class="fixed left-0 top-0 z-50 grid h-full w-full place-items-center lg:hidden">
    <div class="absolute left-0 top-0 z-[49] h-full w-full bg-primary-950 opacity-95"></div>
    <ul class="relative z-50">
      <MenuItem to="/" text="Home" :callback="toggleMenu" />
      <MenuItem to="/about" text="About" :callback="toggleMenu" />
      <MenuItem to="/services" text="Services" :callback="toggleMenu" />
      <MenuItem to="/contact" text="Contact" :callback="toggleMenu" />
      <MenuItem to="/careers" text="Careers" :callback="toggleMenu" />
      <MenuItem to="tel:587-297-9099" text="Call Dispatch" />
    </ul>
    <button class="fixed right-5 top-4 z-50" @click="toggleMenu">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        version="1.1"
        x="0px"
        y="0px"
        viewBox="-255 347 100 125"
        xml:space="preserve"
        class="h-12 w-12 fill-white stroke-white text-white"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          fill="#FFFFFF"
          d="M-166.5,432.6l-2.4,2.4l-35.1-35.1l-35.1,35.1l-2.4-2.4l35.1-35.1  l-35.1-35.1l2.4-2.4l35.1,35.1l35.1-35.1l2.4,2.4l-35.1,35.1L-166.5,432.6z"
        />
      </svg>
    </button>
  </nav>
  <main class="relative z-[1]">
    <NuxtPage />
  </main>
  <footer id="contact">
    <div class="relative bg-secondary-900 py-24">
      <div class="container relative z-50 text-white">
        <div class="mb-12 grid grid-cols-1 gap-8 border-b-2 border-white pb-12 lg:grid-cols-4">
          <div class="lg:col-span-1">
            <Logo />
          </div>
          <div class="lg:col-span-3">
            <p class="text-2xl">
              Thank you for choosing Cape Energy Group – your trusted H2S Safety partner in innovative safety and
              operational excellence.
            </p>
          </div>
        </div>
        <div class="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-16">
          <div>
            <h2 class="text-2xl text-white lg:text-3xl">Office location</h2>
            <p class="mb-2">
              Cape Energy Group Inc.<br />
              8710-112 Street, Grande Prairie, AB, T8V 5X4
            </p>
            <p>#9 Collins Road, Dawson Creek, BC</p>
          </div>
          <div>
            <h2 class="text-2xl text-white lg:text-3xl">Office and 24 hour dispatch number</h2>
            <p>
              Call our office today at <a href="tel:7805324355" class="underline">780-532-4355</a> or 24 hour dispatch
              number <a href="tel:587-297-9099" class="underline">587-297-9099</a>
            </p>
          </div>
          <div>
            <h2 class="text-2xl text-white lg:text-3xl">Email us</h2>
            <p>
              <a href="mailto:hr@capeenergy.ca" class="underline">hr@capeenergy.ca</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
