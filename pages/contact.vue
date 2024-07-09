<template>
  <section id="hero">
    <div class="relative py-32 lg:pt-40">
      <div class="container relative z-50 text-white">
        <div class="lg:grid lg:grid-cols-2 lg:gap-16">
          <div>
            <h1 class="mb-20 text-4xl font-normal leading-snug text-white lg:text-6xl">Get in touch</h1>
            <div class="mb-12 lg:max-w-lg">
              <p class="mb-2">
                We're here to help. If you have any questions or concerns, please don't hesitate to reach out to us.
              </p>
              <p class="mb-4">
                Call our office today at <a href="tel:7805324355" class="underline">780-532-4355</a> or 24 hour dispatch
                number <a href="tel:587-297-9099" class="underline">587-297-9099</a>
              </p>
              <a
                href="https://app.workhub.com/anonymous/login"
                target="_blank"
                class="bg-white px-6 py-3 font-headings font-light leading-none text-gray-900 transition duration-200 hover:bg-gray-300"
                >WorkHub Training</a
              >
            </div>
          </div>
          <div class="bg-white p-8 text-black shadow-xl">
            <form>
              <div class="grid max-w-lg grid-cols-1 gap-6">
                <div>
                  <label for="name" class="text-md block font-medium text-gray-700"
                    >Name<span class="ml-1 inline-block text-red-600">*</span></label
                  >
                  <input
                    required
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Full name"
                    class="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
                  />
                </div>
                <div>
                  <label for="email" class="text-md block font-medium text-gray-700"
                    >Email<span class="ml-1 inline-block text-red-600">*</span></label
                  >
                  <input
                    required
                    type="email"
                    id="email"
                    name="email"
                    placeholder="john@example.com"
                    class="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
                  />
                </div>
                <div>
                  <label for="phone" class="text-md block font-medium text-gray-700">Phone</label>
                  <input
                    type="phone"
                    id="phone"
                    name="phone"
                    placeholder="780-123-4567"
                    class="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
                  />
                </div>
                <div>
                  <label for="message" class="text-md block font-medium text-gray-700"
                    >Message<span class="ml-1 inline-block text-red-600">*</span></label
                  >
                  <textarea
                    required
                    id="message"
                    name="message"
                    class="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    class="block bg-primary-700 px-6 py-3 font-headings font-light leading-none text-white transition duration-200 hover:bg-primary-900"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <img
        class="absolute left-0 top-0 z-10 h-full w-full object-cover"
        src="/assets/images/trailer-and-guy-hero.jpg"
      />
    </div>
  </section>
  <section id="location">
    <div class="container">
      <h2>Our Locations</h2>
      <div class="grid-cols-2 gap-8 lg:grid">
        <div>
          <p class="mb-2 font-bold">8710 112 Street, Grande Prairie, AB</p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4558.868313491055!2d-118.83808892210614!3d55.1581799728699!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5390917281bc19f5%3A0x54b15358a3f443ae!2s8710%20112%20St%2C%20Grande%20Prairie%2C%20AB%20T8V%205X4!5e0!3m2!1sen!2sca!4v1720406794308!5m2!1sen!2sca"
            width="100%"
            height="450"
            style="border: 0"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div>
          <p class="mb-2 font-bold">#9 Collins Road, Dawson Creek, BC</p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2245.442351592493!2d-120.19063652208446!3d55.75081757308348!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53919ed4921d729d%3A0xb6b9d2320251466!2s9%20Collins%20Rd%2C%20Pouce%20Coupe%2C%20BC%20V0C%202C0!5e0!3m2!1sen!2sca!4v1720406944680!5m2!1sen!2sca"
            width="100%"
            height="450"
            style="border: 0"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  </section>
</template>
