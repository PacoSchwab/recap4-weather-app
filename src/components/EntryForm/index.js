import { useState } from "react";

export default function EntryForm({ onAddActivity, isGoodWeather }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    const newActivity = {
      name: data.name,
      isGoodWeather: !!data.isForGoodWeather
    };

    console.log(newActivity)
    onAddActivity(newActivity);

    event.target.reset();
    event.target.elements.name.focus();
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
          checked={isGoodWeather}
        ></input>
      </div>
      <button type="submit" className="entry-form__button">
        Submit
      </button>
    </form>
  );
}
