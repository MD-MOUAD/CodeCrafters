import mongoose from "mongoose";
const { Schema } = mongoose;

const UserSchema = new Schema({
    clerkId: { type: String, required: true },
    name: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String },
    picture: { type: String, required: true },
    blogs: [{ type: Schema.Types.ObjectId, ref: "Blog" }],
    joinedAt: { type: Date, default: Date.now },
});

const User = mongoose.model("User", UserSchema);
export default User;