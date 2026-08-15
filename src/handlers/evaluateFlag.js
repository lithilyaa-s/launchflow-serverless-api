const featureFlagService = require("../services/featureFlagService");

function evaluateFlag(req, res) {
    const flag = featureFlagService.getFlag(req.params.id);

    if (!flag) {
        return res.status(404).json({
            success: false,
            message: "Feature flag not found"
        });
    }

    return res.json({
        success: true,
        enabled: flag.enabled
    });
}

module.exports = evaluateFlag;