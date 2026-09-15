import CardItem from './CardItem.jsx'; //! без стилізації


export default function CardList({ items }) {
    console.log("items:",items)
    return (
        <ul>
            {items.map(item =>
                <li key={item.id}>
                    <CardItem
                    name={item.name}
                    image={item.image}
                    category={item.category}
                    productType={item.productType}
                    age={item.age}
                    gender={item.gender}
                    showMovie={item.showMovie}
                    character={item.character}
                    year={item.year}
                    price={item.price}
                    discription={item.discription}
                    />
                </li>
            )}
        </ul>
    );
};



