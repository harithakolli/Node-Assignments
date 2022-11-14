const fs = require('fs/promises')

const myFileWriter = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name

	fs.writeFile(fileName,fileContent).then(function(data) {
		console.log("file written successfully!");
	  })
	  .catch(function(error) {
		 console.log(error);
	  })
	// fs.writeFile(fileName,fileContent, (err)=>{
	// 	if (err) return callback(err);
	// 	console.log("File written successfully");
	// });

}

const myFileReader = async (fileName) => {
	// write code here
	// dont chnage function name
	fs.readFile(fileName).then(function(data) {
	  console.log(""+data);
	})
	.catch(function(error) {
	   console.log(error);
	})
	// const data = await fs.readFile(fileName, 'UTF-8');
	// console.log(data.toString());
	// fs.readFile(fileName, (err, data) => {
		
	// 	if(err) 
	// 	  throw err;
	// 	else
	// 	    console.log(data);
	// });
   }


const myFileUpdater = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	fs.appendFile(fileName,fileContent).then(function(data) {
		console.log("file updated successfully!");
	  })
	  .catch(function(error) {
		 console.log(error);
	  })
// fs.appendFile(fileName, fileContent, function (err){
// 		if (err) return callback(err);
// 		console.log("file updated successfully!")
// 	});

	
}

const myFileDeleter = async (fileName) => {
	// write code here
	// dont chnage function name
	fs.unlink(fileName).then(function(data) {
		console.log("file deleted!");
	  })
	  .catch(function(error) {
		 console.log(error);
	  })
// fs.unlink(fileName,(err)=>{
// 		if (err) return callback(err);
// 		console.log("file deleted successfully!")
		
// 	});
}
module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter }







