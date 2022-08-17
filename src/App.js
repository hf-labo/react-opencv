import './App.css'

const cv = window.cv

function App() {
  const onChangeFile = e => {
    if (e.target.files && e.target.files[0]) {
      const img = new Image()
      img.onload = () => {
        const mat = cv.imread(img)
        cv.imshow('output', mat)
        mat.delete()
      }
      img.src = URL.createObjectURL(e.target.files[0])
    }
  }
  return (
    <div className="App">
      <div>
        <input type="file" onChange={onChangeFile} />
      </div>
      <canvas id="output" />
    </div>
  )
}

export default App
