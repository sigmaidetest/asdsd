let AWS = require('aws-sdk');
const ses = new AWS.SES();
exports.handler = function (event, context, callback) {

	ses.sendEmail({
		Destination: {
			CcAddresses: [],
			BccAddresses: [],
			ToAddresses: ['randika@adroitlogic.com']
		},
		Message: {
			Body: {
				Text: {
					Data: 'sample ses text'
				}
			},
			Subject: {
				Data: 'sample ses text'
			}
		},
		Source: 'randika@adroitlogic.com',
	}, function (err, data) {
		if (err) console.log(err, err.stack); // an error occurred
		else console.log(data);           // successful response
	});


	callback(null, 'Successfully executed');
}