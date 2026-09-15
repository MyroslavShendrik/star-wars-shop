function Section({ title, children }) {
  return (
    <section>
      {title && <h2
      style={{
            marginBottom: "24px",
            fontSize: 48,
            textAlign: "center",
            color: "darkblue",
          }}
      >{title}</h2>} 
      {children}
    </section>
  );
}


export default Section;