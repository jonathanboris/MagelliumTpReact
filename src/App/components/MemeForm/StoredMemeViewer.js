import { useDispatch, useSelector } from "react-redux";
import store from "../../store/store";
import { MemeSVGViewer } from "orsys-tjs-meme";
import PropTypes from "prop-types";
import { changeMeme } from "../../store/meme";



export default function StoredMemeViewer(props) {
    const images=useSelector(storeState=>{ return storeState.ressources.images})
    const meme=useSelector(storeState=>{ return storeState.meme})
      return <MemeSVGViewer {...props} meme={meme} image={
        images.find(image => image.id === meme.imageId)
      } 
      />;
    }

StoredMemeViewer.propTypes={
    //meme:PropTypes.object.isRequired,
    //onMemeChange:PropTypes.func.isRequired
    basePath:PropTypes.string.isRequired
}    