import { useEffect } from "react";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  useAuth,
  useSessionList,
  useUser,
} from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";
import ProgressBar from "@/components/ProgressBar";

export default function Login() {
  const { isLoaded, isSignedIn }: any = useAuth();
  const { sessions } = useSessionList();
  const { user } = useUser();
  const navigate = useNavigate(); // Sempre chame aqui

  // useEffect sempre chamado de forma consistente
  useEffect(() => {
    if (isSignedIn) {
      navigate("/home"); // Redireciona se o usuário estiver logado
    }
  }, [isSignedIn, navigate]);

  if (!isLoaded) {
    return <ProgressBar />;
  }

  if (!isSignedIn) {
    return <div>Sign in to view this page</div>;
  }

  return (
    <header>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <ul>
          {isSignedIn ? <>{user?.fullName}</> : null},{" "}
          <p>Welcome back. You've been here {sessions.length} times before.</p>
        </ul>
        <SignedOut />
      </SignedIn>
    </header>
  );
}
