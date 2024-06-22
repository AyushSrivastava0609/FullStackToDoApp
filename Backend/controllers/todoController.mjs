import todoModel from '../models/todoModel.mjs';
const getToDoList = async(req,res)=>{
    const todo = await todoModel.find();
    res.status(200).send({status:'ok',Response:todo})
};
const createToDoList = async(req,res)=>{
    try {
        const data = req.body;
        const todo = await todoModel.create(data);
        res.status(201).send({ status: 'ok', Response: todo });
    } catch (err) {
        res.status(500).send({ status: 'failed', message: err.message });
    }
};
const updateToDoList = async(req,res)=>{
    try{
        const {id} = req.params;
        const data = req.body;
        const todo = await todoModel.findByIdAndUpdate(id , data);
        res.status(200).send({status:'ok',Response:todo});
    }catch(err){
        res.status(500).send({status:'failed' , message:err.message});
    }
};
const deleteToDoList = async(req,res)=>{
    try{
        const {id} = req.params;
        const todo = await todoModel.findByIdAndDelete({_id:id});
        res.status(200).send({status:'ok', Response: todo});
    }catch(err){
        res.status(500).send({status:'failed' , message:err.message});
    }
};
export {getToDoList,createToDoList,updateToDoList,deleteToDoList}
