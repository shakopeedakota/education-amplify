'use client';

import { useEffect } from 'react';

export const FormPrompt = ({ hasUnsavedChanges }: { hasUnsavedChanges: boolean }) => {
  useEffect(() => {
    const onBeforeUnload = (e: any) => {
      if (hasUnsavedChanges) {
        e.preventDefault();
        e.returnValue = '';
      }
    };
    window.addEventListener('beforeunload', onBeforeUnload);
    return () => {
      window.removeEventListener('beforeunload', onBeforeUnload);
    }
  }, [hasUnsavedChanges]);
}