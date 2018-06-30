<template>
	<div id="log">
		<div class="register-top">
			<div class="form-box">
				<h3 class="login-tt">账号登录</h3>
				<el-form :model="ulgForm" status-icon :rules="urules" ref="ulgForm">
				  	<div class="login-input">
				    	<el-form-item label="" prop="userName">
					      <el-input
					      	size="small"
					      	type="text"
					        placeholder="用户账号"
					        v-model="ulgForm.userName"
					        auto-complete="off"
					        clearable>
					      </el-input>
					  </el-form-item>
				      <el-form-item label="" prop="password">
					      <el-input
					      	size="small"
					      	type="password"
					        placeholder="密码"
					        v-model="ulgForm.password"
					        auto-complete="off"
					        clearable>
					      </el-input>
					  </el-form-item>
					</div>
				 	<el-button type="primary" class="submit"  size="small" @click="submitForm('ulgForm')">登录</el-button>
				</el-form>
				<div  class="missing">
					<router-link :to="{path: '/register',query: {lor: 'rt'}}">
						忘记密码？
					</router-link>
				</div>
			</div>
			<div class="login-change">还没BEBAY经账号？
			<router-link :to="{path: '/register',query: {lor: 'rg'}}">立即注册</router-link></div>
		</div>
	</div>
</template>

<script>
import { mapMutations } from 'vuex';
	export default {
		name: 'log',
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
			return {
				activeName: "first",
				ulgForm: {
					userName: '',
					password: ''
				},
				urules: {
					userName: [{ validator: validatePass, trigger: 'blur' }],
					password:  [{ required: true, message: '请输入密码', trigger: 'blur' }]
				},
				prules: {
					phone: [],
					verification: []
				}
			}
		},
		methods: {
			submitForm(formName) {
		        this.$refs[formName].validate((valid) => {
		          if (valid) {//valid为true则表单验证通过
		            	//表单验证通过
		            	//提交登录表单
		            	//登录成功后修改store登录状态 
		            	//this.setUser({userId: '00123',userName: '616766349@qq.com',token: 'sfdsadfwef1wef1w5ef'});
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
		    },
		    ...mapMutations({
		        setUser: 'SET_USER'
		    })
		},
		mounted: function(){

		}
	}
</script>

<style lang="scss" scope>
	@import '../../assets/css/index.scss';
	#log{
		width: 420px;
		margin: 0 auto;
		position: relative;
		background: #fff;
		box-sizing: border-box;
		border: 1px solid #E5E5E5;
		border-radius: 5px;
		.el-tabs__nav{
			width: 100%;
			border: none;
			.el-tabs__item{
				width: 50%;
				box-sizing: border-box;
				text-align: center;
				height: 50px;
				line-height: 50px;
			}
		}
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