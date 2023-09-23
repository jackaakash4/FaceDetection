import './App.css'
import 'tachyons'

import SignIn from './Components/SignIn/SignIn'
import Navigation from './Components/Navigation/Navigation'
import Logo from './Components/Logo/Logo'
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm'
import Rank from './Components/Rank/Rank'
import { useState } from 'react'
import FaceRecognization from './Components/FaceRecognization/FaceRecognization'
import Register from './Components/Register/Register'

function App() {
  const [input, setInput] = useState('')
  const [box, setBox] = useState({})
  const [route, setRoute] = useState('signin')

  const calculateFaceLocation = (datas) =>{
    const face = datas.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputImage');
    const width = Number(image.width);
    const height = Number(image.height);
    // console.log('face', face);
    return{
      leftCol: face.left_col * width,
      topRow: face.top_row * height,
      rightCol: width - (face.right_col * width),
      bottomRow: height - (face.bottom_row * height)
    }
  }

  const displayFaceBox = (box) =>{
    setBox(box);
    console.log(box);
  }

  const onInputChange = (event) =>{
    const link = event.target.value; 
    setInput(link);
    console.log('input', input);

  }
  
const onClick = ()=>{
    const PAT = 'a8935aef60b140e49f001e9bfc4ac739';
// Specify the correct user_id/app_id pairings
  // Since you're making inferences outside your app's scope
    const USER_ID = 'jackaakash4';       
    const APP_ID = 'my-first-application';
// Change these to whatever model and image URL you want to use
    const MODEL_ID = 'face-detection';
    const MODEL_VERSION_ID = '6dc7e46bc9124c5c8824be4822abe105';    
    const IMAGE_URL = input;

///////////////////////////////////////////////////////////////////////////////////
// YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
///////////////////////////////////////////////////////////////////////////////////

    const raw = JSON.stringify({
      "user_app_id": {
        "user_id": USER_ID,
        "app_id": APP_ID
      },
      "inputs": [
        {
            "data": {
                "image": {
                    "url": IMAGE_URL
                }
            }
        }
      ]
    });

    const requestOptions = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Authorization': 'Key ' + PAT
      },
      body: raw
    };

// NOTE: MODEL_VERSION_ID is optional, you can also call prediction with the MODEL_ID only
// https://api.clarifai.com/v2/models/{YOUR_MODEL_ID}/outputs
// this will default to the latest version_id

    fetch("https://api.clarifai.com/v2/models/" + MODEL_ID + "/versions/" + MODEL_VERSION_ID + "/outputs", requestOptions)
      .then(response => response.json())
      .then(result => displayFaceBox(calculateFaceLocation(result)))
      .catch(error => console.log('error in fetching', error));

  }

  const onRouteChange = (route) =>{
    setRoute(route)
  }

  return (
    <>
      {
      route === 'signin'  ? 
      <SignIn onRouteChange={onRouteChange} />
      : (route === 'register')?
      <Register />
      : (route === 'home') ?
      <>
      <Navigation onRouteChange={onRouteChange} />
      <Logo />
      <Rank />
      <ImageLinkForm onInputChange={onInputChange} onClick={onClick} />
      <FaceRecognization input={input} box={box}/>
      </>
      :
      <>
        <h1>404 NOT FOUND</h1>
      </>
      }

      
    </>
  )
}

export default App
