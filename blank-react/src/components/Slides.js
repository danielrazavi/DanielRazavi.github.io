import style from "./Media.module.css";

const Slides = ({ title, url }) => {
  return (
    <div className="video-box">
      <h1 class={style.title}>{title}</h1>
      <div class={style.iframeContainer}>
        <iframe src={url} width="640" height="480" allow="autoplay"></iframe>
      </div>
    </div>
  );
};

export default Slides;