import React from 'react';
import { Toaster as SonnerToaster } from './ui/sonner';

const Toaster = () => {
  return (
    <SonnerToaster
      position="top-right"
      richColors
      closeButton
      duration={4000}
    />
  );
};

export default Toaster;