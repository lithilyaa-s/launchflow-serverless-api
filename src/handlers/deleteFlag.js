const featureFlagService = require("../services/featureFlagService");

function deleteFlag(req, res) {
    const deleted = featureFlagService.deleteFlag(req.params.id);

    if (!deleted) {
        return res.status(404).json({
            success: false,
            message: "Feature flag not found"
        });
    }

    return res.json({
        success: true,
        message: "Feature flag deleted"
    });
}

module.exports = deleteFlag;