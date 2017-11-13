const modJson = {
	child: [
		//模块一
		{
			col: 6,
			module: 'banner'
		},
		{
			col: 6,
			module: 'icon'
		},
		//模块二
		{
			col: 6,
			child: [{
					col: 3,
					module: 'showcase'
				},
				{
					col: 3,
					module: 'showcase'
				}
			]
		},
		//模块三
		{
			col: 6,
			child: [{
					col: 3,
					module: 'showcase'
				},
				{
					col: 3,
					child: [{
							col: 6,
							module: 'showcase'
						},
						{
							col: 6,
							module: 'showcase'
						}
					]
				}
			]
		},
		//模块四
		{
			col: 6,
			child: [{
					col: 3,
					child: [{
							col: 6,
							module: 'showcase'
						},
						{
							col: 6,
							module: 'showcase'
						}
					]
				},
				{
					col: 3,
					module: 'showcase'
				}
			]
		},
		//模块五
		{
			col: 6,
			child: [{
					col: 3,
					child: [{
							col: 6,
							module: 'showcase'
						},
						{
							col: 6,
							module: 'showcase'
						}
					]
				},
				{
					col: 3,
					child: [{
							col: 6,
							module: 'showcase'
						},
						{
							col: 6,
							module: 'showcase'
						}
					]
				}
			]
		},
		{
			col: 6,
			module: 'showcase'
		},
		{
			col: 6,
			module: 'swiper-sm'
		},
		{
			col: 6,
			module: 'swiper-md'
		},
		{
			col: 6,
			module: 'goods'
		}
	]
}