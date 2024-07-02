// const CollectionModel=require('../model/collection.model')
// async function scheduleWaste(req,res){
//     //console.log(req.body);
//     const dateInMillisecs = new Date().getTime();
//     const collectionId = Math.round(dateInMillisecs / 1000);
//     const {uid,collectionDate, address, notes}=req.body
//     const newCollection = await CollectionModel.create({uid,collectionId,collectionDate, address, notes})
//     //console.log(newCollection);
//     res.status(200).json({message:"collection added successfully"});
// }
// async function getAllCollections(req,res){
//     const allCollections = await CollectionModel.find({})
//     //console.log(allCollections)
//     res.status(200).send(allCollections)
// }
// async function getCollectionById(req,res){
//     const id=req.params.id
//     //console.log("userid"+id);
//     const collection = await CollectionModel.find({ uid: id });
//     console.log(collection)
//     res.status(200).send(collection)
// }
// async function updateCollection(req,res){
//     const id=req.params.id
//     console.log(id);
//     console.log("Request Body Start");
//     console.log(req.body);
//     console.log("Request Body End");
//     const updatedData = await CollectionModel.findOneAndUpdate(
//         { collectionId: id },
//         { $set: req.body },
//         { new: true }
//     );
//     console.log("New Data Start");
//     console.log(req.body);
//     console.log("New Data End");
//     res.status(200).send(updatedData);
// }
// async function deleteCollection(req,res){
//     id=req.params.id
//     const collection = await CollectionModel.findOneAndDelete({collectionId:id})
//     //console.log(collection)
//     res.status(200).send(collection)
// }
// module.exports ={ scheduleWaste, getAllCollections, getCollectionById, updateCollection, deleteCollection }


const CollectionModel=require('../model/collection.model')
const IssueModel=require('../model/issue.model')
async function scheduleWaste(req,res){
    console.log(req.body);
    const dateInMillisecs = new Date().getTime();
    const collectionId = Math.round(dateInMillisecs / 1000);
    const {uid,collectionDate, address, notes}=req.body
    const newCollection = await CollectionModel.create({uid,collectionId,collectionDate, address, notes})
    console.log(newCollection);
    res.status(200).json({message:"collection added successfully"});
}
async function getAllCollections(req,res){
    const allCollections = await CollectionModel.find({})
    console.log(allCollections)
    res.status(200).send(allCollections)
}
async function getCollectionById(req,res){
    const id=req.params.id
    const collection = await CollectionModel.find({ uid: id });
    res.status(200).send(collection)
}
async function updateCollection(req,res){
    const id=req.params.id
    const { ...data}=req.body
    const collection = await CollectionModel.findOneAndUpdate({ collectionId: id },
        { $set: req.body },
        { new: true });
    console.log(collection, req.body)   
    res.status(200).send(collection);
}
async function deleteCollection(req,res){
    id=req.params.id
    const collection = await CollectionModel.findOneAndDelete({collectionId:id})
    const issuecollection = await IssueModel.deleteMany({collectionId:id})
    res.status(200).send(collection)
}
module.exports ={ scheduleWaste, getAllCollections, getCollectionById, updateCollection, deleteCollection }