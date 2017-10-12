<template>
  <div>
    <HeaderBlog/>
    <Sidebar/>
    <FormAddTodoModal/>
    <FormEditTodoModal/>
    <ContentBlog/>
    <FooterBlog/>
  </div>
</template>

<script>
import HeaderBlog from '@/components/HeaderBlog'
import Sidebar from '@/components/Sidebar'
import FormAddTodoModal from '@/components/FormAddTodoModal'
import FormEditTodoModal from '@/components/FormEditTodoModal'
import ContentBlog from '@/components/ContentBlog'
import FooterBlog from '@/components/FooterBlog'
export default {
  name: 'hello',
  components: {
    HeaderBlog,
    Sidebar,
    FormAddTodoModal,
    FormEditTodoModal,
    ContentBlog,
    FooterBlog
  },
  data () {
    return {
      msg: 'Selamat datang di....'
    }
  },
  created () {
    var tokenJwt = localStorage.getItem('tokenjwt')
    if(tokenJwt==null){
      this.$router.push('/');
    }
  }
}
</script>
