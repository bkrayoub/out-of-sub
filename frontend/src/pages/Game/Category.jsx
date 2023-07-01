function Category({ category, nextAction, showCat, setShowCat }) {
    if (showCat) {
        return <div>
            <h1>
                category:
            </h1>
            <p>
                {category}
            </p>
            <button onClick={nextAction}>Next</button>
        </div>
    }
}

export default Category;