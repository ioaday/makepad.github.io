module.exports=require('base/view').extend({
	name:'Fill',
	props:{
		color:'red'
	},
	tools:{
		Bg:require('tools/bg').extend({
			color:''
		})
	},
	onDraw:function(){
		this.drawBg({
			x:0,
			y:0,
			w:this.$w,
			h:this.$h,
			color:this.color
		})
	}
})