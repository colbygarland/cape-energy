<script setup lang="ts">
import DarrenBio from './bios/DarrenBio.vue'
import ChrisBio from './bios/ChrisBio.vue'
import RobBio from './bios/RobBio.vue'
import DanielleBio from './bios/DanielleBio.vue'
import DarrenMorganBio from './bios/DarrenMorganBio.vue'

const props = defineProps(['name', 'title', 'photo'])
const dialog = ref(null)

const isDarrenOilund = props.name == 'Darren Oilund'
const isChrisOilund = props.name == 'Chris Oilund'
const isRobVerge = props.name == 'Rob Verge'
const isDanielleVerge = props.name == 'Danielle Verge'
const isDarrenMorgan = props.name == 'Darren Morgan'
</script>

<template>
  <div
    @click="dialog.showModal()"
    class="cursor-pointer items-center bg-white shadow md:flex dark:border-gray-700 dark:bg-gray-800"
  >
    <div class="md:flex-1">
      <img v-if="isDarrenOilund" class="w-full" src="/assets/images/darren-oilund.jpg" alt="Darren Oilund" />
      <img v-if="isChrisOilund" class="w-full" src="/assets/images/chris-oilund.jpg" alt="Chris Oilund" />
      <img v-if="isRobVerge" class="w-full" src="/assets/images/rob-verge.jpg" alt="Rob Verge" />
      <img v-if="isDanielleVerge" class="w-full" src="/assets/images/danielle-verge.jpg" alt="Danielle Verge" />
      <img v-if="isDarrenMorgan" class="w-full" src="/assets/images/darren-morgan.jpg" alt="Darren Morgan" />
    </div>

    <div class="p-5 md:flex-1">
      <h3 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
        {{ name }}
      </h3>
      <span class="text-gray-500 dark:text-gray-400">{{ title }}</span>
    </div>
  </div>
  <dialog ref="dialog" class="">
    <div class="grid-cols-2 lg:grid">
      <div>
        <img
          v-if="isDarrenOilund"
          class="h-full w-full object-cover"
          src="/assets/images/darren-oilund.jpg"
          alt="Darren Oilund"
        />
        <img
          v-if="isChrisOilund"
          class="h-full w-full object-cover"
          src="/assets/images/chris-oilund.jpg"
          alt="Chris Oilund"
        />
        <img v-if="isRobVerge" class="h-full w-full object-cover" src="/assets/images/rob-verge.jpg" alt="Rob Verge" />
        <img
          v-if="isDanielleVerge"
          class="h-full w-full object-cover"
          src="/assets/images/danielle-verge.jpg"
          alt="Danielle Verge"
        />
        <img
          v-if="isDarrenMorgan"
          class="h-full w-full object-cover"
          src="/assets/images/darren-morgan.jpg"
          alt="Darren Morgan"
        />
      </div>
      <div class="p-6">
        <h2>{{ name }}</h2>
        <div>
          <DarrenBio v-if="isDarrenOilund" />
          <ChrisBio v-if="isChrisOilund" />
          <RobBio v-if="isRobVerge" />
          <DanielleBio v-if="isDanielleVerge" />
          <DarrenMorganBio v-if="isDarrenMorgan" />
        </div>
        <button
          @click="dialog.close()"
          class="block bg-primary-700 px-6 py-3 font-headings font-light leading-none text-white transition duration-200 hover:bg-primary-900"
        >
          Close
        </button>
      </div>
    </div>
  </dialog>
</template>

<style>
::backdrop {
  background: rgba(0, 0, 0, 0.75);
}
</style>
