import { Schema, model,Document, models } from "mongoose";

interface sites extends Document {
    username: String;
    password: String;
  }
  
  const quoteSchema = new Schema({
    iFSCCode: {
      type: String,
      required: true,
    },
    bank: {
      type: String,
    },
    branch: {
      type: String,
    },
    mICRNo: {
      type: String,
    },
    branchCode: {
      type: String,
    },
    sWIFTCode: {
      type: String,
    },
    address: {
      type: String,
    },
    pINCode: {
      type: String,
    },
    district: {
      type: String,
    },
    state: {
      type: String,
    },
    contact: {
      type: String,
    },
    emailID: {
      type: String,
    },
    customerCare: {
      type: String,
    },
  });

export default models.sites || model<sites>("sites", quoteSchema);
