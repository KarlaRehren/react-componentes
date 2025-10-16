/**
 * Sidebar component - Displays images with descriptions
 */
function Sidebar() {
  const sidebarItems = [
    {
      id: 1,
      image: "http://lorempixel.com/300/200/sports/",
      alt: "Sports image",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat, et!"
    },
    {
      id: 2,
      image: "http://lorempixel.com/300/200/city/",
      alt: "City image",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat, et!"
    },
    {
      id: 3,
      image: "http://lorempixel.com/300/200/animals/",
      alt: "Animals image",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat, et!"
    }
  ];

  return (
    <aside className="sidebar">
      {sidebarItems.map((item) => (
        <div key={item.id}>
          <img src={item.image} alt={item.alt} />
          <p>{item.description}</p>
        </div>
      ))}
    </aside>
  );
}

export default Sidebar;