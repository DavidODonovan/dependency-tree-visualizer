const madge = require('madge');

//madge('../three-js-2021/src').then((res)=>{
//  console.log(res);
//});

madge('../three-js-2021/src/components/06GeometryDeepDive')
	.then((res) => res.image('./image.svg'))
	.then((writtenImagePath) => {
		console.log('Image written to ' + writtenImagePath);
	});
