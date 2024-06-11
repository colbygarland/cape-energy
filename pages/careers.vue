<template>
  <div class="relative py-32 lg:pt-96">
    <div class="container relative z-50 text-white">
      <h1 class="mb-20 text-4xl font-normal leading-snug text-white lg:text-6xl">Don your Cape and work with Us</h1>
      <p class="mb-12 lg:max-w-96">
        For more than two decades, Cape Energy Services has been delivering safety services across Western Canada.
      </p>
      <div class="flex gap-6">
        <a
          href="#apply"
          class="block bg-white px-6 py-3 font-headings font-light leading-none text-gray-900 transition duration-200 hover:bg-gray-300"
          >Apply Now</a
        >
      </div>
    </div>
    <img class="absolute left-0 top-0 z-10 h-full w-full object-cover" src="/assets/images/hero.jpg" />
  </div>
  <div class="container" id="apply">
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
          <label for="phone" class="text-md block font-medium text-gray-700"
            >Phone<span class="ml-1 inline-block text-red-600">*</span></label
          >
          <input
            required
            type="phone"
            id="phone"
            name="phone"
            placeholder="780-123-4567"
            class="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
          />
        </div>
        <div>
          <label for="resume" class="text-md block font-medium text-gray-700"
            >Resume<span class="ml-1 inline-block text-red-600">*</span></label
          >
          <input
            required
            type="file"
            id="resume"
            name="resume"
            class="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
          />
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
</template>
