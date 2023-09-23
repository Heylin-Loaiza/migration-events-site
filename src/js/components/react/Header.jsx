const AccountBtn = () => {
  return (
    <button id="my-account">My account &rarr;</button>
  );
};

const headerTabs = (data) => {
  return (
    <div id="tabs" className="header__tabs">
      {data.map((item)=> {
        return <li>{`${item}`}</li>
      })}
    </div>
  );
};

const Header = () => {
  return (
    <header id="header">
      <AccountBtn />
      {headerTabs(["Music", "Sports", "Business", "Food", "Art"])}
    </header>
  );
};

export { Header };