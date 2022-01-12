const express = require('express');
const app = express();
app.use(express.static('./dist/user-playlist-angular'));
app.get('/*', function (req, res) {
  res.sendFile(__dirname + '/dist/user-playlist-angular/index.html');
});

app.listen(process.env.PORT || 4200);
