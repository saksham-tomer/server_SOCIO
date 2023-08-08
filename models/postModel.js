import mongoose from 'mongoose'



const postSchema = mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
})

const PoseMessage = mongoose.model('PostMessage',postSchema)//this func. accepts two parameters 1- name of the model 2- the schema 
export default PoseMessage;
