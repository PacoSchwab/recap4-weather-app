export default function EntriesSection({ activities }) {
  return (
    <>
      <ul className="entry-section">
        {activities.map((activity) => (
          <li key={activity.id} className="entry-ection__item">
            <h3>{activity.name}</h3>
            {/* <button className="entry-section__delete-button">X</button> */}
          </li>
        ))}
      </ul>
    </>
  );
}
