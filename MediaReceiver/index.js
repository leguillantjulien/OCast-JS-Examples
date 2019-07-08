let express = require('express');
let app = express();
const PORT = 80;
app.use('/public',express.static(__dirname + '/public'))
app.use('/fonts',express.static(__dirname + '/fonts'))
app.use('/lib',express.static(__dirname + '/lib'))
app.use(express.static(__dirname + '/'))
app.use('/dev1', express.static(__dirname + '/')) //set APP_ID

app.listen(PORT, () => {
  console.log('Server is running at:', PORT);
});
