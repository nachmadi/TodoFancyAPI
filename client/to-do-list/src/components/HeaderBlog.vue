<template lang="html">
  <nav class="navbar navbar-inverse">
    <div class="container-fluid">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" href="#">To Do List</a>
      </div>
      <div class="collapse navbar-collapse" id="myNavbar">
        <ul class="nav navbar-nav navbar-right">
          <li><a href="#" @click="logout();">
            <span class="glyphicon glyphicon-log-in"></span> Log-out</a></li>
        </ul>
      </div>
    </div>
  </nav>

</template>

<script>
export default {
  methods: {
    FBLogout () {
        try{
            if (FB.getAccessToken() != null) {
                FB.logout(function(response) {
                    localStorage.removeItem('fbaccesstoken');
                    localStorage.removeItem('tokenjwt');
                    this.$router.push('/');
                });
            } else {
                console.log('token blm ada');
            }
        } catch (err) {
            // any errors just logout
            console.log(err);
        }
    }
  }
}
</script>
