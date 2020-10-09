module.exports.question = {
  question_id: 37,
  question_body: "Why is this product cheaper here than other sites?",
  question_date: "2018-10-18T00:00:00.000Z",
  asker_name: "williamsmith",
  question_helpfulness: 4,
  reported: 0,
  answers: {
    68: {
      id: 68,
      body: "We are selling it here without any markup from the middleman!",
      date: "2018-08-18T00:00:00.000Z",
      answerer_name: "Seller",
      helpfulness: 4,
      photos: []
      // ...
    }
  }
};

module.exports.answer = {
  question: "1",
  page: 0,
  count: 5,
  results: [
    {
      answer_id: 8,
      body: "What a great question!",
      date: "2018-01-04T00:00:00.000Z",
      answerer_name: "metslover",
      helpfulness: 8,
      photos: []
    },
    {
      answer_id: 5,
      body: "Something pretty durable but I can't be sure",
      date: "2018-01-04T00:00:00.000Z",
      answerer_name: "metslover",
      helpfulness: 5,
      photos: [
        {
          id: 1,
          url: "urlplaceholder/answer_5_photo_number_1.jpg"
        },
        {
          id: 2,
          url: "urlplaceholder/answer_5_photo_number_2.jpg"
        }
        // ...
      ]
    }
    // ...
  ]
};
