const express = require('express')
const app = express();

app.listen(8000, function() {
  console.log('listening on 8000')
})

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

app.get('/flip', (req, res) =>{
  let headsOrTails = (Math.floor(Math.random()*2))
  let result = {side: (headsOrTails) ? 'heads' : 'tails' }
  res.json(result)
})

app.use(express.static('public'))
