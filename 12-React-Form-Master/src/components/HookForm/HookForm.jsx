import useInputState from "../../hooks/useInputState";

const HookForm = () => {
    const [name, handleNameChange] = useInputState('Mr. Shakil');
    const handleFormSubmit = e =>{
        console.log('form data: ',name)
        e.preventDefault();

    }
    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <input value={name} onChange={handleNameChange} type="text" name="name" />
                <br />
                <input type="email" name="email" id="" />
                <br />
                <input type="password" name="password" id="" />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default HookForm;