import { useState } from "react";
export default function useForm(initialValue) {

    const [formValue, setFormValue] = useState(initialValue)

    function onChangeValue(event) {
        setFormValue(prev => ({ ...prev, [event.target.name]: event.target.value }))
    }

    return { formValue, onChangeValue, setFormValue }
}
