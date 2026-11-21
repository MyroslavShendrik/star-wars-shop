import {
  FaImage,
  FaCamera,
  FaImages,
  FaTag,
  FaBoxOpen,
  FaChild,
  FaVenusMars,
  FaFilm,
  FaUserAstronaut,
  FaCalendarAlt,
  FaHourglassHalf,
  FaDollarSign,
  FaAlignLeft,
  FaLightbulb,
  FaListUl,
  FaCartPlus,
} from "react-icons/fa";
import { GiLightSabers } from "react-icons/gi";

import { useTheme } from "@/componets/ThemeProvider/ThemeProvider.jsx";
import css from "./CardItem.module.css";
import defaultImage from "./default.jpg"; //! Дефолтне зображення
// import {setBgColor} from "@/utils"
import {getManufacturingYears} from "@/utils";

//! Текстове поле з іконкою: розмір іконки береться з theme.iconSize
function Field({ icon: Icon, label, children }) {
  const theme = useTheme();

  return (
    <p className={css.textField}>
      <span className={css.fieldIcon}>
        <Icon size={theme.iconSize.sm} aria-hidden="true" />
      </span>
      {label}: <span className={css.textFieldValue}>{children}</span>
    </p>
  );
}

export default function CardItem({
  name,
  imageReal = defaultImage,
  imageAdditional = defaultImage,
  imageToy = defaultImage,
  category,
  productType,
  age,
  gender,
  showMovie,
  character,
  year,
  price,
  discription,
  interestingInfo,
  features,
  wikipedia
}) {
  const theme = useTheme();

  //! Якщо зображення не завантажилося — показуємо default.jpg
  const handleImageError = (event) => {
    event.currentTarget.onerror = null;
    event.currentTarget.src = defaultImage;
  };

  return (
    <>
      <h3
        // style={{
        //   marginBottom: 12,
        //   padding: "12px 16px",
        //   fontSize: 32,
        //   textAlign: "center",
        //   borderRadius: 8,
        //   backgroundColor: "yellow",
        //   color: "blue",
        // }}
        className={css.itemTitle}
      >
        {name}
      </h3>

      <h4 className={css.imageTitles}>
        <FaImage size={theme.iconSize.sm} aria-hidden="true" />
        Основне зображення
      </h4>
      <a href={wikipedia} target="_blank" rel="noreferrer noopener">
        <img
          src={imageReal}
          alt={`${name} — основне зображення`}
          onError={handleImageError}
        />
      </a>

      <h4 className={css.imageTitles}>
        <FaCamera size={theme.iconSize.sm} aria-hidden="true" />
        Фото товару
      </h4>
      <img
        src={imageToy}
        alt={`${name} — фото товару`}
        onError={handleImageError}
      />

      <h4 className={css.imageTitles}>
        <FaImages size={theme.iconSize.sm} aria-hidden="true" />
        Додаткове зображення
      </h4>
      <div className={css.additionalImageBox}>
        {imageAdditional.map((image, index) => (
          <img
            className={css.imageAdditional}
            key={index}
            src={image}
            alt={`${name} — додаткове фото`}
            onError={handleImageError}
          />
        ))}
      </div>

      <Field icon={FaTag} label="Категорія">{category}</Field>
      <Field icon={FaBoxOpen} label="Тип продукту">{productType}</Field>
      <Field icon={FaChild} label="Вік">{age}</Field>
      <Field icon={FaVenusMars} label="Гендер">{gender}</Field>
      <Field icon={FaFilm} label="Де з'являвся">{showMovie}</Field>
      <Field icon={FaUserAstronaut} label="Герої">{character}</Field>
      <Field icon={FaCalendarAlt} label="Рік випуску">{year}</Field>
      <Field icon={FaHourglassHalf} label="Кількість років випуску">
        {getManufacturingYears(year)}
      </Field>
      <Field icon={FaDollarSign} label="Ціна">{price}</Field>
      <Field icon={FaAlignLeft} label="Опис">{discription}</Field>

      {interestingInfo && (
        <Field icon={FaLightbulb} label="Цікаво">{interestingInfo}</Field>
      )}

      {features && (
        <div>
          <p className={css.textField}>
            <span className={css.fieldIcon}>
              <FaListUl size={theme.iconSize.sm} aria-hidden="true" />
            </span>
            Особливості:
          </p>
          <ul className={css.featureList}>
            {features.map((feature, index) => (
              <li key={index} className={css.featureItem}>
                <GiLightSabers size={theme.iconSize.sm} aria-hidden="true" />
                {feature}
              </li>
            ))}
          </ul>
        </div>
      )}

      <button
        // style={{
        //   width: "70%",
        //   margin: "20px auto",
        //   padding: "16px 32px",
        //   backgroundColor: "#008080",
        //   ...
        // }}
        className={css.button}
        type="button"
      >
        <FaCartPlus size={theme.iconSize.md} aria-hidden="true" />
        Додати до кошику
      </button>
    </>
  );
}