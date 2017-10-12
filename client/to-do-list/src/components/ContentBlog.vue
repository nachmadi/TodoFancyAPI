<template lang="html">
  <div class="container-fluid text-center">
    <div class="col-md-10">
      <todolis v-for="todolist in todolists" v-bind:propsTodolist="todolist" v-bind:key="todolist._id"/>
    </div>
  </div>
</template>

<script>
import todolis from '@/components/todolis'
import { mapActions, mapState } from 'vuex'
export default {
  components: {
    todolis
  },
  computed: {
    ...mapState([
      'todolists'
    ])
  },
  methods: {
    ...mapActions([
      'getAllTodolis'
    ])
  },
  created () {
    this.getAllTodolis()
  }
}
</script>
