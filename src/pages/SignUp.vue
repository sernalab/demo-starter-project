<template>
<div class="container">
	<div>
		<p>SKYLAB PROJECTS</p>
	</div>
	<form action="" @submit.prevent="submit" class="col-md-6">
		<div class="panel-body">
			<vue-form-generator 
				:schema="schema" 
				:model="model" 
				:options="formOptions">
			</vue-form-generator>
			<button type="submit">Send</button>
		</div>
	</form>
</div>
</template>

<script>
import VueFormGenerator from "vue-form-generator";
import Vue from "Vue";
import { mapMutations } from 'vuex'

Vue.use(VueFormGenerator);

export default{
	components:{
			"vue-form-generator": VueFormGenerator.component
		},
		data() {
			return {
					model: {             
						id: 1,
						name: "John Doe",
						password: "J0hnD03!x4",
						promotion: ["2016-04", "2016-07", "2016-9",  "2017-01", "2017-04", "2017-07"],
						image: [""],
						made: ["Javascript", "VueJS"],
						email: "john.doe@gmail.com",
						working: true
					},
				
					schema: {
						fields: [{
							type: "input",
							inputType: "text",
							label: "ID (disabled text field)",
							model: "id",
							readonly: true,         
							disabled: true
						},{
							type: "input",
							inputType: "text",
							label: "Name",
							model: "name",
							placeholder: "Your name",
							featured: true,
							required: true
						},{
							type: "input",
							inputType: "password",
							label: "Password",
							model: "password",
							min: 6,
							required: true,
							hint: "Minimum 6 characters",
							validator: VueFormGenerator.validators.string
						},{
							type: "select",
							label: "Promotion",
							model: "promotion",      
							values: ["2016-04", "2016-07", "2016-09", "----" , "2017-01", "2017-04", "2017-07"],
						},{
							type: "select",
							label: "Project made with",
							model: "made",      
							values: ["Javascript", "VueJS", "CSS3", "HTML5"]
						},{
							type: "input",
							inputType: "email",
							label: "E-mail",
							model: "email",
							placeholder: "User's e-mail address"
						},
						{
							type: "input",
							inputType: "email",
							label: "Project Name",
							model: "project_name",
							placeholder: "Insert Name"
						},{
							type: "checkbox",
							label: "Working",
							model: "working",
							default: true
						}]
					},
					formOptions: {
						validateAfterLoad: true,
						validateAfterChanged: true
					}
				}
		},
		methods: {
			...mapMutations([
				'addUser'
			]), 
			submit() {
				this.addUser(this.model)
				this.$router.push('/projects')
			}
		}  
};
</script>

<style src="../assets/css/signup-form.css"></style>
