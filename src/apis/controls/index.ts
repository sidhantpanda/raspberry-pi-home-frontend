import * as request from 'superagent';
import AuthUser from '../../auth';
import Button from '../../models/Button';

export const GetStatus = async (): Promise<Button[] | null> => {
  try {
    const response = await fetch('/api/controls/status', {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        'x-api-key': AuthUser.getToken()
        // "Content-Type": "application/x-www-form-urlencoded",
      },
      redirect: "follow", // manual, *follow, error
      referrer: "no-referrer", // no-referrer, *client
      // body: JSON.stringify(data), // body data type must match "Content-Type" header
    });
    if (response.status !== 200) {
      throw new Error('Error getting status');
    }
    const body = await response.json();
    const buttons = body.buttons.map((raw: any) => new Button(raw))
    return buttons;
  } catch (err) {
    console.log('err', err);
    return null;
  }
}

export const SetStatus = async (buttonId: string, status: boolean) => {
  const user = await request
    .post('/api/controls/')
    // .send({ tokenId }) // sends a JSON post body
    .set('accept', 'json');
  return user.body;
}