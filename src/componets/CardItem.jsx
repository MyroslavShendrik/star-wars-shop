import defaultImage from "./default.jpg"; //! Дефолтне зображення

//! Стилі для текстових полів
const textField = {
  fontSize: "18px",
  fontWeight: 700,
};


//! Стилі для значень текстових полів
const textFieldValue = {
  fontWeight: 400,
  fontStyle: "italic",
};

//! Стилі для заголовків зображень
const imageTitles = {
  textAlign: "center",
  color: "blue",
};
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
      <h3
      style={{
          marginBottom: 12,
          padding: "12px 16px",
          fontSize: 32,
          textAlign: "center",
          borderRadius: 8,
          backgroundColor: "yellow",
          color: "blue",
        }}
      >{name}</h3>
      <img src={image} alt={name}  />
      <p style={textField}>Категорія: <span style={textFieldValue}>{category}</span> </p>
      <p style={textField}>Тип продукту: <span style={textFieldValue}>{productType}</span> </p>
      <p style={textField}>Вік: <span style={textFieldValue}>{age}</span> </p>
      <p style={textField}>Гендер: <span style={textFieldValue}>{gender}</span> </p>
      <p style={textField}>Де з'являвся: <span style={textFieldValue}>{showMonie}</span> </p>
      <p style={textField}>Герої: <span style={textFieldValue}>{character}</span> </p>
      <p style={textField}>Рік випуску: <span style={textFieldValue}>{year}</span></p>
      <p style={textField}>Ціна: <span style={textFieldValue}>{price}</span></p>
      <p style={textField}>Опис: <span style={textFieldValue}>{description}</span></p>
      <button
       style={{
          width: "70%",
          margin: "20px auto",
          padding: "16px 32px",
          display: "inline-block",
          alignItems: "center",
          fontFmily: "Franklin Gothic Medium, Arial Narrow",
          fontWeight: 700,
          fontSize: "1.5rem",
          borderRadius: "12px",
          color: "#ffffff",
          cursor: "pointer",
          backgroundColor: "#008080",
          textShadow:
            "1px 1px 2px rgba(0, 0, 0, 0.4), 2px 2px 4px rgba(0, 0, 0, 0.2), 4px 4px 8px rgba(0, 0, 0, 0.1)",
          boxShadow:
            "inset 0 0 16px 8px rgba(0, 0, 0, 0.3), 0 8px 16px rgba(0, 0, 0, 0.9)",
        }}
        type="button"
      >Додати до кошику</button>
    </>
  );
};



