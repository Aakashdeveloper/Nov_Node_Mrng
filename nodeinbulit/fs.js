var fs = require('fs');

//write and overwrite
/*fs.writeFile('mytext.txt','This is nOde jS 1111',function(err){
    if(err) throw err;
    console.log('File created')
})

//append
fs.appendFile('mytext.txt','This is my content \n',function(err){
    if(err) throw err;
    console.log('File appeneded')
});

//read file
fs.readFile('mytext.txt','utf-8',function(err,data){
    if(err) throw err;
    console.log(data)
});

//rename
fs.rename('mytext.txt','myfile.txt',function(err){
    if(err) throw err;
    console.log("File Renamed")
})
*/
//delete
fs.unlink('mytext.txt',function(err){
    if(err) throw err;
    console.log("File Deleted")
})
