<script setup>
const props = defineProps({
  value: {
    type: Boolean,
    default: false,
  },
  isNotAgree: {
    type: Boolean,
    default: false,
  },
  showFooter: {
    type: Boolean,
    default: true,
  },
  loading: {
    type: Boolean,
    default: false,
  },
  title: {
    type: String,
    default: '',
  },
  width: {
    type: String,
    default: '500px',
  },
});

const emits = defineEmits(['input']);

const toggleDialog = (value) => {
  emits('input', value);
};
</script>

<template>
  <div class="text-center">
    <v-dialog
      :value="props.value"
      :width="width"
      persistent
      @input="toggleDialog"
    >
      <v-card :loading="props.loading">
        <v-card-title v-if="props.title" class="pl-6 pr-3 d-flex justify-space-between align-center">
          <span v-html="props.title"/>

          <v-btn v-if="!props.isNotAgree" plain icon @click="toggleDialog(false)">
            <v-icon>
              mdi-close
            </v-icon>
          </v-btn>
        </v-card-title>

        <v-divider/>

        <v-card-text class="p-0">
          <slot/>
        </v-card-text>

        <template v-if="props.showFooter">
          <v-divider/>

          <v-card-actions>
            <v-spacer/>

            <slot name="footer">
              <v-btn color="error" text @click="toggleDialog(false)">
                Cancel
              </v-btn>
            </slot>
          </v-card-actions>
        </template>
      </v-card>
    </v-dialog>
  </div>
</template>
