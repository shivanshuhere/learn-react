
// WORK ---- we can also validate the prop types
function List (props) {

        const itemsList = props.items
        const category = props.category

        itemsList.sort( (a, b) => a.name.localeCompare(b.name)); // sort Alphabets
    
    const listItems = itemsList.map(item => 
    <li key={item.id}>{item.name} :  <strong>{item.calories}</strong></li>)

    return (
        <>
        <h2>{category.toUpperCase()}</h2>
        <ul>{listItems}</ul>
        </>
    )
}

/*
 List.propTypes= {

}

List.defaultProps = {

}
*/

export default List