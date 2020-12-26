const keys = require('../../config/keys');

module.exports = (survey) => {


  return `
    <html>
      <body>
        <div style="text-align: center;">
          <h3>Customer feedback is important</h3>
          <p>We would really appreciate your feedback.</p>
          <p> Please take a few minutes to answer the following questions.</p>
          <p>Thank you very much.</p>
          <p>${survey.body}</p>
          <div>
            <a href="${keys.redirectDomain}/api/surveys/${survey.id}/yes">Yes</a>
          </div>
          <div>
            <a href="${keys.redirectDomain}/api/surveys/${survey.id}/no">No</a>
          </div>
        </div>
      </body>
    </html>
  `;
};
