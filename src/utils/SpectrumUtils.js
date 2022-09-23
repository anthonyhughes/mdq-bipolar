export const calculateSpectrum = (allQuestionAnswers) => {
    const countOfYesAnswers = Object.values(allQuestionAnswers).splice(0, 13).filter((answer) => answer === 0).length;
    const countOfNoAnswers = Object.values(allQuestionAnswers).splice(0, 13).filter((answer) => answer === 1).length;
    const periodAnswer = allQuestionAnswers[14];
    const severityAnswer = allQuestionAnswers[15];
    if (countOfYesAnswers >= 7 && periodAnswer === 0 && severityAnswer >= 2) {
        return {
            spectrumResult: 1, // possible
            countOfYesAnswers,
            countOfNoAnswers
        }
    } else {
        return {
            spectrumResult: 0, // not possible
            countOfYesAnswers,
            countOfNoAnswers
        }
    }
}
