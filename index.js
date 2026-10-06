const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('WhatsApp Bot is running successfully!');
});

app.listen(port, () => {
  console.log(`Bot is listening on port ${port}`);
});
