<template>
  <section id="hero">
    <div class="relative py-32 lg:pt-40">
      <div class="container relative z-50 text-white [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">
        <h1 class="mb-20 text-4xl font-normal leading-snug text-white lg:text-6xl">Advanced Equipment & Technology</h1>
        <p class="max-w-lg">
          Welcome to Cape Energy Group, where safety and efficiency converge through cutting- edge technology and
          advanced equipment solutions. We specialize in providing state- of-the-art services designed to enhance
          workplace safety and operational effectiveness.
        </p>
      </div>
      <img
        class="absolute left-0 top-0 z-10 h-full w-full object-cover"
        src="/assets/images/wireless-gas-detection.jpg"
      />
      <div class="absolute left-0 top-0 z-[11] h-full w-full bg-black opacity-20"></div>
    </div>
  </section>
  <section class="container">
    <div class="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
      <Card
        title="Offset Well Monitoring"
        body="Get safe and secure real-time status of offset wells using wireless sensors to ensure well-bore integrity during hydraulic fracturing operations. Our plug-and-play portable solution means getting real-time offset well data is a breeze. Set high and low critical pressure alarms to ensure your team members are notified immediately by email or text."
        v-bind:list="[
          'View pressure data and charts in real-time through the Tresel.io web platform',
          'Configurable Alarm thresholds for every sensor and alert notifications by email or text',
          'Customizable data sampling intervals',
          'Customizable reports in Tresel.io with optional scheduled email delivery',
          'Simple sharing of real-time data with third parties from Tresel.io',
          'Quick plug-and-play deployment using wireless sensors',
          'Exception connectivity through LTE or Wi-Fi',
        ]"
      />
      <Card
        title="Advanced Gas Detection Systems"
        body="Our stand-alone gas detection systems utilize industrial monitors equipped with leading-edge telemetry and interface controls. These systems are integrated into a web-based platform that seamlessly connects with client-specific data systems. This integration allows clients to monitor our systems in real time, receive remote alarms, and hazards proactive alerts, such as battery life notifications, enabling timely maintenance actions to prevent downtime and ensure continuous operation."
      />
    </div>
  </section>
  <section class="container">
    <div class="mb-4 grid grid-cols-1 gap-8 lg:mb-16 lg:grid-cols-3 lg:gap-16">
      <img src="/assets/images/tresel.jpg" alt="Otis Instruments Tresel Telemetry" />
      <div class="lg:col-span-2">
        <h2>Telemetry</h2>
        <h3 class="mb-4 text-xl font-bold">Otis Instruments Tresel Telemetry</h3>
        <p>
          Tresel Telemetry offers real-time industrial telemetry solutions designed to enhance operational efficiency
          and safety. Here are some key features:
        </p>
        <ul class="mb-4 mt-4">
          <li>
            <span class="font-bold text-primary-700">Real-Time Data Monitoring:</span> Provides immediate visibility of
            operation-critical data from industrial equipment.
          </li>
          <li>
            <span class="font-bold text-primary-700">Broad Compatibility:</span> Supports most common IoT protocols and
            integrates with existing hardware, sensors, and controllers.
          </li>
          <li>
            <span class="font-bold text-primary-700">Situational Awareness:</span> Customizable dashboards, alerting,
            and reporting features to improve situational awareness and decision-making.
          </li>
          <li>
            <span class="font-bold text-primary-700">Remote Monitoring:</span> Enables remote monitoring of various
            parameters such as flow rates, pressures, temperatures, and levels.
          </li>
          <li>
            <span class="font-bold text-primary-700">User-Friendly Platform:</span> Web-based platform accessible from
            any device, with features like historical data records, customizable charts, and exportable reports.
          </li>
        </ul>
        <p>View more at <a class="text-primary font-bold" href="https://tresel.io" target="_blank">tresel.io</a></p>
      </div>
    </div>
  </section>
  <Callout
    body="At Cape Energy Group, we are committed to enhancing safety and efficiency through innovative technology and superior equipment solutions. Trust us to deliver industry- leading services that prioritize safety, streamline operations, and exceed expectations. Experience the difference with Cape Energy Group—where advanced technology meets uncompromising safety standards."
  />
</template>
