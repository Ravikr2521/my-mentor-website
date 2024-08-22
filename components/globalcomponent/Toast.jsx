import { toast } from 'react-toastify';
export const notify = (value) => toast.success(value);
export const notifyerror = (value) => toast.error(value);