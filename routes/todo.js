const router=require('express').Router()
const Todo=require('../models/Todo')
//routes

router.post("/add/todo",(req,res)=>{
    const {todo}=res.json(req.body);
    console.log(req.body);
    //res.json(req.body)

    const newTodo=new Todo(req.body)


    // save the todo
    newTodo.save()
    .then(()=>{
        console.log("Successfully added todo");
        res.redirect("/")
    })
    .catch((err)=>console.log(err))
})

.get("/delete/todo/:_id", (req, res) => {
    const { _id } = req.params;
    Todo.deleteOne({ _id })
      .then(() => {
        console.log("Deleted Todo Successfully!");
        res.redirect("/");
      })
      .catch((err) => console.log(err));
  });


module.exports=router