const express = require("express");
const roomRoute = express.Router();
const roomController = require("../controllers/room");
const authMiddleware = require("../middleware/auth");
const hotelMiddleware = require("../middleware/hotel");
const { checkUpdateRoomPermission } = require("../middleware/room");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

roomRoute.get("/", roomController.index);
roomRoute.get("/:id(\\d+$)", roomController.getById);
roomRoute.get("/ordered/:id", roomController.getOrdered);
roomRoute.post(
    "/",
    authMiddleware.checkToken,
    upload.array("room_imgs"),
    hotelMiddleware.authCreateRoom,
    roomController.create
);
roomRoute.delete(
    "/:id(\\d+$)",
    authMiddleware.checkToken,
    authMiddleware.checkOwnerOfHotel,
    roomController.delete
);
roomRoute.patch(
    "/:id(\\d+$)",
    authMiddleware.checkToken,
    upload.array("room_imgs"),
    checkUpdateRoomPermission,
    roomController.update
);

module.exports = roomRoute;
