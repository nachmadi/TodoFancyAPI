<template lang="html">
  <div class="col-md-3">
    <div class = "panel panel-primary">
     <div class = "panel-heading">
        <h3 class = "panel-title">{{propsTodolist.tgl}}</h3>
     </div>

     <div class = "panel-body">
        {{propsTodolist.task}}
     </div>
     <div class = "panel-footer">
       <button type="button" class="btn btn-sm" data-toggle="modal" data-target="#myModalEdit" @click="setTodolist(propsTodolist);">edit</button>
       <button class="btn btn-sm-primary" @click="deleteOneTodolist(propsTodolist._id);">delete</button>
     </div>
  </div>
</div>

  <!-- <div class="col-md-3">
    <div class="panel panel-success">
      <div class="panel-heading">
        <h3 class="panel-title">{{propsTodolist.tgl}}</h3>
      </div>
      <div class="panel-body">
        <ul>
          <li>{{propsTodolist.task}}</li>
          <li>{{propsTodolist.priority}}</li>
          <li>{{propsTodolist.status}}</li>
        </ul>
        <div class="col-lg-10 col-lg-offset-2">
          <button type="button" class="btn btn-sm" data-toggle="modal" data-target="#myModalEdit" @click="setTodolist(propsTodolist);">edit</button>
          <button class="btn btn-sm-primary" @click="deleteOneTodolist(propsTodolist._id);">delete</button>
        </div>
      </div>

    </div>
  </div> -->
</template>

<script>
import { mapActions} from 'vuex'
export default {
  props: ['propsTodolist'],
  methods: {
    ...mapActions([
      'deleteOneTodolist',
      'setTodolist'

    ]),
    sendEdit (obj) {
      alert('alooo'+obj._id)
    }
  }
}
</script>

<style lang="css">
</style>
