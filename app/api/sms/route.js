import Twilio from 'twilio';
import { NextResponse } from 'next/server';

const phoneNumbers = ['+37455440787', '+37433333494']

export async function POST() {
  try {
    const client = new Twilio('AC30f7eeb8c817f140408063af19153bad', 'd3866d9a291f7861d62685063aceedc9');
    await Promise.all(phoneNumbers.map(async (phoneNumber) => {
      await client.messages
        .create({
          from: '+12058833002',
          body: "Ho ho ho! Dear developer, your code is perfect, and the project is as bug-free. Wishing you none reopened tickets. So, let's enjoy the moment and drink a cup of coffee. Happy holidays from the most covert Santa ever! 🎅😄",
          to: phoneNumber,
        })
    }));

    return NextResponse.json({
      message: 'Successfully sent messages'
    })
  } catch(error) {
    return NextResponse.json({
      message: 'Failed to send messages',
      error: JSON.stringify(error)
    })
  }
}