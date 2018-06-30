<template>
	<div id="reg">
		<div class="register-top">
			<el-form :model="rgForm" status-icon :rules="rules" ref="rgForm">
			  	<h2 class="login-tt">会员注册</h2>
			  	<div class="login-input">
			    <el-alert
			        title="该账号已经存在，请重新输入!"
			        type="error"
			        show-icon
			        :closable="false" v-if="repetition">
			    </el-alert>
			    	<el-form-item label="" prop="userName">
				      <el-input
				      	size="small"
				      	type="text"
				        placeholder="邮箱/手机"
				        v-model="rgForm.userName"
				        auto-complete="off"
				        clearable>
				      </el-input>
				  </el-form-item>
			      <el-form-item label="" prop="password">
				      <el-input
				      	size="small"
				      	type="password"
				        placeholder="登录密码"
				        v-model="rgForm.password"
				        auto-complete="off"
				        clearable>
				      </el-input>
				  </el-form-item>
			      <el-form-item label="" prop="confPassword">
				      <el-input
				      	size="small"
				      	type="password"
				        placeholder="确认登录密码"
				        v-model="rgForm.confPassword"
				        auto-complete="off"
				        validate-on-rule-change="true"
				        clearable>
				      </el-input>
				  </el-form-item>
			      <el-form-item label="" prop="dealPassword">
			  	      <el-input
			  	      	size="small"
			  	      	type="password"
			  	        placeholder="交易密码 (不可与登录密码相同) "
			  	        v-model="rgForm.dealPassword"
			  	        auto-complete="off"
			  	        clearable>
			  	      </el-input>
			  	  </el-form-item>
			      <el-form-item label="" prop="confDealPassword">
			  	      <el-input
			  	      	size="small"
			  	      	type="password"
			  	        placeholder="确认交易密码"
			  	        v-model="rgForm.confDealPassword"
			  	        auto-complete="off"
			  	        validate-on-rule-change="true"
			  	        clearable>
			  	      </el-input>
			  	  </el-form-item>
			 	</div>
			  	<div class="captcha register-captcha"></div>
			 	<el-button type="primary" class="submit"  size="small" @click="submitForm('rgForm')">注册</el-button>
			 	<div class="login-check">
			 		<el-form-item label="" prop="terms">
				      	<el-checkbox v-model="rgForm.terms" name="terms"></el-checkbox> 我已阅读并接受
				    	<a href="#" target="_blank">《服务条款》</a>
			    	</el-form-item>
			    </div>
			</el-form>
		</div>
	  	<div class="login-change">已有BEBAY账号？
		    <router-link :to="{path: '/register',query: {lor: 'lg'}}">立即登录</router-link>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'reg',
		data: function(){
			var phonePxp = /0?(13|14|15|17|18|19)[0-9]{9}/,
				emailPxp = /\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}/;
		    var validatePass1 = (rule, value, callback) => {
		        if (value === '') {
		          callback(new Error('请再次输入登录密码'));
		        } else if (value !== this.rgForm.password) {
		          callback(new Error('两次输入登录密码不一致!'));
		        } else {
		          callback();
		        }
		    };
		    var validatePass2 = (rule, value, callback) => {
		        if (value === '') {
		          callback(new Error('请再次输入交易密码'));
		        } else if (value !== this.rgForm.dealPassword) {
		          callback(new Error('两次输入交易密码不一致!'));
		        } else {
		          callback();
		        }
		    };
		    var validatePass3 = (rule, value, callback) => {
		        if (value === '') {
		          callback(new Error('请输入手机号或邮箱'));
		        } else if (value*1) {
		        	if(!phonePxp.test(value)){
		        		callback(new Error('手机或邮箱格式错误!'));
		        	}
		        } else {
		        	if(!emailPxp.test(value)){
		        		callback(new Error('手机或邮箱格式错误!'));
		        	}else{
		        		callback();
		        	}
		        }
		    };
		    var validatePass4 = (rule, value, callback) => {
		        if (value === '') {
		          callback(new Error('请输入登录密码'));
		        }else if(!(value.length>=8&&value.length<=20)){
		        	callback(new Error('登录密码长度8-20位，支持数字、字母、字符组合'));
		        }else if (value*1) {
		        	callback(new Error('登录密码不能为纯数字'));
		        } else {
		        	callback();
		        }
		    };
		    var validatePass5 = (rule, value, callback) => {
		        if (value === '') {
		          callback(new Error('请输入交易密码'));
		        }else if(!(value.length>=8&&value.length<=20)){
		        	callback(new Error('交易密码长度8-20位，支持数字、字母、字符组合'));
		        }else if (value*1) {
		        	callback(new Error('交易密码不能为纯数字'));
		        } else {
		        	callback();
		        }
		    };
			return {
				repetition: false,
				rgForm: {
					userName: '',
					password: '',
					confPassword: '',
					dealPassword: '',
					confDealPassword: '',
					terms: [undefined]
				},
				rules: {
					userName: [
						{ validator: validatePass3, trigger: 'blur' },
					],
					password:  [
						{ validator: validatePass4, trigger: 'blur' }
			        ],
					confPassword: [
						{ validator: validatePass1, trigger: 'blur' },
					],
					dealPassword: [
						{ validator: validatePass5, trigger: 'blur' }
					],
					confDealPassword: [
						{ validator: validatePass2, trigger: 'blur' }
					],
					terms: [
			            { type: "array", required: true, message: '请认真阅读《服务条款》', trigger: 'change' }
			        ]
				}
			}
		},
		methods: {
			submitForm(formName) {
		        this.$refs[formName].validate((valid) => {
		          if (valid) {
		            //表单验证通过
		            //此处提交表单
		          } else {
		            return false;
		          }
		        });
		    },
		    changeLeare(m){
		    	this.rgForm[m]='';
		    }
		},
		mounted: function(){

		}
	}
</script>

<style lang="scss" scope>
	#reg{
		padding: 0 50px 80px;
		position: relative;
		width: 420px;
		margin: 0 auto;
		background: #fff;
		border: 1px solid #E5E5E5;
		box-sizing: border-box;
		border-radius: 5px;
		.register-top{
			box-sizing: border-box;
			.login-tt{
				font-size: 20px;
				line-height: 20px;
				text-align: center;
				color: #333;
				padding: 50px 0 30px;
			}
			.submit{
				width: 100%;
				margin-bottom: 20px ;
			}
			.login-check{
				font-size: 12px;
				line-height: 12px;
				color: #666;
				a{
					color: #5670BF;
				}
			}
		}
		.login-change{
			width: 100%;
			line-height: 80px;
			position: absolute;
			left: 0;
			bottom: 0;
		    font-size: 13px;
		    color: #666;
		    background: #FBFBFB;
		    text-align: center;
		    border-top: 1px solid #E5E5E5;
		    a{
		    	color: #5670BF;
		    	cursor: pointer;
		    }
		}
	}
</style>