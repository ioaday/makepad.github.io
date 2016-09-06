module.exports = require('base/view').extend({
	name:'Live',
	props:{
	},
	padding:[2,0,0,2],
	tools:{
		Background:require('tools/quad').extend({
			color:'#3',
			wrap:false,
		}),
		Button:require('tools/button'),
	},
	styles:{
		playButton:{
			icon:'play',
			onClick:function(){
				this.view.onPlay()
			}
		},
		stopButton:{
			icon:'stop',
			onClick:function(){
				this.view.onStop()
			}
		}
	},
	onDraw:function(){
		//alright so how are we going to select things
		this.beginBackground(this.viewGeom)
		this.drawButton(this.styles.playButton)
		this.drawButton(this.styles.stopButton)
		this.endBackground()
	}
})