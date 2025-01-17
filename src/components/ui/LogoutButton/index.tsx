import { useClerk } from "@clerk/clerk-react";
const LogoutButton: React.FC<any> = () => {
    const { signOut } = useClerk();
    const handleLogout = () => {
        signOut();
      };
    
    return <button onClick={handleLogout}>Logout</button>;
};