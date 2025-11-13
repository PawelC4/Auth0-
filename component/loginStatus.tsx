'use client'; // 1. This line is required!

import { useUser } from '@auth0/nextjs-auth0/client';

export default function Profile() {
  // 2. Use the hook to get user state
  const { user, error, isLoading } = useUser();

  // 3. Handle the loading state
  if (isLoading) {
    return <div>Loading...</div>;
  }

  // Handle errors
  if (error) {
    return <div>{error.message}</div>;
  }

  // 4. Show content based on whether 'user' exists
  if (user) {
    // User is logged IN
    return (
      <div>
        Welcome, <strong>{user.name}</strong>!
        <a href="/auth/logout"> Log Out</a>
      </div>
    );
  } else {
    // User is logged OUT
    return <a href="/auth/login">Log In</a>;
  }
}