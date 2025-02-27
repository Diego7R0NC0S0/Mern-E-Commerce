const cloudinary = require("cloudinary").v2;
const multer = require("multer");

cloudinary.config({
  cloud_name: "djlj8eutv",
  api_key: "542621354287552",
  api_secret: "RXOgE3stpydHwCS7CFFMuPC8RMc",
});

const storage = new multer.memoryStorage();

async function imageUploadUtil(file) {
  const result = await cloudinary.uploader.upload(file, {
    resource_type: "auto",
  });

  return result;
}

const upload = multer({ storage });

module.exports = {
  upload,
  imageUploadUtil,
};
