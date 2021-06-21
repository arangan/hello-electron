<script>
export default {
  name: 'DocumentHeader',
  props: ['modelValue'],
  emits: ['update:modelValue'],
  methods: {
    Build_And_Emit() {
      //$emit('update:modelValue', $event.target.value)
    }
  }
};
</script>

<template>
  <div className="headerGrid">
    <div className="logo">
      <input :value="modelValue.symbol" @input="Build_And_Emit" />
    </div>
  </div>
</template>
