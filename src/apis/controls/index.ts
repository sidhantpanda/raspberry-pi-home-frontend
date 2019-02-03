import * as request from 'superagent';
import AuthUser from '../../auth';
import Button from '../../models/Button';

export const GetStatus = async (): Promise<Button[] | null> => {
  try {
    const response = await fetch('/api/controls/status', {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        'token': AuthUser.getToken()
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

export const SetStatus = async (buttonId: string, status: boolean): Promise<Button | null> => {
  try {
    const response = await request
      .post(`/api/controls/status/${buttonId}`)
      .send({
        buttonId,
        status
      })
      .set('token', AuthUser.getToken())
      .set('accept', 'json');
    return new Button(response.body.buttonData);
  } catch (err) {
    console.error('Error setting the status', err);
    return null;
  }
}