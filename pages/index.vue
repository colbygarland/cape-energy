<template>
  <section id="hero">
    <div class="relative py-32 lg:pt-96">
      <div class="container relative z-50 text-white">
        <h1 class="mb-20 text-4xl font-normal leading-snug text-white lg:text-6xl">
          Cape Energy Group <br />Innovative Energy Solutions. <br />Leading the way to a safer Future.
        </h1>
        <p class="mb-12 lg:max-w-96">
          For more than two decades, Cape Energy Services has been delivering safety services across Western Canada.
        </p>
        <div class="flex gap-6">
          <a
            href="#contact"
            class="block bg-white px-6 py-3 font-headings font-light leading-none text-gray-900 transition duration-200 hover:bg-gray-300"
            >Contact Us</a
          >
          <a
            href="#services"
            class="block border border-white bg-transparent px-6 py-3 font-headings font-light leading-none text-white transition duration-200 hover:bg-white hover:text-gray-900"
            >Explore Our Services</a
          >
        </div>
      </div>
      <img class="absolute left-0 top-0 z-10 h-full w-full object-cover" src="/assets/images/team.jpg" />
    </div>
  </section>
  <section id="commitment">
    <div class="container py-12 lg:py-24">
      <h2 class="text-4xl font-normal lg:text-6xl">Our commitment</h2>
      <div class="grid gap-4 lg:grid-cols-2 lg:gap-20">
        <div>
          <p class="lg:mg-16 mb-8 text-2xl font-light text-secondary-700 lg:text-3xl">
            At Cape Energy Group, our commitment is to deliver unparalleled safety and operational excellence through
            innovative solutions and top-tier equipment and personnel.
          </p>
          <p class="text-xl">
            We prioritize the wellbeing of your team by employing the best talent and utilizing cutting-edge technology
            to create secure, efficient work environments. Our dedication extends beyond the job site as we actively
            contribute to community growth and development, embodying our core values of integrity, innovation, and
            community involvement. Trust Cape Energy Group to safeguard your operations and propel your success.
          </p>
        </div>
        <div>
          <img src="/assets/images/trailer-and-guy.jpg" alt="Cape Energy Group" />
        </div>
      </div>
    </div>
  </section>
  <section id="services">
    <div class="container">
      <h2>Our Services</h2>
      <div class="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-16">
        <div class="rounded-md border border-gray-100 shadow">
          <img
            class="w-full rounded-t-md object-cover lg:h-80"
            src="/assets/images/wireless-gas-detection.jpg"
            alt="Wireless gas detection"
          />
          <div class="p-4">
            <h3 class="text-xl text-secondary-700">H2S Safety Services</h3>
            <p>
              Ensuring comprehensive safety protocols and equipment to protect your workforce in hazardous environments.
            </p>
            <ul class="list-disc pl-4">
              <li>H2S Safety Services</li>
              <li>Air Trailers</li>
              <li>Breathing Apparatus</li>
              <li>Gas Detection</li>
              <li>Preliminary Norms Testing</li>
              <li>Benzene Monitoring</li>
              <li>Confined Space Entry / Monitoring</li>
            </ul>
            <ul class="list-disc pl-4">
              <li>Fit Testing</li>
              <li>Spark Watch</li>
              <li>Technical Rescue</li>
            </ul>
          </div>
        </div>
        <div class="rounded-md border border-gray-100 shadow">
          <img
            class="w-full rounded-t-md object-cover lg:h-80"
            src="/assets/images/industries-we-serve.jpg"
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
                telemetry and interface controls. The web-based system easily integrates with client specific data
                systems allowing clients to see our systems in real time with remote alarms and triggers.
              </li>
            </ul>
            <ul class="list-disc pl-4">
              <li>
                With our experience, we have put thought and customization into our equipment resulting in a user
                friendly experience for our field staff and clients. Connected telemetry gives our support team advanced
                insight into an array of preventative actions such a when batteries need to be replaced prior to them
                going dead.
              </li>
              <li>
                Air Trailers all equipped with 6,000psi bottles to ensure maximum air capacity and less trailer refills
                and change outs.
              </li>
            </ul>
          </div>
        </div>
        <div class="rounded-md border border-gray-100 shadow">
          <img
            class="w-full rounded-t-md object-cover lg:h-80"
            src="/assets/images/trailer-and-guy.jpg"
            alt="Wireless gas detection"
          />
          <div class="p-4">
            <h3 class="text-xl text-secondary-700">Confined Space Entry & Technical Rescue</h3>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section id="about">
    <div class="container">
      <h2>About us</h2>
      <div class="grid gap-4 lg:grid-cols-2 lg:gap-20">
        <p class="text-2xl text-secondary-700 lg:text-3xl">
          At Cape Energy Group, we aspire to be the go-to choice for H2S services in the oil and gas industry.
        </p>
        <p>
          Our commitment lies in consistently delivering exceptional quality and value to our clients. We understand
          that our success relies on our people—we actively attract, retain, and nurture top talent. By emphasizing the
          right hiring decisions, providing exceptional training, and equipping our team with state-of-the-art
          equipment, we drive excellence throughout our organization. But it doesn’t stop there. We want our people to
          enjoy coming to work, looking forward to a new adventure each day. After all, people are our greatest asset.
        </p>
      </div>
    </div>
    <div class="container">
      <h2>Our Team</h2>
      <div class="grid gap-4 lg:grid-cols-2 lg:gap-20">
        <TeamMembers />
      </div>
    </div>
  </section>
  <section id="industries">
    <div class="relative py-32 lg:pt-96">
      <div class="container relative z-50 text-white">
        <h2 class="mb-20 text-4xl font-normal leading-snug text-white lg:text-6xl">H2S Safety Services</h2>
        <p class="mb-12 lg:mb-24 lg:max-w-[650px]">
          Ensuring comprehensive safety protocols and equipment to protect your workforce in hazardous environments
        </p>
        <ul class="list-disc grid-cols-1 pl-4 text-lg lg:grid lg:max-w-[750px]">
          <li>H2S Safety Services</li>
          <li>Air Trailers</li>
          <li>Breathing Apparatus</li>
          <li>Gas Detection</li>
          <li>Preliminary Norms Testing</li>
          <li>Benzene Monitoring</li>
        </ul>
      </div>
      <img class="absolute left-0 top-0 z-10 h-full w-full object-cover" src="/assets/images/industries.jpg" alt="" />
    </div>
  </section>
  <section id="industries-we-serve">
    <div class="container">
      <div class="grid gap-4 lg:grid-cols-2 lg:gap-20">
        <div>
          <h2>Industries we serve</h2>
          <p>Providing expert support and specialized equipment for the energy sector:</p>
          <ul class="list-disc pl-4">
            <li>Drilling operations</li>
            <li>Completion and work over operations</li>
            <li>Flow back operations</li>
            <li>Well optimization</li>
          </ul>
          <ul class="list-disc pl-4">
            <li>Confined Space Entry</li>
            <li>Plant turn around support</li>
            <li>Plant construction support</li>
          </ul>
        </div>
        <div>
          <img src="/assets/images/industries-we-serve.jpg" alt="" />
        </div>
      </div>
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
            allowfullscreen=""
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
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  </section>
</template>
