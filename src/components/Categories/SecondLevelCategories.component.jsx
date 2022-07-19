const SecondLevelCategories = (second) => {
  const { categoryName } = second;

  return (
    <div>
      <li>
        <a>{categoryName}</a>
      </li>
    </div>
  );
};

export default SecondLevelCategories;
