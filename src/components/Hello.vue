<template>
    <div class="hello">
        <h3> {{ loggedinuser }} </h3>
        <p> {{ msg }} </p>
        <button @click="logout">Logout</button>
    </div>
</template>

<script>
import firebase from 'firebase'
export default {
    name: 'hello',
    data() {
        return {
            loggedinuser: firebase.auth().currentUser.email,
            msg: 'You are now logged in'
        }
    },
    methods: {
        logout: function() {
            firebase.auth().signOut().then(() => {
                this.$router.replace('login');
            })
        }
    }
}
</script>

<style>

</style>
