const express = require('express');
const fileUpload = require('express-fileupload');
const { S3Client, ListObjectsV2Command, PutObjectCommand } = require('@aws-sdk/client-s3');
const cors = require('cors')
const fs = require('fs')
const path = require('path')





const app = express()
app.use(cors())

const s3Client = new S3Client({
    region: 'us-east-1',
    endpoint: 'http://localhost:4566',
    forcePathStyle: true
})

const listObjectsParams = {
    Bucket: 'bucket2-4'
}

listObjectsCmd = new ListObjectsV2Command(listObjectsParams)

app.get('/', (req, res) => {
    res.send('Welcome to my API!');
});

app.get('/images', (req, res) => {
    listObjectsParams = {
        Bucket: 'bucket2-4'
    }
    s3Client.send(new ListObjectsV2Command(listObjectsParams))
        .then((listObjectsResponse) => {
            res.send(listObjectsResponse)
    })
})








const PORT = process.env.PORT || 8080;

//Server
app.listen(PORT, ()=>{
    console.log('server is running on 8080');
});