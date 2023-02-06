export function Background() {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    let BackgroundColor = "rgb(" + r + "," + g + "," + b + ")";
    console.log(BackgroundColor);
    document.body.style.background = BackgroundColor;
  }
