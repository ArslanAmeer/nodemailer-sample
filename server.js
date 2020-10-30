const express = require('express');
const nodemailer = require('nodemailer');

const app = express();
const PORT = 3000;

const smtpTransport = nodemailer.createTransport({
	service: 'Gmail',
	auth: {
		user: '<YOUR_EMAIL>',
		pass: '<YOUR_PASSWORD>',
	},
	tls: {
		rejectUnauthorized: false,
	},
});

const mailOptions = {
	from: '<YOUR_EMAIL>',
	to: 'email@arslanameer.com',
	subject: 'Welcome to ',
	text: 'Sample text',
};

app.use(express.static('public'));

app.get('/api/sendmail/', (req, res) => {
	res.send('Hello World!');
	console.log('Hello World');
	smtpTransport.sendMail(mailOptions, function (error, response) {
		if (error) {
			console.log(error);
		} else {
			console.log('mail sent');
		}
	});
});

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));
