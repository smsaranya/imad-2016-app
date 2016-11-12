var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/article1', function (req, res) {
   res.sendFile(path.join(__dirname, 'ui', 'artcle1.html'));
});
app.get('/article2', function (req, res) {
   res.sendFile(path.join(__dirname, 'ui', 'article2.html'));
});
app.get('/article3', function (req, res) {
   res.sendFile(path.join(__dirname, 'ui', 'article3.html'));
});
app.get('/file2', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'art.html'));
});
var counter=0;
app.get('/counter', function (req, res) {
    counter=counter+1;
  res.send(counter.toString());
});
app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});
app.get('/ui/imad.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'imad.png'));
});
app.get('/ui/love_sm2.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'love_sm2.jpg'));
});

app.get('/ui/Inspiringvideo--element219--0.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'Inspiringvideo--element219--0.jpg'));
});

app.get('/ui/i_am_worthy_sm.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'i_am_worthy_sm.jpg'));
});

app.get('/ui/watching_sm.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'watching_sm.jpg'));
});

app.get('/ui/friends_forever2_sm.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'friends_forever2_sm.JPG'));
});
app.get('intro.mp4', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'intro.mp4'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
