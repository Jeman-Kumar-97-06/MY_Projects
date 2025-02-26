const express = require('express');
const cors    = require('cors');
const ytdl    = require('ytdl-core');

const app     = express();

app.use(cors());

app.get('/download',async (req,res)=>{
    const videoURL = req.query.url;
    if (!ytdl.validateURL(videoURL)){
        return res.status(400).json({error:"Invalid Youtube URL!"})
    }
    try {
        const videoInfo = await ytdl.getInfo(videoURL);
        console.log(videoInfo.formats)
        const format    = ytdl.chooseFormat(videoInfo.formats,{quality:"lowestvideo"});
        res.header('Content-Disposition',`attachment; filename="video.mp4"`);
        ytdl(videoURL,{format}).pipe(res);
    } catch (err) {
        res.status(500).json({error:"Failed to process video!"})
    }
});

app.listen(5000,()=>{console.log("Server listening to requests at 5000")})