import Swal from 'sweetalert2'


type ICONTYPES = 'warning' | 'success' | 'error' | 'info' | 'question'
const themeColor = '#293567'
const errorColor = '#dc3545'
const successColor = '#1ceb64ff'

export default {
    alertToast: (text: string, icon: ICONTYPES) => {
        Swal.fire({
            toast: true,
            icon: `${icon}`,
            title: `${text}`,
            // text: `${text}`,
            position: 'top-right',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: false,
            padding: 10,
            // iconColor: '#2c3e50',
        })
    },


    swalConfirm: (title: string, text: string = '', btnText: string, icon: ICONTYPES) => {
        return Swal.fire({
            title: `${title}`,
            text: `${text}`,
            icon: `${icon}`,
            iconColor: `${icon == 'error' ? errorColor : themeColor}`,
            showCancelButton: true,
            confirmButtonText: `${btnText}`,
            cancelButtonText: 'cancel',
            confirmButtonColor: `${icon == 'error' ? errorColor : themeColor}`,
            // cancelButtonColor: 'transparent',
            reverseButtons: true,

            // width: '370px',
        })
    },


    swalSuccess: (title: string, text: string = '', btnText: string, icon: ICONTYPES) => {
        return Swal.fire({
            title: `${title}`,
            text: `${text}`,
            icon: `${icon}`,
            iconColor: `${icon == 'error' ? errorColor : successColor}`,
            confirmButtonText: `${btnText}`,
            confirmButtonColor: `${icon == 'error' ? errorColor : themeColor}`,
        })
    },

}