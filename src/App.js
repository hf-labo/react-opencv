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
  
  const onClickGray = () => {
    const mat = cv.imread('output')
    cv.cvtColor(mat, mat, cv.COLOR_RGBA2GRAY, 0)
    cv.imshow('output', mat)
    mat.delete()
  }

  const onClickTh = () => {
    const mat = cv.imread('output')
    if (mat.channels() !== 1) cv.cvtColor(mat, mat, cv.COLOR_RGBA2GRAY, 0)
    cv.threshold(mat, mat, 0, 255, cv.THRESH_OTSU)
    cv.imshow('output', mat)
    mat.delete()
  }

  return (
    <div className="App">
      <div>
        <input type="file" onChange={onChangeFile} />
        <button onClick={onClickGray}>グレイスケール化</button>
        <button onClick={onClickTh}>二値化</button>
      </div>
      <canvas id="output" />
    </div>
  )
}

export default App
