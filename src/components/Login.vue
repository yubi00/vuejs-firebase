<template>
    <div class="login">
        <h3>Sign In </h3>
        <input type="text" v-model="email" placeholder="Email"><br>
        <input type="password" v-model="password" placeholder="Password"><br>
        <button @click="signIn">Connection</button>
        <p> You dont have an account ? You can <router-link to="/signup">create one</router-link> </p>
    </div>
</template>

<script>
import firebase from 'firebase'

export default {
    name: 'Login',
    data: function() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        signIn: function() {
            firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
                (user) => {
                    this.$router.replace('hello');
                },
                (err) => {
                    alert('Opps '+err.message);
                }
            );

            
            
        }
    }
}
</script>

<style scoped>
    .login {
        margin-top: 40px;
    }

    input {
        margin: 10px 0;
        width: 30%;
        height: 30px;
        cursor: pointer;
        
    }

    p {
        margin-top: 40px;
        font-size: 13px;
    }

    p a {
        text-decoration: underline;
        cursor: pointer;
    }
</style>
