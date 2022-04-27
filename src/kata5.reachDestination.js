const reachDestination = (distance, speed) => {
    const hours = (distance / speed);
    return "I should be there in " + (Math.round(hours * 2)/2) + " hours"
};

module.exports = reachDestination;
