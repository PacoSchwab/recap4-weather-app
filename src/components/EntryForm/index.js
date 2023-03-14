export default function EntryForm() {



    return(
<form className="entry-form" onSubmit={}>
    <h2>Add new Activiity</h2>

        <div className="entry-form__field">
            <label htmlFor="activity">Name</label>
            <input type="text" name="activity" id="activity"></input>
        </div>

</form>

    )
};