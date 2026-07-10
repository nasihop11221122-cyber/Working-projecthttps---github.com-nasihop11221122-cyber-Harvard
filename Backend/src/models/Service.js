import mongoose from "mongoose";


const BenefitSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    caption: { type: String, required: true, trim: true },
  },
  { _id: false }   // no extra _id for embedded subdocs
);



const SubCategorySchema = new mongoose.Schema(
  {
    id: { type: String, required: true, trim: true },  // e.g. "1-1"
    title: { type: String, required: true, trim: true },
    subtitle: { type: String, trim: true },
    description: { type: String, required: true, trim: true },
    about: { type: String, trim: true },
    images: [{ type: String, trim: true }],                // array of URLs
    benefits: [BenefitSchema],
    whyTake: { type: String, trim: true },
  },
  { _id: true }
);



// ─── Main Schema ──
const ServiceSchema = new mongoose.Schema(
  {
    id: { type: Number, required: true, unique: true },
    title: { type: String, required: true, trim: true },
    thumbnail: { type: String, trim: true },
    subCategories: [SubCategorySchema],
  },
  { timestamps: true }
);

// ─── Model ─

const Service = mongoose.model("Service", ServiceSchema);

export default Service;