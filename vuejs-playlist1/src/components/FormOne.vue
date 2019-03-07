<template lang="pug">
  div
    div(slot="form-header")
      h1 form one
    div(slot="form-fields")
      input(type='text' placeholder="name")
      textarea
    div(slot="form-controls")
      button Submit
</template>

<script>

</script>

<style>

</style>
