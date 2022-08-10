//Creat stream 
    const rstream = fs.createReadStream('test.txt');
    
    //Data means if there any readable-data then send it to client
    rstream.on('data',(chunkdata)=>{
        res.write(chunkdata)
    })

    //This evend fired when there is no more data to read
    rstream.on('end',()=>{
        res.end()
    })

    //Use error for if there any error found 
    rstream.on('error',(err)=>{
        res.end('file not found')
    })

    //When all the data flushed then this event fired  
    rstream.on('finish',()=>{
        res.end('Finish')
    })
