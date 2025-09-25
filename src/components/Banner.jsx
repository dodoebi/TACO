import "./Banner.css";

function Banner() {
  return (
    <>
      {/* 首頁 Hero 區塊 */}
      <section className="banner" style={{ opacity: 1 }}>
        <div className="fruit-rain">
          {Array.from({ length: 15 }).map((_, i) => (
            <img
              key={i}
              src="/fruit.png" // 你可以換成 banana.png、grape.png...
              alt="fruit"
              className="fruit"
              style={{
                left: `${Math.random() * 100}vw`,
                animationDuration: `${3 + Math.random() * 4}s`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            />
          ))}
        </div>
        <h1 data-text="TACO">TACO</h1>
        <h2 data-text="TACO">Taiwan All-stars Catch Open</h2>
      </section>
    </>
  );
}

export default Banner;
