import { toast } from 'react-toastify';

function msgSuccess(message) {
  toast.error(message, {
    position: "top-right",
    autoClose: 5000,
    theme: 'colored',
    closeOnClick: true,
    pauseOnHover: false
  });
}

function msgError(message) {
  toast.error(message, {
    position: "top-right",
    autoClose: 5000,
    theme: 'colored',
    closeOnClick: true,
    pauseOnHover: false
  });
}


export default { msgSuccess, msgError };