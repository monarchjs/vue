<script setup lang="ts">
defineProps<{
  text: string
  variant: 'solid' | 'secondary'
}>()
</script>

<template>
  <button class="btn-cta">{{ text }}</button>
</template>

<style lang="scss" scoped>
@import '../../styles/colors';
$base-color: #1b1b32;

.btn-cta {
  background-color: $background-secondary;
  border-width: 3px;
  border-color: #1b1b32;
  border-radius: 0;
  border-style: solid;
  color: $base-color;
  display: block;
  margin-bottom: 0;
  font-weight: normal;
  text-align: center;
  -ms-touch-action: manipulation;
  touch-action: manipulation;
  cursor: pointer;
  white-space: nowrap;
  padding: 6px 12px;
  font-size: 18px;
  line-height: 1.42857143;
}

.btn-cta:active:hover,
.btn-cta:focus,
.btn-cta:hover {
  background-color: #1b1b32;
  border-width: 3px;
  border-color: #000;
  background-image: none;
  color: #f5f6f7;
}
</style>
