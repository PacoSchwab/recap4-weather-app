export default function EntryForm() {


    return(
<form className="entry-form" onSubmit="">
    <h2>Add new Activity</h2>

        <div className="entry-form__field">
            <label htmlFor="activity">Name:</label>
            <input type="text" name="activity" id="activity"></input>            
        </div>


        <div className="entry-form__field">
            <label htmlFor="goodWeather">Good-weather activity:</label>
            <input type="checkbox" name="goodWeather" id="goodWeather"></input>            
        </div>

        <div className="entry-form__button-wrapper">
        {/*  <Button type="submit">Submit</Button> */}
        </div>



</form>

    )
};