const express = require('express')
const ogs = require('open-graph-scraper');
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())

app.post("/", (req, res) => {
  const {url} = req.body
  try{
    const options = { url };
    ogs(options).then((data) => {
    const { error, result, response } = data; 
    res.json({
        success: true,
        result, error
    })
  })
  } catch(err) {
    console.log(err.message);
  }
    
})

app.listen(4000, () => console.log(`Server is running..`))
