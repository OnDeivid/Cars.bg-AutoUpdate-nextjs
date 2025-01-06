export default function formValidation(formData) {

    if (!formData?.carsEmail || formData?.carsEmail.trim() === "") {
        return true
    }
    if (!formData.password || formData.password.length < 8) {
        return true
    } else if (!/[A-Za-z]/.test(formData.password)) {
        return true
    } else if (!/[0-9]/.test(formData.password)) {
        return true
    } else if (!/[A-Za-z0-9]/.test(formData.password)) {
        return true
    }
    if (formData.confirmPassword !== formData.password) {
        return true
    }
    if (!formData.phoneNumber || !/^(\+359|0)(87|88|89|98|99)[0-9]{7}$/.test(formData.phoneNumber)) {
        return true;
    }

    return false
}
