export const spectrum = [
    {
        title: 'Bipolar unlikely',
        subtitle: 'It is unlikely that you have bipolar',
        thresholdScore: [0, 15],
        answer : 'Based on your answers, it\'s unlikely that you have bipolar disorder. ' +
            'However, it\'s important to remember that bipolar disorder is a complex mental health condition, ' +
            'and the symptoms can vary hugely across different types of bipolar. ' +
            'Even if you\'re not suffering from strong feelings of mania or depression, ' +
            'it\'s still possible that you could benefit from some level of support.'
    },
    {
        title: 'Possible bipolar / depression',
        subtitle: 'You may have bipolar or depression',
        answer: 'The answers you have given suggest you may be showing some of the signs of bipolar disorder. ' +
            'However, it\'s important to remember that bipolar disorder is a complex mental health condition, ' +
            'and the symptoms can vary hugely across different types of bipolar. ' +
            'Even if you\'re not suffering from strong feelings of mania or depression, ' +
            'it\'s still possible that you could have bipolar. ' +
            'The symptoms can also be very similar to other mental health conditions, ' +
            'so an accurate diagnosis is a crucial first step.',
        thresholdScore: [16, 24],
    },
    {
        title: 'Likely bipolar / depression',
        subtitle: 'Bipolar unlikely',
        thresholdScore: [25, 44],
        answer: 'The answers you have given suggest you are showing many of the signs of bipolar. ' +
            'However, it\'s important to remember that bipolar disorder is a complex mental health condition, ' +
            'and the symptoms can vary hugely across different types of bipolar. ' +
            'Even if you\'re not suffering from strong feelings of mania or depression, ' +
            'it\'s still possible that you could have bipolar. ' +
            'The symptoms can also be very similar to other mental health conditions, ' +
            'so an accurate diagnosis is a crucial first step.'
    }
]
