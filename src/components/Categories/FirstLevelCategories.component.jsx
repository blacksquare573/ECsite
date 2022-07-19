import SecondLevelCategories from "./SecondLevelCategories.component";

const FirstLevelCategories (first) => {
    const { categoryName, subList } = first;

    return (
        <div>
            <p>
                <a>
                {categoryName}
                {subList.map((second) => (
                    <SecondLevelCategories key={second.categoryId} second={second} />
                ))}
                </a>
            </p>
        </div>
    )
}

export default FirstLevelCategories;