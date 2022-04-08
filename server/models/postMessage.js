import mongoose from "mongoose";

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
    CreatedAt: {
        type: Date,
        default: new Date()
    }
});

//turn into model

const PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;