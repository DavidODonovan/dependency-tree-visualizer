const madge = require('madge');

//madge('../three-js-2021/src').then((res)=>{
//  console.log(res);
//});


madge('../staff-app/src/Community/Common/BaseMaintain/BaseDetailView.js')
  .then((res)=>{
    console.log(res.obj());
})
  
	//.then((res) => res.image('./images/BaseDetailView.pdf'))
	//.then((writtenImagePath) => {
	//  console.log('Image written to ' + writtenImagePath);
	// });
