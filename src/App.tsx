import { useCallback, useState } from 'react'
import { getDogPicture } from './api/getDogPicture'
import './App.css'
import { Button } from './components/Button'
import styles from './components/styles/image.module.css'

function App() {
  const [imageURL, setImageURL] = useState<string | null>(null)
  const [error, setError] = useState<boolean>(false)

  const callImage = useCallback(() => {
    const getImage = async () => {
      try {
        const data = await getDogPicture()
        if (data) {
          setImageURL(data.url)
        } else {
          setError(true)
        }
      } catch {
        setError(true)
      }
    }

    getImage()
  }, [])

  return (
    <>
      {
        imageURL ? <img src={imageURL} className={styles.image} onClick={callImage}/> 
        : <Button handleClick={callImage} />
      }
    </>
  )
}

export default App
