import { redirect } from '@remix-run/server-runtime';

export const loader = () => {
  return redirect('/page/1');
};

export default function WelcomePage() {
  return <div />;
}
