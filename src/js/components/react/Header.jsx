const tabsList = () => {
  const tabs = ["music", "sports", "business", "food", "art"];
  return (
    <ul id="tabs" className="header__tabs">
      {tabs.map((item) => (
        <li className="header__tabs-item" key={item} data-category={item}>
          {item}
        </li>
      ))}
    </ul>
  );
};

const accountTab = () => {
  // add state (Go to Account or Go back to events)
  return (
    <a href="./account.html" id="my-account">
      My account &rarr;
    </a>
  )
};

const Header = () => {
  return (
    <header id="header" className="header">
      {accountTab()}
      {tabsList()}
    </header>
  );
};

export { Header };