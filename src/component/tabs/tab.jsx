function Tabs(props) {
  const tabs = [
    { title: "Skills", link: "#skill", id: 1 },
    { title: "Works", link: "#work", id: 2 },
    { title: "Experience", link: "#experience", id: 3 },
    { title: "Contact me", link: "#contactus", id: 4 },
  ];

  return (
    <div className={`flex justify-around items-center ${props.className}`}>
      {tabs.map((tab) => (
        <div
          className="transition-transform duration-200 hover:scale-98 border-r border-l border-secondary shadow-md rounded-lg p-2 dark:shadow-none"
          key={tab.id}
        >
          <a
            href={tab.link}
            className="text-text-main dark:text-text-main no-underline hover:text-secondary transition-colors"
          >
            {tab.title}
          </a>
        </div>
      ))}
    </div>
  );
}

export default Tabs;
