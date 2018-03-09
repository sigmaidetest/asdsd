let AWS = require('aws-sdk');
const ses = new AWS.SES();
exports.handler = function (event, context, callback) {

	ses.sendEmail({
		Destination: {
			ToAddresses: ['randika@adroitlogic.com'],
			CcAddresses: ['randikanavagamuwa@gmail.com'],
			BccAddresses: []
		},
		Message: {
			Body: {
				Text: {
					Data: 'new sample'
				}
			},
			Subject: {
				Data: 'sample new new'
			}
		},
		Source: 'randika@adroitlogic.com',
	}, function (err, data) {
		if (err) console.log(err, err.stack); // an error occurred
		else console.log(data);           // successful response
	});




	callback(null, 'Successfully executed');
}