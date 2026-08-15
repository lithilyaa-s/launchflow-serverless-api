const featureFlagService = require("../services/featureFlagService");

function createFlag(req, res) {

    console.log("BODY =", req.body);

    try {
        const newFlag = featureFlagService.createFeatureFlag(req.body);

        return res.status(201).json({
            success: true,
            data: newFlag
        });

    } catch (error) {

        return res.status(500).json({
            success: false,
            message: error.message
        });

    }
}

module.exports = createFlag;