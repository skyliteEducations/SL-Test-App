import Swal from 'sweetalert2'

function AlertPeep(code, message){
    return Swal.fire({
        position: "center",
        icon: code,
        title: message,
        showConfirmButton: false,
        timer: 2500
    });
}

export default AlertPeep