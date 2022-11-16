const multer = require("multer");
const { GridFsStorage } = require("multer-gridfs-storage");

const mongoose = require("mongoose");

module.exports = async function connection() {
  try {
    const connectionParams = {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    };
    await mongoose.connect(process.env.DB, connectionParams);
    console.log("connected to database");
  } catch (error) {
    console.log(error);
    console.log("could not connect to database");
  }
};

const storage = new GridFsStorage({
  url:  "mongodb://localhost/fdi",
  options: { useNewUrlParser: true, useUnifiedTopology: true },
  file: (req, file) => {
    const match = ["image/png", "image/jpeg", "application/pdf"];

    if (match.indexOf(file.mimetype) === -1) {
      const filename = `${Date.now()}-any-name-${file.originalname}`;
      return filename;
    }

    return {
      bucketName: "user_profil",
      filename: `${Date.now()}-any-name-${file.originalname}`,
    };
  },
});

module.exports = multer({ storage });
