if (process.argv.slice(2).length === 1) {
  let name = process.argv.slice(2)[0];
  let express = require('express');
  let app = express();
  const PORT = 80;
    if (name === 'media') {
      app.use(express.static('MediaReceiver'))
    } else if (name === 'mse'){
      app.use(express.static('MSEMediaReceiver'))
    }
  app.listen(PORT, () => {
    console.log('Server is running at:', PORT);
  });
} else {
  console.log('missing parameters !');
}

