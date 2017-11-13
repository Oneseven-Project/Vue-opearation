$(function(){
		var parent = $('.ui-sortable');
		var data = {}
		child(parent, data)
		console.log('生成JOSN:', data)
		window.localStorage.setItem('templateData', JSON.stringify(data))
		function child ($el, $data) {
			var cols = $el.children('[data-col]')
			cols.each(function(index) {
					var $this = $(this)
					var $thisData = $this.data()
					console.log($thisData)
					$data.child = $data.child ? $data.child : []
					if ($thisData.module) {
						$data.child[index] = {
							col: $thisData.col,
							module: $thisData.module,
							module_id: $thisData.module_id,
							conf: $thisData.conf || ''
						}
					} else {
						$data.child[index] = {
							col: $thisData.col
						}
					}
					if ($this.children('[data-col]').length > 0) {
						child($this, $data.child[index])
					}
			})
		}

		return false;


	
})
