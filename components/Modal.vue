<script setup lang="ts">
import { ref } from 'vue'

const dialog = ref<HTMLDialogElement>()

const props = defineProps({
  classes: {
    type: String,
    default: '',
  },
})

const visible = ref(false)

const showModal = () => {
  dialog.value?.showModal()
  visible.value = true
}

defineExpose({
  show: showModal,
  close: (returnVal?: string): void => dialog.value?.close(returnVal),
  visible,
})
</script>

<template>
  <dialog ref="dialog" @close="visible = false">
    <form
      v-if="visible"
      method="dialog"
      :class="{
        [props.classes]: props.classes,
      }"
    >
      <slot />
    </form>
  </dialog>
</template>
