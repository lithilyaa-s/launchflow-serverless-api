const repository = require("../repositories/mockRepository");
const FeatureFlag = require("../models/FeatureFlag");

function createFeatureFlag(data) {
    const flag = new FeatureFlag(
        data.name,
        data.description,
        data.enabled,
        data.rolloutPercentage,
        data.environment
    );

    flag.id = Date.now().toString();

    return repository.create(flag);
}

function getAllFlags() {
    return repository.getAll();
}

function getFlag(name) {
    return repository.getByName(name);
}

function updateFlag(name, data) {
    return repository.update(name, data);
}

function deleteFlag(name) {
    return repository.remove(name);
}

module.exports = {
    createFeatureFlag,
    getAllFlags,
    getFlag,
    updateFlag,
    deleteFlag
};