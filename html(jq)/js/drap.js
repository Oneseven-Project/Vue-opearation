document.addEventListener('DOMContentLoaded', function() {
	//禁止鼠标左键选取页面内容；
	document.onselectstart = function() {
		return false;
	};
	//可整理的箱子
	$('#sortable>div').sortable({
		revert: true,
		placeholder: 'placeholder',
		forcePlaceholderSize: true
	});
	//拖拽至垃圾箱移除；
	$('#dusbtin').droppable({
		drop: function(event, ui) {
			//判断：如果是module层，则禁止删除；
			if(ui.draggable.parent().parent()[0].id ==='module'){
				return false
			}else{
				ui.draggable.remove()	
			}
		}
	});
	//模板的箱子
//	var module_id = 1;
	/*var module_id = window.localStorage.getItem('module_id')
	console.log(module_id)*/
	
	var i = 0;
	$('#module>div>div').draggable({
		connectToSortable: '#sortable>div',
		helper: 'clone',
		revert: 'invalid',
		cursor: 'crosshair',
		stop:function(event,ui){
			var helper = $(ui.helper[0])
			//给重复的模板添加ID号
			if (helper.data('module')) {
				//当只有一层module父级的时候
				helper.attr('data-module_id', module_id)
				module_id++
			} else {
				//当有两层module父级的时候
				//console.log($('#sortable [data-module]'))
				helper.find('[data-module]').each(function(index) {
					$(this).attr('data-module_id', module_id)
					module_id++
				})
			}
			//设置icon模块的高度由内容决定；
			if(helper.attr('data-module') ==='icon'){
				helper.css('height','auto')
			}
		}
	});

})
