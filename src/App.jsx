import "./App.css";

function App() {
  const sendMessageNative = () => {
    //window.ReactNativeWebView.postMessage("Open Camera Native");
    //find a postMessage to talk to hoster
    let postMessage = window.parent.postMessage;
    if (window.ReactNativeWebView) {
      postMessage = window.ReactNativeWebView.postMessage;
      window.ReactNativeWebView.postMessage('Open Native 2');
    }
    postMessage('Open Camera Native');
    console.log('Comando enviado')
  };

  return (
    <>
      <h1>Webview + Native</h1>
      <div className="card">
        <button onClick={() => sendMessageNative()}>Abrir camara</button>
      </div>
    </>
  );
}

export default App;
