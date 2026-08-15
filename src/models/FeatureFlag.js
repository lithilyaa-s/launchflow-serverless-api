class FeatureFlag {
    constructor(name, description, enabled, rolloutPercentage, environment) {
        this.id = null;
        this.name = name;
        this.description = description;
        this.enabled = enabled;
        this.rolloutPercentage = rolloutPercentage;
        this.environment = environment;
        this.createdAt = new Date().toISOString();
    }
}

module.exports = FeatureFlag;