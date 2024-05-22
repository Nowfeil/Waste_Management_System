async function getData(req,res){
    const {username} = req.params;
    const data = await Data.findById(id);
    res.json(data)
}


module.exports = getData