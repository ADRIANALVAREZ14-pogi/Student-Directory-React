const FormContainer = () => {
    return(
        <>
        <section id="formContainer">
        <form id="studentForm">
            <div>
                <label for="name">Student Name:</label>
                <input type="text" name="name" id="name"></input>
            </div>
            <div class="input-fields">
                <label for="program">Program:</label>
                <input type="text" name="program" id="program"></input>
            </div>
            <div> 
                 <button type="submit">ADD STUDENT</button>
            </div>
        </form>
        </section>
        </>
    )
}

export default FormContainer;