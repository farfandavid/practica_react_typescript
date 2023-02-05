import useNewSubForm from "../hooks/useNewSubForm";
import { Sub } from "../interfaces/types";



interface FormProps {
    onNewSub: (newSub: Sub) => void
}

const Form = ({ onNewSub }: FormProps) => {
    // const [inputValues, setInputValues] = useState<FormState["inputValues"]>(INITIAL_STATE)
    const [inputValues, dispatch] = useNewSubForm();


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onNewSub(inputValues);
        handleClear();
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        dispatch({
            type: "change_value",
            payload: {
                inputName: name,
                inputValue: value
            }
        })
        /* setInputValues({
            ...inputValues,
            [e.target.name]: e.target.value
        }) */
    }

    const handleClear = () => {
        dispatch({ type: "clear" })
        /* setInputValues({
            nick: '',
            subMonths: 0,
            description: '',
            avatar: ''
        }) */
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={e => { handleChange(e) }} value={inputValues.nick} type='text' name='nick' placeholder='nick' />
                <input onChange={handleChange} value={inputValues.subMonths} type='text' name='subMonths' placeholder='subMonths' />
                <input onChange={handleChange} value={inputValues.avatar} type='text' name='avatar' placeholder='avatar' />
                <input onChange={handleChange} value={inputValues.description} type='text' name='description' placeholder='description' />
                <button onClick={handleClear} type="button">Clear</button>
                <button type="submit">Save new Sub!</button>
            </form>
        </div>
    )
}

export default Form;