<script setup>
const props = defineProps({
  value: {
    type: String,
    default: '',
  },
});

const emits = defineEmits(['input']);
</script>

<template>
  <v-text-field
    :value="props.value"
    placeholder="Search"
    hide-details
    outlined
    flat
    dense
    prepend-inner-icon="mdi-magnify"
    single-line
    @input="val => emits('input', val)"
  />
</template>
