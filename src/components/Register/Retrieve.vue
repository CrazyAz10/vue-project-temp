<template>
	<div id="retrieve">
		<div class="register-top">
			<div class="form-box">
				<h3 class="login-tt">重置登录密码</h3>
				<el-form :model="retForm" status-icon :rules="urules" ref="retForm">
				  	<div class="login-input">
						<el-form-item label="" prop="userName">
						  <el-input
						  	size="small"
						  	type="text"
							placeholder="用户账号"
							v-model="retForm.userName"
							auto-complete="off"
							clearable>
						  </el-input>
					  </el-form-item>
					  <el-form-item label="" prop="retcode">
						  <el-input
						  	size="small"
						  	type="text"
							placeholder="验证码"
							v-model="retForm.retcode"
							auto-complete="off"
							clearable
							class="eq-code">
						  </el-input>
						  <span class="code-img">
						  	<img src="" alt="">111
						  </span>
					  </el-form-item>
					</div>
				 	<el-button type="primary" class="submit"  size="small" @click="submitForm('retForm')">提交</el-button>
				</el-form>
			</div>
			<div class="login-change">重置登录密码后24小时内禁止提币。</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'retrieve',
		data: function(){
			var phonePxp = /0?(13|14|15|17|18|19)[0-9]{9}/,
				emailPxp = /\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}/;
			var validatePass = (rule, value, callback) => {
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
			var validatePass2 = (rule, value, callback) => {
			    if (value === '') {
			    	callback(new Error('请输入验证码'));
			    } else if (value!=this.retcode) {
			    	callback(new Error('验证码错误'));
			    } else {
			    	callback();
			    }
			};
			return {
				retForm: {
					userName: '',
					retcode: ''
				},
				urules: {
					userName: { validator: validatePass, trigger: 'blur' },
					retcode: { validator: validatePass2, trigger: 'blur' },
				},
				retcode: ''
			}
		},
		methods: {
			submitForm(formName) {
				this.$refs[formName].validate((valid) => {
				  if (valid) {
					if(this.retForm.userName.length<5){
						this.$message('请输入正确格的用户名、邮箱或手机号');
					}else{
						//表单验证通过
						//提交登录表单
					}
				  } else {
					return false;
				  }
				});
			},
			handleClick(tab, event) {
			
			},
			getcode() {
				var regular = /0?(13|14|15|17|18|19)[0-9]{9}/;
				if(!regular.test(this.plgForm.phone)){
					this.$message('请输入有效的手机号码');
				}else{
					//手机号有效 开始发送短信验证码
				}
			}
		},
		mounted: function(){

		}
	}
</script>

<style lang="scss" scope>
	@import '@/assets/css/index.scss';
	#retrieve{
		width: 420px;
		margin: 0 auto;
		position: relative;
		background: #fff;
		box-sizing: border-box;
		border: 1px solid #E5E5E5;
		border-radius: 5px;
		.form-box{
			padding: 0 50px;
			.login-tt{
				font-size: 20px;
				line-height: 20px;
				text-align: center;
				color: #333;
				padding: 50px 0 30px;
			}
			.missing{
				margin: 0 0 15px;
				a{
					color: #5670BF;
				}
			}
			.eq-code{
				width: 50%;
			}
			.code-img{
				width: 45%;
				display: inline-block;
				background: #ccc;
				float: right;
			}
		}
		.register-top{
			box-sizing: border-box;
			padding-bottom: 82px;
			position: relative;
			.submit{
				width: 100%;
				margin-bottom: 20px ;
			}
			.login-change{
				position: absolute;
				bottom: 0;
				left: 0;
				width: 100%;
				line-height: 80px;
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
	}
</style>