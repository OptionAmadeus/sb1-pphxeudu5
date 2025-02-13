import React from 'react';
import { Link } from 'react-router-dom';
import { LoginForm } from '../components/auth/LoginForm';
import { LoginHeader } from '../components/auth/LoginHeader';
import { LoginFooter } from '../components/auth/LoginFooter';

export function LoginPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <LoginHeader />
      
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <LoginForm />
        </div>
      </div>

      <LoginFooter />
    </div>
  );
}