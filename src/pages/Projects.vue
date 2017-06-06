<template>
	<div id="all">
        <div class="container-fluid">
            <div class="row row-offcanvas row-offcanvas-left">
  				  <allProjects></allProjects>
  			</div>
		</div>
  	</div>
</template>

<script>
import allProjects from '../components/Project_thumb'

export default {
  name: 'projects',
  data () {
    return {
    }
  },
  components: {
    allProjects
  }
}
</script>
