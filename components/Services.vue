<template>
  <div class="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16 xl:grid-cols-4 xl:gap-4">
    <div class="rounded-md border border-gray-100 shadow">
      <img
        class="w-full rounded-t-md object-cover lg:h-80"
        src="/assets/images/industries-we-serve.jpg"
        alt="Wireless gas detection"
      />
      <div class="p-4">
        <h3 class="text-xl text-secondary-700">Safety Services</h3>
        <p>
          Ensuring comprehensive safety protocols and equipment to protect your workforce in hazardous environments.
        </p>
        <ul class="list-disc pl-4">
          <li>H2S Safety Services</li>
          <li>Air Trailers</li>
          <li>Breathing Apparatus</li>
          <li>Gas Detection</li>
          <li>Fit Testing</li>
        </ul>
        <NuxtLink
          class="mt-4 inline-block bg-primary-700 px-6 py-3 font-headings font-light leading-none text-white transition duration-200 hover:bg-primary-900"
          aria-label="Learn more about safety services"
          to="/services/safety-services"
          >Learn more</NuxtLink
        >
      </div>
    </div>
    <div class="rounded-md border border-gray-100 shadow">
      <img
        class="w-full rounded-t-md object-cover lg:h-80"
        src="/assets/images/wireless-gas-detection.jpg"
        alt="Wireless gas detection"
      />
      <div class="p-4">
        <h3 class="text-xl text-secondary-700">Advanced Equipment and Technology</h3>
        <p>
          Leveraging cutting-edge technology and state-of-the-art equipment to enhance safety and operational
          efficiency.
        </p>
        <ul class="list-disc pl-4">
          <li>
            Our stand alone gas detection systems use industrial monitors combined with leading edge technology in
            telemetry and interface controls. The web-based system easily integrates with client specific data systems
            allowing clients to see our systems in real time with remote alarms and triggers.
          </li>
        </ul>
        <ul class="list-disc pl-4">
          <li>
            With our experience, we have put thought and customization into our equipment resulting in a user friendly
            experience for our field staff and clients. Connected telemetry gives our support team advanced insight into
            an array of preventative actions such a when batteries need to be replaced prior to them going dead.
          </li>
          <li>
            Air Trailers all equipped with 6,000psi bottles to ensure maximum air capacity and less trailer refills and
            change outs.
          </li>
        </ul>
        <NuxtLink
          class="mt-4 inline-block bg-primary-700 px-6 py-3 font-headings font-light leading-none text-white transition duration-200 hover:bg-primary-900"
          aria-label="Learn more about advanced equipment and technology"
          to="/services/advanced-equipment"
          >Learn more</NuxtLink
        >
      </div>
    </div>
    <div class="rounded-md border border-gray-100 shadow">
      <img
        class="w-full rounded-t-md object-cover lg:h-80"
        src="/assets/images/industries.jpg"
        alt="Wireless gas detection"
      />
      <div class="p-4">
        <h3 class="text-xl text-secondary-700">Plant Turnaround Safety Support</h3>
        <p>
          Technical Rescue Support, Confined Space and Entry / Monitoring, Spark watch, Benzene Testing , Preliminary
          NORMS Survey, Fit Testing.
        </p>
        <NuxtLink
          class="mt-4 inline-block bg-primary-700 px-6 py-3 font-headings font-light leading-none text-white transition duration-200 hover:bg-primary-900"
          aria-label="Learn more about plant turnaround and safety support"
          to="/services/safety-support"
          >Learn more</NuxtLink
        >
      </div>
    </div>
    <div class="rounded-md border border-gray-100 shadow">
      <img
        class="w-full rounded-t-md object-cover lg:h-80"
        src="/assets/images/rentals.jpg"
        alt="Wireless gas detection"
      />
      <div class="p-4">
        <h3 class="text-xl text-secondary-700">Rentals</h3>
        <p>Personal monitors, OTIS Gas Detection Systems, SCBA and SABA.</p>
        <NuxtLink
          class="mt-4 inline-block bg-primary-700 px-6 py-3 font-headings font-light leading-none text-white transition duration-200 hover:bg-primary-900"
          aria-label="Learn more about rentals"
          to="/services/rentals"
          >Learn more</NuxtLink
        >
      </div>
    </div>
  </div>
</template>
