import "./Background.scss"; 

const Background = () => {
    return (
        <picture>
          <source
            srcset="/Kirchhayn-Autoparts/images/Home/Hero-BG.png"
            type="image/jpeg"
            media="(min-width: 700px)"
          />
          <img
            className="hero-background"
            src="/Kirchhayn-Autoparts/images/Home/Hero-BG-500px.jpg"
            alt=""
          />
        </picture>
    );
}

export default Background;