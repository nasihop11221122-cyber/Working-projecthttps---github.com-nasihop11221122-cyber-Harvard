
// import mongoose from "mongoose";


// const projectSchema = new mongoose.Schema({


//     id: String,

//     name: String,

//     thumbnailimage: String,

//     description: String,

//     category: String,

//     href: String,

//     screenshots: [String],



//     Features: [
//         {
//             title: String,
//             caption: String,
//             image: String,
//         },
//     ],




// });




// export default mongoose.model("Project", projectSchema);














// ─── projectModel.js ─────────────────────────────────────────────────────────

import mongoose from "mongoose";

const imageSchema = new mongoose.Schema(
    {
        url: { type: String, required: true },
        publicId: { type: String, required: true },
    },
    { _id: true }
);

const projectSchema = new mongoose.Schema({
    id: String,
    name: String,
    description: String,
    category: String,
    href: String,
    thumbnail: { type: imageSchema, default: null },  // { url, publicId }
    screenshots: [imageSchema],                          // [{ url, publicId }]
    Features: [
        {
            title: String,
            caption: String,
            image: String,
        },
    ],
});

export default mongoose.model("Project", projectSchema);