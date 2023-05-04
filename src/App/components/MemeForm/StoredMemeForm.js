import { useDispatch, useSelector } from "react-redux";
import store from "../../store/store";
import MemeForm from "./MemeForm";
import PropTypes from "prop-types";
import { changeMeme } from "../../store/meme";



export default function StoredMemeForm(props) {
    const images=useSelector(storeState=>{ return storeState.ressources.images})
    const meme=useSelector(storeState=>{ return storeState.meme})
    const storeDispatch = useDispatch()
      return <MemeForm {...props} meme={meme} images={images} onMemeChange={(memeFromChild)=>{
        storeDispatch(changeMeme(memeFromChild))
      }}/>;
    }

StoredMemeForm.propTypes={
    //meme:PropTypes.object.isRequired,
    //onMemeChange:PropTypes.func.isRequired
}    