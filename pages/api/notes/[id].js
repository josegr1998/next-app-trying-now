import dbConnect from "../../../utils/dbConnect";
const Note = require("../../../models/Note.js");

dbConnect();

export default async (req, res) => {
  const id = req.query.id;

  if (req.method === "GET") {
    try {
      const note = await Note.findById(id);

      if (!note) {
        return res.status(400).json({ message: "not such note found" });
      }

      res.status(200).json({ success: true, data: note });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
};
