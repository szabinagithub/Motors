<template>
    <div class="my-border p-3">
        <h1>Login</h1>

    
        <div class="mb-3">
            <label for="email" class="form-label">Email address</label>
            <input
                type="email"
                class="form-control"
                id="email"
                placeholder="name@example.com"
                v-model="loginData.email" />
        </div>

        <div class="mb-3">
            <label for="password" class="form-label">Password</label>
            <input
                type="password"
                class="form-control"
                id="password"
                v-model="loginData.password" />
        </div>

        <button type="button" class="btn btn-primary" @click="onClickLogin()">
            Login
        </button>
        <div class="alert alert-danger m-3" role="alert"
            v-if="noSuccess"
        >
            Bejelentkezés sikertelen: Rossz email vagy jelszó
        </div>
        <div>
            <ul>
                <li>{{ loginResponse.success }}</li>
                <li>{{ loginResponse.message }}</li>
            </ul>
            <textarea
                name=""
                id=""
                cols="85"
                rows="5"
                v-model="loginResponse.token"></textarea>
        </div>
    </div>
</template>

<script>
export default {
    name: "Login",
    data() {
        return {
            loginData: {
                email: "admin@gmail.com",
                password: "admin123",
            },
            loginResponse: {
                success: 0,
                message: "",
                token: null,
            },
            noSuccess: false
        };
    },
    methods: {
        onClickLogin() {
            const url = `${this.$loginServer}/api/users/login`;
            let headers = new Headers();
            headers.append("Content-Type", "application/json");
            fetch(url, {
                method: "POST", // or 'PUT'
                headers: headers,
                body: JSON.stringify(this.loginData),
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log("Success:", data);
                    this.loginResponse = data;
                    this.$root.$data.token = data.token;
                    this.$root.$data.user = data.data;
                    if (data.success) {
                        this.$router.push({ path: "/"});
                    } else {
                        this.noSuccess = true;
                        setTimeout(()=>{
                            this.noSuccess = false;
                        },2000);
                    }
                })
                .catch((error) => {
                    console.error("Error:", error);
                });
        },
    },
};
</script>

<style></style>
