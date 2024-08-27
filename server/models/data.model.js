import mongoose from "mongoose";

// const dataSchema = new mongoose.Schema({
//   end_year: {
//     type: String,
//     default: "",
//   },
//   intensity: {
//     type: Number,
//     required: true,
//   },
//   sector: {
//     type: String,
//     required: true,
//   },
//   topic: {
//     type: String,
//     required: true,
//   },
//   insight: {
//     type: String,
//   },
//   url: {
//     type: String,
//   },
//   region: {
//     type: String,
//     required: true,
//   },
//   start_year: {
//     type: String,
//     default: "",
//   },
//   impact: {
//     type: String,
//   },
//   added: {
//     type: Date,
//     required: true,
//     default: Date.now,
//   },
//   published: {
//     type: Date,
//     required: true,
//   },
//   country: {
//     type: String,
//     required: true,
//   },
//   relevance: {
//     type: Number,
//     required: true,
//   },
//   pestle: {
//     type: String,
//     required: true,
//   },
//   source: {
//     type: String,
//   },
//   title: {
//     type: String,
//     required: true,
//   },
//   likelihood: {
//     type: Number,
//     required: true,
//   },
// });

const blackDataSchema = new mongoose.Schema({
  end_year: String,
  intensity: Number,
  sector: String,
  topic: String,
  insight: String,
  url: String,
  region: String,
  start_year: String,
  impact: String,
  added: String,
  published: String,
  country: String,
  relevance: Number,
  pestle: String,
  source: String,
  title: String,
  likelihood: Number
});

const DataSchema = mongoose.model("blackdata", blackDataSchema);

export default DataSchema;
