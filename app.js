const madge = require('madge');

//madge('../three-js-2021/src').then((res)=>{
//  console.log(res);
//});

madge('../staff-app/src/Community/common/BaseMaintain/BaseTableView.js')
	.then((res) => res.image('./images/base-table-view-dev.svg'))
	.then((writtenImagePath) => {
	  console.log('Image written to ' + writtenImagePath);
	});
