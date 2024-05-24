const issueModel=require('../model/issue.model')
async function reportIssue(req,res){
    const {uid,issueType,issueDescription}=req.body
    const newIssue=await issueModel.create({
       uid,issueType,issueDescription,status:"not approved"
    })
    res.send(newIssue)
}
async function getAllIssues(req,res){
    const issueData=await issueModel.find({})
    res.send(issueData)
}
async function getIssueById(req,res){
    const id=req.params.id
    const issueData=await issueModel.find({uid:id})
    res.send(issueData)
}
async function updateIssueById(req,res){
    const id=req.params.id
    const {uid,issueType,issueDescription}=req.body
    const issueData=await issueModel.updateMany({uid:id},{$set:{
            "uid":uid,
            "issueType":issueType,
            "issueDescription":issueDescription,
            "status":"not approved"
        }})
        const updatedData=await issueModel.find({uid:uid})
        res.send(updatedData)
}
async function deleteIssueById(req,res){
    const id=req.params.id
    await issueModel.deleteMany({uid:id})
    res.send("Data successfully deleted")
}
module.exports={reportIssue,getAllIssues,getIssueById,updateIssueById,deleteIssueById}