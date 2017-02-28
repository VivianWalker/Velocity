(function($){

	var container=$(".container");
	var box=$(".box");
	var buddy=$(".buddy");
	var pop=$(".pop");
	var btn=$(".btn");
	var close=$(".close");
	var imgs=pop.find('img');

	//定义动画
	$.Velocity.RegisterUI('a.slideUpIn',{
		defaultDuration:500,
		calls:[
			[{opacity:[1,0],translateY:[0,100]}]
		]
	});
	$.Velocity.RegisterUI('a.slideDownOut',{
		defaultDuration:300,
		calls:[
			[{opacity:[0,1],translateY:[100,0]}]
		]
	});
	$.Velocity.RegisterUI('a.scaleIn',{
		defaultDuration:300,
		calls:[
			[{opacity:[1,0],scale:[1,0.3]}]
		]
	});
	$.Velocity.RegisterUI('a.scaleOut',{
		defaultDuration:300,
		calls:[
			[{opacity:[0,1],scale:[0.3,1]}]
		]
	});
	//进入动画效果,动画序列
	var seqInit=[{
		elements:container,
		properties:'a.slideUpIn',
		options:{
			delay:300
		}
	},{
		elements:box,
		properties:'a.slideUpIn',
		options:{
			sequenceQueue:false
		}
	},{
		elements:buddy,
		properties:'a.slideUpIn',
		options:{
			sequenceQueue:false,
			delay:60
		}
	}];
	var seqClick=[{
		elements:container,
		properties:'a.slideDownOut'
	},{
		elements:box,
		properties:'a.slideDownOut',
		options:{
			sequenceQueue:false
		}
	},{
		elements:container,
		properties:'a.slideUpIn'
	},{
		elements:pop,
		properties:'a.slideUpIn',
		options:{
			sequenceQueue:false
		}
	},{
		elements:imgs,
		properties:'a.slideUpIn'
	}];
	var seqClose=[{
		elements:imgs,
		properties:'a.scaleOut'
	},{
		elements:container,
		properties:'a.slideDownOut'
	},{
		elements:pop,
		properties:'a.slideDownOut',
		options:{
			sequenceQueue:false
		}
	},{
		elements:container,
		properties:'a.slideUpIn',
	},{
		elements:box,
		properties:'a.slideUpIn',
		options:{
			sequenceQueue:false
		}
	}];
	//执行动画
	$.Velocity.RunSequence(seqInit);
	btn.on('click',function(){
		$.Velocity.RunSequence(seqClick);
	});
	close.on('click',function(){
		$.Velocity.RunSequence(seqClose);
	});
})(jQuery)