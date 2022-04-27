const express = require("express");
const { registerUser, updateUserProfile, authUser, DeleteProfile} = require("../controllers/userControllers");
const  protect  =require("../middlewares/authMiddleware");

const router = express.Router();

//10 server js routes inside it another route at routes files
router.route("/").post(registerUser);
router.route("/login").post(authUser);
router.route("/profile").post(protect, updateUserProfile);

  
  
  router.route("/:id").delete(protect, DeleteProfile);



module.exports = router;