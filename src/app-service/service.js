const express = require('express');
const app = express();
//const router = express.Router();
const path = require('path');

app.get('/product', function (req, res) {
    res.json([
      {name:"雨傘", price: 100, pid:"1"},
      {name:"IPhomex", price: 30000, pid:"2"},
      {name:"學坐椅", price: 3100, pid:"3"},
      {name:"背親奶瓶", price: 500, pid:"4  "}
    ])
})

app.get('/member', function (req, res) {
  res.json([
    {name: "ivan", employeeID: "1"},
    {name: "Joye", employeeID: "2"},
    {name: "阿金", employeeID: "3"},
    {name: "dd", employeeID: "4"},
    {name: "阿碩仔", employeeID: "5"}
  ])
})



const mockData = {
  "1": {
    age: '30',
    skill: "敏捷開發大師"
  },
  "2": {
    age: '18',
    skill: "前端美少女並且是EQ大師"
  },
  "3": {
    age: '30',
    skill: "CSS大師"
  },
  "4": {
    age: '18',
    skill: "前端大師"
  },
  "5": {
    age: '25',
    skill: "不怕死踏入了前端之坑"
  }
}

app.get('/member/:id', function(req, res){
  const id = req.params.id
  if(mockData.hasOwnProperty(id)){
    res.json(mockData[id])
  }
})

app.get('/title', function(req, res){
  res.json({
    "title": "Today is my day!"
  })
})

app.use( express.static(path.join(__dirname, '../http-service/view/html')));
app.use('/lib', express.static(path.join(__dirname, '../http-service/builder/js')));
app.use('/css', express.static(path.join(__dirname, '../http-service/builder/css')));

app.listen(9527, function () {
  console.log('Example app listening on port 9527!');
});