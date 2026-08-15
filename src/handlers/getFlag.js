const featureFlagService = require("../services/featureFlagService");

function getFlag(req, res) {
    const flag = featureFlagService.getFlag(req.params.id);

    if (!flag) {
        return res.status(404).json({
            success: false,
            message: "Feature flag not found"
        });
    }

    return res.json({
        success: true,
        data: flag
    });
}

module.exports = getFlag;