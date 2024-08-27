import DataSchema from "../models/data.model.js";

export const getData = async (req, res) => {
  // const pagination = +req.query.pagination || 1;
  // const limit = +req.query.limit || 10;
  // const skip = (pagination - 1) * limit;
 
  try {
    // const filters = {};

    // if (req.query.endYear) {
    //   filters.end_year = req.query.endYear;
    // }
    // if (req.query.topic) {
    //   filters.topic = req.query.topic;
    // }
    // if (req.query.sector) {
    //   filters.sector = req.query.sector;
    // }
    // if (req.query.region) {
    //   filters.region = req.query.region;
    // }
    // if (req.query.pestle) {
    //   filters.pestle = req.query.pestle;
    // }
    // if (req.query.source) {
    //   filters.source = req.query.source;
    // }
    // if (req.query.swot) {
    //   filters.swot = req.query.swot;
    // }
    // if (req.query.country) {
    //   filters.country = req.query.country;
    // }
    // if (req.query.city) {
    //   filters.city = req.query.city;
    // }

    // Fetch filtered data from the database
   
      const data = await DataSchema.find({});
      res.status(200).json(data);
  

   
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
