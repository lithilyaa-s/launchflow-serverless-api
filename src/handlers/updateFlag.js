const featureFlagService = require("../services/featureFlagService");

function updateFlag(req, res) {
    const updated = featureFlagService.updateFlag(
        req.params.id,
        req.body
    );

    if (!updated) {
        return res.status(404).json({
            success: false,
            message: "Feature flag not found"
        });
    }

    return res.json({
        success: true,
        data: updated
    });
}

module.exports = updateFlag;