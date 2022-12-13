import Swal from "sweetalert2"

const succesToast = (message) => {
	const Toast = Swal.mixin({
		toast: true,
		position: 'top-end',
		showConfirmButton: false,
		timer: 3000,
		timerProgressBar: true,
		didOpen: (toast) => {
			toast.addEventListener('mouseenter', Swal.stopTimer)
			toast.addEventListener('mouseleave', Swal.resumeTimer)
		}
	})
    
	return Toast.fire({
		icon: 'success',
		title: `${message}`
	})
}

const errorAlert = (errorStatus, errorMessage) => {
	return Swal.fire({
		title: errorStatus,
		text: errorMessage,
		icon: 'error',
		confirmButtonText: 'Retry'
	})
}

export { succesToast, errorAlert };