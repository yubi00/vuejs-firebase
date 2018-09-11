<template>
    <div class="signup">
        <p>Let's create a new account </p>
        <input type="text" v-model="email" placeholder="Email"><br>
        <input type="password" v-model="password" placeholder="Password"><br>
        <button @click="signUp">Sign UP</button>
        <span>or go back to <router-link to="/login">login </router-link> </span>
    </div>
</template>

<script>
import firebase from 'firebase'

export default {
    name: 'SignUp',
    data: function() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        signUp: function () {
            firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
                (user) => {
                    this.$router.replace('hello');
                },
                (err) => {
                    alert('Oops,'+err.message);
                }
            );

            this.email = "";
            this.password = "";
        }
    }
}
</script>

<style scoped>
    .signup {
        margin-top: 40px;
    }

    input {
        margin: 10px 0;
        width: 20%;
        height: 30px;
        padding: 15px;
        
    }

    button {
        margin-top: 10px;
        width: 10%;
        cursor: pointer; 
    }

    span {
        display: block;
        margin-top: 2opx;
        font-size: 11px;
    }

    
</style>
