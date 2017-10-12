<template lang="html">
  <div class="container">
      <div class="login-container">
            <div id="output"></div>
            <div class="avatar"></div>
            <div class="form-box">
                <fb-signin-button class="btn btn-info btn-block login"
                  :params="fbSignInParams"
                  @success="onSignInSuccess"
                  @error="onSignInError">
                  Sign in with Facebook
                </fb-signin-button>
            </div>
      </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      fbSignInParams: {
        scope: 'email,user_likes',
        return_scopes: true
      },
      email: "",
      pass: ""
    }
  },
  methods: {
    login (){
      axios.post(`http://localhost:3000/users/signin`, {email:this.email, user_pass: this.pass})
      .then(data => {
          console.log(data)
          localStorage.setItem('tokenjwt',data);
          this.$router.push('/home');
      })
      .catch(err => {
        console.log(err)
      })
    },
    onSignInSuccess (response) {
       console.log(response.authResponse.accessToken);
       if (response.authResponse) {
         localStorage.setItem('fbaccesstoken', response.authResponse.accessToken);
         this.getServerAtorisasiFB ();
         this.$router.push('/home');
       } else {
         console.log('User cancelled login or did not fully authorize.');
       }
    },
    onSignInError (error) {
      console.log('OH NOES', error)
    },
    getServerAtorisasiFB () {
      axios.get('http://localhost:3000/facebook/me', {
        headers: {
          accesstoken: localStorage.getItem('fbaccesstoken')
        }
      })
      .then(response => {
        localStorage.setItem('tokenjwt', response.data.tokenjwt);
        this.$router.push('/home');
      })
      .catch(err => console.log(err))
    }
  }
  ,
  created () {
    var tokenJwt = localStorage.getItem('tokenjwt')
    if(tokenJwt!=null){
      this.$router.push('/home');
    }
  }
}
</script>

<style lang="css">
fb-signin-button {
  /* This is where you control how the button looks. Be creative! */
  display: inline-block;
  padding: 4px 8px;
  border-radius: 3px;
  background-color: #4267b2;
  color: #fff;
}
</style>
