const {
    canGetHotels,
    // canGetDetails,
    canCreateHotel,
    canCreateRoom,
} = require("../permissions/hotel");
class HotelMiddleware {
    authGetHotels(req, res, next) {
        if (!canGetHotels(req.user)) {
            return res.status(403).send("Don't have permission");
        }

        return next();
    }

    authCreateHotel(req, res, next) {
        if (!canCreateHotel(req.user)) {
            return res.status(403).send("Don't have permission");
        }

        return next();
    }

    authCreateRoom(req, res, next) {
        if (!canCreateRoom(req.user)) {
            return res.status(403).send("Don't have permission");
        }

        return next();
    }
}

const hotelMiddleware = new HotelMiddleware();

module.exports = hotelMiddleware;
