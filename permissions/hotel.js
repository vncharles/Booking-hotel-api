const role = require("../config/role");

const canGetHotels = (user) => {
    return user.user_role === role.ADMIN;
};

const canCreateHotel = (user) => {
    return user.user_role === role.ADMIN;
};

const canCreateRoom = (user) => {
    return user.user_role === role.ADMIN;
};

// canGetDetails,
module.exports = { canGetHotels, canCreateHotel, canCreateRoom };
