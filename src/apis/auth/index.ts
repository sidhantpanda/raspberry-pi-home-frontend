import * as request from 'superagent';

export const LoginWithGoogle = async (tokenId: string) => {
  const user = await request
    .post('/api/auth/google/login')
    .send({ tokenId }) // sends a JSON post body
    .set('accept', 'json');
  return user.body;
}