<script setup>
const props = defineProps({
  value: {
    type: String,
    default: '',
  },
});

const emit = defineEmits(['input']);
</script>

<template>
  <v-text-field
    :value="props.value"
    autofocus
    placeholder="Search"
    hide-details
    outlined
    flat
    dense
    prepend-inner-icon="mdi-magnify"
    single-line
    @input="val => emit('input', val)"
  />
</template>
