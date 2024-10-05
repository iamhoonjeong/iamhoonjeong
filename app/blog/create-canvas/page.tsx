export default function CreateCanvas() {
  return (
    <div>
      {process.env.NODE_ENV === 'development' && (
        <div className="bg-black p-4">
          <iframe
            height="300"
            style={{ width: '100%' }}
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
