import { useState } from "react";

export default function EntryForm({ onAddActivity }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    onAddActivity(data.name, data.isForGoodWeather.checked);

    event.target.reset();
    event.target.elements.activity.focus();
  }

  return (
    <form className="entry-form" onSubmit={handleSubmit}>
      <h2>Add new Activity</h2>

      <div className="entry-form__field">
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" id="name"></input>
      </div>

      <div className="entry-form__field">
        <label htmlFor="isForGoodWeather">Good-weather activity:</label>
        <input
          type="checkbox"
          name="isForGoodWeather"
          id="isForGoodWeather"
        ></input>
      </div>

      <div className="entry-form__button-wrapper">
        {/*  <Button type="submit">Submit</Button> */}
      </div>
    </form>
  );
}
