$(function() {

	//执行初始化数据；
	var data = modJson.child;

	// JSON 转 DOM 树结构的方法封装
	window.templateJsonToDom = function(data, wrap){

		var html = ''
		for(var i = 0;i<data.length;i++){
			html += cycle(data[i]);
		}
		$(wrap).html(html);
		//window.localStorage.setItem('module_id',1)

		window.module_id = 1;
		//求取 module_id最大值
		if($(wrap).selector === '.ui-sortable'){
			var arr = [0];
			$.each($(wrap).find('[data-module_id]'),function(i,n){
				arr.push(+$(n).data('module_id'))
			})

			var max = Math.max.apply(null, arr)
			window.module_id = ++max
			console.log(window.module_id)
		}
	}

	window.templateJsonToDom(data, '#module > div')
	//Html的动态生成；
	function cycle(data){

		var html = ''
		if(data.child){
			html += '<div class="' + (data.col === 6 ? 'ui-state-highlight' : '') + ' jsondzh" style="' + style(+data.col) + '" data-col="'+data.col+'">'
			for(var i = 0;i<data.child.length;i++){
				html += cycle(data.child[i]);
			}
			html += '</div>'
		}else{
			//console.log(data.conf)
			switch(data.module){
				case 'banner':
				 	html += '<div class="ui-state-highlight jsondzh" style="' + style(+data.col) + '" data-col="'+data.col+'" data-module ="'+data.module+'"'
					html += data.module_id ? 'data-module_id="'+data.module_id+'"' : ''
					html += '>'
				 	html += '<div class="banner">'
					html += '<img src="../images/module/banner_demo.png"/>'
					html +=	'</div>'
					html += '</div>'
				 	break;
			 	case 'icon':
			 		if(data.conf){
						var conf = JSON.stringify(data.conf).replace(/\"/ig, '&quot;');
						html += '<div class="jsondzh" style="' + style(+data.col) + '"  data-col="'+data.col+'" data-module="'+data.module+'" data-conf = "'+conf+'" '
					}else{
						html += '<div class="jsondzh" style="' + style(+data.col) + '"  data-col="'+data.col+'" data-module="'+data.module+'"'
					}
			 		html += data.module_id ? 'data-module_id="'+data.module_id+'"' : ''
			 	    html += '>'
			 	 	html += '<div class="icon">'
			 	 	if (data.conf) {
			 	 		var temp = ''
			 	 		for(var i = 0;i<data.conf.items.length;i++){
			 	 			temp += `<li style="float:left">
			 	 					<img class="icon-jpg" src="${data.conf.items[i].pic}"/>
									<p>${data.conf.items[i].title}</p>
									</li>`
			 	 		}
						html += `<ul>${temp}</ul>`
					} else {
						html += '<img src="../images/module/icon_demo.png" />'
					}
			 		html +=	'</div>'
			 		html += '</div>'
			 	 	break;
				case 'showcase':
					if(data.conf){
						var conf = JSON.stringify(data.conf).replace(/\"/ig, '&quot;');
						html += '<div class="jsondzh" style="' + style(+data.col) + '"  data-col="'+data.col+'" data-module="'+data.module+'" data-conf = "'+conf+'" '
					}else{
						html += '<div class="jsondzh" style="' + style(+data.col) + '"  data-col="'+data.col+'" data-module="'+data.module+'"'
					}
					html += data.module_id ? 'data-module_id="'+data.module_id+'"' : ''
				  	html += '>'
					html += '<div class="showcase">'
					/*if (data.module.conf && data.module.conf.pic) {
						html += '<img src="' + data.module.conf.pic + '" />'
					} else {
						html += '<img src="../images/module/showcase_demo2.png" />'
					}*/
					if (data.conf && data.conf.pic) {
						html += '<img src="' + data.conf.pic + '" />'
					} else {
						html += '<img src="../images/module/showcase_demo2.png" />'
					}
					html += '</div>'
					html += '</div>'
					break;
				case 'goods':
					if(data.conf){
						var conf = JSON.stringify(data.conf).replace(/\"/ig, '&quot;');
						html += '<div class="jsondzh" style="' + style(+data.col) + '"  data-col="'+data.col+'" data-module="'+data.module+'" data-conf = "'+conf+'" '
					}else{
						html += '<div class="jsondzh" style="' + style(+data.col) + '"  data-col="'+data.col+'" data-module="'+data.module+'"'
					}
					html += data.module_id ? 'data-module_id="'+data.module_id+'"' : ''
				 	html += '>'
				 	html += '<div class="goods">'
				 	if(data.conf){
				 		html += '<h3>'+data.conf.title+'</h3>'
				 	}else{
				 		html += '<h3>江楠精选</h3>'
				 	}
				 	html += '<img src="../images/module/goods_demo.png"/>'
					html +=	'</div>'
					html += '</div>'
					break;
				case 'swiper-sm':
					if(data.conf){
						var conf = JSON.stringify(data.conf).replace(/\"/ig, '&quot;');
						html += '<div class="jsondzh" style="' + style(+data.col) + '"  data-col="'+data.col+'" data-module="'+data.module+'" data-conf = "'+conf+'" '
					}else{
						html += '<div class="jsondzh" style="' + style(+data.col) + '"  data-col="'+data.col+'" data-module="'+data.module+'"'
					}
					html += data.module_id ? 'data-module_id="'+data.module_id+'"' : ''
				 	html += '>'
				 	html += '<div class="swiper-sm">'
				 	if(data.conf){
				 		console.log(data.conf)
				 		html += '<h3>'+data.conf.title+'<span>'+data.conf.sub+'</span><span class="countDown">'+timeFormat(data.conf.endTime)+'</span></h3>'

				 	}else{
				 		html += '<h3>限量抢购<span>低价直供 售完即止</span><span class="countDown">倒计时</span></h3>'

				 	}
					html += '<img src="../images/module/swiper_demo1.png"/>'
					html +=	'</div>'
					html += '</div>'
					break;
				case 'swiper-md':
					if(data.conf){
						var conf = JSON.stringify(data.conf).replace(/\"/ig, '&quot;');
						html += '<div class="jsondzh" style="' + style(+data.col) + '"  data-col="'+data.col+'" data-module="'+data.module+'" data-conf = "'+conf+'" '
					}else{
						html += '<div class="jsondzh" style="' + style(+data.col) + '"  data-col="'+data.col+'" data-module="'+data.module+'"'
					}
					html += data.module_id ? 'data-module_id="'+data.module_id+'"' : ''
				 	html += '>'
				 	html += '<div class="swiper-md">'
				 	if(data.conf){
				 		html += '<h3>'+data.conf.title+'</h3>'
				 	}else{
				 		html += '<h3>优选供应商</h3>'
				 	}
				 	html += '<img src="../images/module/swiper_demo2.png"/>'
					html +=	'</div>'
					html += '</div>'
					break;
			}
		}
		return html
	}

	//Css的动态生成；
	function style (col) {
	  return 'display: flex; flex-direction: ' + (col === 6 ? 'row' : 'column') + '; flex: 1 1 ' + (col / 6 * 100) + '%;'
	}

})
