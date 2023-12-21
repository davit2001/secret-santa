import Twilio from 'twilio';
import { NextResponse } from 'next/server';

const phoneNumbers = ['+37433333494', '+37443388373', '+37493159415', '+37498598398', '+37493906111', '+37499072807', '+37494331420', '+37491969966', '+37444190150', '+37443989803', '+37493424795', '+37477239701', '+37433333508', '+37498701821', '+37477191070']

export async function POST() {
  try {
    const client = new Twilio('AC30f7eeb8c817f140408063af19153bad', '7ef60d29fdfc4105c294ca93bf90fda6');
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
      message: 'Failed to send messages'
    })
  }
}