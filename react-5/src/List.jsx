import PropTypes from 'prop-types'
import './List.css';
function List (props) {

        const itemsList = props.items
        const category = props.category

        itemsList.sort( (a, b) => a.name.localeCompare(b.name)); // sort Alphabets
    
    const listItems = itemsList.map(item => 
    <li key={item.id}>{item.name} :  <strong>{item.calories}</strong></li>)

    return (
        <>
        <h2 className='category'>{category.toUpperCase()}</h2>
        <ul className='list'>{listItems}</ul>
        </>
    )
}


 List.propTypes= {
    items : PropTypes.arrayOf(PropTypes.shape({
        id : PropTypes.number,
        name : PropTypes.string,
        calories : PropTypes.number
    })),
    category : PropTypes.string
}

List.defaultProps = {
    items : [],
    category : "Category"
}


export default List