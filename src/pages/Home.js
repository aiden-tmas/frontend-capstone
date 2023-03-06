export default function Home() {
  return (
    <div className={"main-container"}>
      <div className={"hero-container"}>
        <h3>Welcome To Marcdown</h3>
      </div>

      <div className={"main-content"}>
        <div className={"category-wrapper"}>
          <div className={"image-container"}>
            <div className="mens-clothing"></div>
          </div>
          <div className={"text-container"}>Men's Clothing</div>
        </div>

        <div className={"category-wrapper"}>
          <div className={"text-container"}>Women's Clothing</div>
          <div className={"image-container"}>
            <div className="womens-clothing"></div>
          </div>
        </div>

        <div className={"category-wrapper"}>
          <div className={"image-container"}>
            <div className="jewelry"></div>
          </div>
          <div className={"text-container"}>Jewelery</div>
        </div>

        <div className={"category-wrapper"}>
          <div className={"text-container"}>Electronics</div>
          <div className={"image-container"}>
            <div className="electronics"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
