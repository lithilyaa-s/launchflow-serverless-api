const featureFlags = [];

function create(flag) {
  featureFlags.push(flag);
  return flag;
}

function getAll() {
  return featureFlags;
}

function getByName(name) {
  return featureFlags.find(flag => flag.name === name);
}

function update(name, updatedFlag) {
  const index = featureFlags.findIndex(flag => flag.name === name);

  if (index === -1) return null;

  featureFlags[index] = {
    ...featureFlags[index],
    ...updatedFlag
  };

  return featureFlags[index];
}

function remove(name) {
  const index = featureFlags.findIndex(flag => flag.name === name);

  if (index === -1) return null;

  return featureFlags.splice(index, 1)[0];
}

module.exports = {
  create,
  getAll,
  getByName,
  update,
  remove
};