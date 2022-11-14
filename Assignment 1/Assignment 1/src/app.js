const { myFileWriter, myFileUpdater, myFileReader, myFileDeleter } =  require('.');

myFileWriter('input1.txt','Sreekar');
myFileReader('input1.txt');

//myFileUpdater('input1.txt', " Is my Son");
//myFileDeleter('input1.txt');