export default function CreateCanvas() {
  return (
    <div className="h-full bg-category1">
      {process.env.NODE_ENV === 'development' && (
        <div className="bg-black p-4">
          <iframe
            style={{ width: '100%', height: '600px' }}
            title="Importing Test"
            src="https://codepen.io/iamhoonjeong/embed/YzmWPWr?default-tab=css%2Cresult&editable=true&theme-id=dark"
            loading="lazy"
            allowTransparency={true}
            allowFullScreen={true}
          >
            See the Pen <a href="https://codepen.io/iamhoonjeong/pen/YzmWPWr">Importing Test</a> by Hoon Jeong (
            <a href="https://codepen.io/iamhoonjeong">@iamhoonjeong</a>) on <a href="https://codepen.io">CodePen</a>.
          </iframe>
          <iframe
            style={{ width: '100%', height: '600px' }}
            title="Importing Test"
            src="https://codepen.io/iamhoonjeong/embed/YzmWPWr?default-tab=css%2Cresult&editable=true&theme-id=dark"
            loading="lazy"
            allowTransparency={true}
            allowFullScreen={true}
          >
            See the Pen <a href="https://codepen.io/iamhoonjeong/pen/YzmWPWr">Importing Test</a> by Hoon Jeong (
            <a href="https://codepen.io/iamhoonjeong">@iamhoonjeong</a>) on <a href="https://codepen.io">CodePen</a>.
          </iframe>
        </div>
      )}
    </div>
  );
}
