const issueModel=require('../model/issue.model')
async function reportIssue(req,res){
    const {userId,date,status,notes}=req.body
    const newIssue=await issueModel.create({
       userId,date,status,notes
    })
    res.send(newIssue)
}
async function getAllIssues(req,res){
    const issueData=await issueModel.find({})
    res.send(issueData)
}
async function getIssueById(req,res){
    const id=req.params.id
    const issueData=await issueModel.find({userId:id})
    res.send(issueData)
}
async function updateIssueById(req,res){
    const id=req.params.id
    const {userId,date,status,notes}=req.body
    const issueData=await issueModel.updateMany({userId:id},{$set:{
            "userId":userId,
            "collectionDate":date,
            "status":status,
            "notes":notes
        }})
        const updatedData=await issueModel.find({userId:userId})
        res.send(updatedData)
}
async function deleteIssueById(req,res){
    const id=req.params.id
    await issueModel.deleteMany({userId:id})
    res.send("Data successfully deleted")
}
module.exports={reportIssue,getAllIssues,getIssueById,updateIssueById,deleteIssueById}