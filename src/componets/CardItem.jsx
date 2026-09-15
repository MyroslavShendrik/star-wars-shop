import defaultImage from "./default.jpg"; //! Дефолтне зображення


export default function PlaneItem ({
name,
image = defaultImage,
category,
productType,
age,
gender,
showMonie,
character,
year,
price,
description
})
{

  return (
    <>
      <h3>{name}</h3>
      <img src={image} alt={name} width="400" />
      <p>Категорія: {category}</p>
      <p>Тип продукту: {productType}</p>
      <p>Вік: {age}</p>
      <p>Гендер: {gender}</p>
      <p>Де з'являвся: {showMonie}</p>
      <p>Герої: {character}</p>
      <p>Рік випуску: {year}</p>
      <p>Ціна: {price}</p>
      <p>Опис: {description}</p>
      <button type="button">Додати до кошику</button>
    </>
  );
};



