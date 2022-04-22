<template>
  <div class="my-border">
		<h1>Profil</h1>
        <p>Name: {{$root.$data.user.name}}</p>
        <p>Email: {{$root.$data.user.email}}</p>
        
  </div>
</template>

<script>
export default {
    name: "Profile"
}
</script>

<style>

</style>