import { v2 } from 'cloudinary';
import Razorpay from 'razorpay';
import  { config } from 'dotenv';

import app from './app.js';
import connectToDB from './config/dbConn.js';

config();
// Cloudinary configuration
v2.config({
  cloud_name: 'ds2venngs',
  api_key: '164842126489337',
  api_secret: 'GE3A1b9VZ3Lj0jsyjxPYMjlYxcQ',
});

// Razorpay configuration
export const razorpay = new Razorpay({
  key_id: 'rzp_test_fp6UeZUHAAMied',
  key_secret: 'vSi9Q006AOSj5iJQPDlbCQ8O',
});

const PORT = process.env.PORT || 5000;


app.listen(PORT, async () => {
  // Connect to DB
  await connectToDB();
  console.log(`App is running at http://localhost:${PORT}`);
});
