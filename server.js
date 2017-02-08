var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var articles={
'article-one.html' :{
 title:'Article One I yashwant kumar',   
  heading: 'Article One',  
   date:'Sep 5,2016', 
   content: `
   <p>
        
        This is the content of my first article.This is the content of my first article.This is the content of my first article.This is the content of my first article.This is the content of my first article.This is the content of my first article.This is the content of my first article.This is the content of my first article.
   </p>
   <p>
        
        This is the content of my first article.This is the content of my first article.This is the content of my first article.This is the content of my first article.This is the content of my first article.This is the content of my first article.This is the content of my first article.This is the content of my first article.
    </p>
    <p>
        
        This is the content of my first article.This is the content of my first article.This is the content of my first article.This is the content of my first article.This is the content of my first article.This is the content of my first article.This is the content of my first article.This is the content of my first article.
     </p>  `
},
'article-two':{
    title:'Article Two I yashwant kumar',   
  heading: 'Article Two',  
   date:'Sep 15,2016', 
   content: `
   <p>
        This is my second article.This is my second article.This is my second article.
        
     </p>  `
},
'article-three':{
   title:'Article three I yashwant kumar',   
   heading: 'Article Three',  
   date:'Sep 16,2017', 
   content: `
   <p>
        This is my three article.This is my second article.This is my second article.
        
     </p>  `}
};

function createTemplate(data){

var titl=title.data;
var date=title.date;
var heading=data.heading;
var content=data.content;
 
 var htmlTemplate=` 
 <html>
  <head>
      <title>
     
      ${title}
</title>
   <link href="/ui/style.css" rel="stylesheet" />
   


</head>
<body>
   <div class="container">
      <div>
       <a href="/" >Home</a>
   </div>
  <hr/>
   <h3>
      ${heading}
    </h3>
  <div>
     ${date}
  </div>
  
  
<div>
   ${content}
     </div>  
  </div>
    </body>

</html>
   `;
  return htmlTemplate ;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/:articleName',function(req, res){
   // articleName==article-one
   // articles[articleName]== {} content object for article one
   var articleName = req.param.articleName;
   
    res.send(createTemplate(articles[articleName])); 
    });

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
