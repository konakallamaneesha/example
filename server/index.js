import express from "express";

const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello from server');
});

app.listen(PORT, () => {
    console.log(`Hii Server is running on http://localhost:${PORT}`);
});

app.post('/create',async(req,res)=>{
    const todo=await new todo({
        text:req.body.text,
    })
    await todo.save();
    res.json(todo);
})
