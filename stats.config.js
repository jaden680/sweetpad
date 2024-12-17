const firstResponseTime = pr => {
    const {timeline} = pr;
    const firstResponse = timeline.comments.find(comment => timeline.firstRequestedAt < comment.createdAt);
    const value = Number(firstResponse.createdAt) - Number(timeline.firstRequestedAt);

    return {value, message: `First Response Time: ${value}`};
};

module.exports = defaultStats => {
    return {
        ...defaultStats,
        pr: [...defaultStats.pr, ["firstResponseTime", firstResponseTime]],
        prList: [],
    };
};
