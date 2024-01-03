// Toast.js
import React, { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRecoilValue } from 'recoil';
import { toastState } from './state/RecoilState';
const Toast = () => {
  const currentToastState = useRecoilValue(toastState);

  const showToast = () => {
    switch (currentToastState[1]) {
      case 'success':
        toast.success(currentToastState[0], {
          position: currentToastState[2] || 'top-right',
        });
        break;
      case 'error':
        toast.error(currentToastState[0], {
          position: currentToastState[2] || 'top-center',
        });
        break;
      case 'warning':
        toast.warn(currentToastState[0], {
          position: currentToastState[2] || 'top-right',
        });
        break;
      case 'info':
        toast.info(currentToastState[0], {
          position: currentToastState[2] || 'top-right',
        });
        break;
      default:
        toast(currentToastState[0], {
          position: currentToastState[2] || 'bottom-right',
        });
        break;
    }
  };

  return (
    <>
      <ToastContainer autoClose={1000}/>
      {showToast()}
    </>
  );
};

export default Toast;
