const express = require('express');
const fileUpload = require('express-fileupload');
const { S3Client, ListObjectsV2Command, PutObjectCommand } = require('@aws-sdk/client-s3');
const cors = require('cors')
const fs = require('fs')

const app = express()
app.use(cors())

app.get('/', (req, res) => {
    res.send('Welcome to my API!');
});

const PORT = process.env.PORT || 8080;

//Server
app.listen(PORT, ()=>{
    console.log('server is running on 8080');
});