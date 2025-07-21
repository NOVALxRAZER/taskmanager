import Swal from 'sweetalert2'

const SweetAlert = (props) => {
    return Swal.fire({
        ...props,
        confirmButtonColor: "#101326"
    })
}

export default SweetAlert