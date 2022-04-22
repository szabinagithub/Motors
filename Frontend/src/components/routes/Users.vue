<template>
  <div class="my-border">
      <h1>Users</h1>
      <ul>
            <li v-for="(user, index) in users" :key="index">
                {{user.email}}
            </li>
        </ul>
  </div>
</template>

<script>
export default {
    name: "Users",
    data(){
        return {
            users: []
        }
    },
    created(){
       this.getUsers()
    },
    methods: {
        getUsers() {
            let headers = new Headers();

            headers.append("Content-Type", "application/json");
            headers.append(
                "Authorization",
                "Bearer " + this.$root.$data.token
            );
           

            const url = `${this.$loginServer}/api/users`;
            fetch(url,{
                method: "GET",
                headers: headers
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log("Success:", data.data);
                    this.users = data.data;
                })
                .catch((error) => {
                    console.error("Error:", error);
                    this.users = [];
                });
        },
    }
}
</script>

<style>

</style>