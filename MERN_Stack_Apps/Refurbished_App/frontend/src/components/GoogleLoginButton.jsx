import { GoogleLogin } from '@react-oauth/google';
import { useAuthContext } from '../hooks/useAuthContext';
export const GoogleLoginButton = () => {
  const {dispatch} = useAuthContext();
  const handleSuccess = async (response) => {
    try {
      const res = await fetch('http://localhost:4000/api/users/google-login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ credential: response.credential }),
      });

      const data = await res.json();
      localStorage.setItem('ref_user',JSON.stringify(data));
      dispatch({type:"LOGIN",payload:data});
      // redirect or update UI
    } catch (err) {
      console.error(err);
    }
  };

  const handleError = () => {
    console.log('Google login failed');
  };

  return (
    <GoogleLogin onSuccess={handleSuccess} onError={handleError} />
  );
};