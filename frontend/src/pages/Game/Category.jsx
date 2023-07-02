import styles from '../../style/gameplay.css'


function Category({ category, nextAction, showCat, setShowCat }) {
    if (showCat) {
        return <div className="gameContainer">
            <h1 className='title'>
                category:
            </h1>
            <p className='fontGloosy category strok-thin'>
                {category}
            </p>
            <button onClick={nextAction} className="nextBtn">next</button>
        </div>
    }
}

export default Category;