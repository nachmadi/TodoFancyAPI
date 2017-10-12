<template lang="html">
  <div class="modal fade" id="myModal" role="dialog">
      <div class="modal-dialog">
        <!-- Modal content-->
        <div class="modal-content">
          <div class="panel panel-primary">
              <div class="panel-heading">
                <h3 class="panel-title">Panel primary</h3>
              </div>
              <div class="panel-body">
                <form class="form-horizontal" @submit.prevent="addOneTodolist(todolist);cancleTodolist();">
                  <fieldset>
                    <div class="form-group" >
                      <label for="textArea" class="col-lg-2 control-label">Tanggal</label>
                      <div class="col-lg-10">
                        <textarea class="form-control" rows="3" id="textArea" v-model="todolist.tgl"/>
                      </div>
                    </div>
                    <div class="form-group">
                      <label for="textArea" class="col-lg-2 control-label">Priority</label>
                      <div class="col-lg-10">
                        <textarea class="form-control" rows="3" id="textArea" v-model="todolist.priority"/>
                      </div>
                    </div>
                    <div class="form-group">
                      <label for="textArea" class="col-lg-2 control-label">Task</label>
                      <div class="col-lg-10">
                        <textarea class="form-control" rows="3" id="textArea" v-model="todolist.task"/>
                      </div>
                    </div>
                    <div class="form-group">
                      <div class="col-lg-10 col-lg-offset-2">
                        <button type="reset" class="btn btn-default" data-dismiss="modal" @reset="cancleTodolist();">Cancel</button>
                        <button type="submit" class="btn btn-primary" >Submit</button>
                      </div>
                    </div>
                  </fieldset>
                </form>
              </div>
          </div>
        </div>
      </div>
    </div>

</template>

<script>
import { mapActions} from 'vuex'
export default {
  data () {
    return {
      todolist: {
        user_id:"nachmadi@gmail.com",
        tgl: "",
        priority: "",
        task: "",
        status: ""
      }
    }
  },
  methods: {
    ...mapActions([
      'addOneTodolist'
    ]),
    cancleTodolist () {
      this.todolist={
        user_id:"nachmadi@gmail.com",
        tgl: "",
        priority: "",
        task: "",
        status: ""
      }
    }
  }
}
</script>
