module.exports = function main(inputs) {
  return Math.round(
    inputs.parkTime * 0.25 + (
      inputs.distance <= 2
      ? 6
      : inputs.distance <= 8
      ? (inputs.distance * 0.8 + 4.4)
      : (inputs.distance * 1.2 + 1.2)
    )
  );
};
