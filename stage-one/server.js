const express = require('express');
const moment = require('moment');

const app = express();
const port = process.env.PORT || 3000;

app.get('/api', (req, res) => {
  const { slack_name, track } = req.query;
  
  // Validating slack_name and track parameters
  if (!slack_name || !track) {
    return res.status(400).json({ error: 'slack_name and track parameters are required.' });
  }

  // Get the current UTC time
  const utc_time = moment.utc().format('YYYY-MM-DDTHH:mm:ss[Z]');

  // Get the current day of the week
  const current_day = moment().format('dddd');

  // GitHub repository information
  const github_file_url = 'https://github.com/kelleman/HNGX-internship/blob/main/stage-one/server.js'; 
  const github_repo_url = 'https://github.com/kelleman/HNGX-internship'; 

  // Response JSON object
  const response = {
    slack_name,
    current_day,
    utc_time,
    track,
    github_file_url,
    github_repo_url,
    status_code: 200,
  };

  res.json(response);
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
