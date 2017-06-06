<template>
	<div id="all">
        <div class="container-fluid">
            <div class="row row-offcanvas row-offcanvas-left">
  				<asideMenu></asideMenu>
  				<thumbnails></thumbnails>
  			</div>
		</div>
  	</div>
</template>

<script>
import thumbnails from '../components/Appli_thumb'
import asideMenu from '../components/Aside_Menu'

export default {
  name: 'applicants',
  data () {
    return {
    }
  },
  components: {
    thumbnails,
    asideMenu
  }
}
</script>
