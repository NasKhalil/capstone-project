import commentCounter from './commentCounter.js';

describe('test comment count', () => {
  test('test number of comments from the Involvement API', () => {
    const comment = [{
      comment: 'Good meal',
      creation_date: '2021-12-24',
      username: 'mohamed',
    },
    {
      comment: 'Great meal',
      creation_date: '2021-12-24',
      username: 'khalil',
    },
    ];
    expect(commentCounter(comment)).toBe(2);
  });
});