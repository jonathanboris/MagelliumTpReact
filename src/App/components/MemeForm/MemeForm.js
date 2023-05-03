import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styles from "./MemeForm.module.css";
import { emptyMeme } from "orsys-tjs-meme";
import Button from "../ui/Button/Button";

const MemeForm = (props) => {
  const [meme, setstate] = useState(emptyMeme);
  useEffect(() => {
    return () => {};
  }, [meme]);
  return (
    <div className={styles.MemeForm} data-testid="MemeForm">
      <form>
        <label htmlFor="titre">
          <h1>Titre</h1>
        </label>
        <br />
        <input name="titre" id="titre" value={meme.titre} onChange={(evt)=>{setstate({...meme,titre:evt.target.value})}}/>
        <hr />
        <label htmlFor="image">
          <h2>Image</h2>
        </label>
        <br />
        <select name="image" id="image" value={meme.imageId} onChange={(evt)=>{setstate({...meme,imageId:Number(evt.target.value)})}}>
          <option value="">futurama1.jpg</option>
        </select>
        <hr />
        <label htmlFor="text">
          <h2>texte</h2>
        </label>
        <br />
        <input name="text" id="text" type="text" value={meme.text} onChange={(evt)=>{setstate({...meme,text:evt.target.value})}} />
        <br />
        <label htmlFor="x">
          <h2 style={{ display: "inline" }}>x :</h2>
        </label>
        <input
          className={styles.smallInput}
          name="x"
          id="x"
          type="number"
          value={meme.x}
          onChange={(evt)=>{setstate({...meme,x:Number(evt.target.value)})}}
        />
        <label htmlFor="y">
          <h2 style={{ display: "inline" }}>y :</h2>
        </label>
        <input
          className={styles.smallInput}
          name="y"
          id="y"
          type="number"
          value={meme.y}
          onChange={(evt)=>{setstate({...meme,y:Number(evt.target.value)})}}
        />
        <hr />
        <br />
        <h2>Decorations</h2>
        <label htmlFor="color">
          <h2 style={{ display: "inline" }}>color :</h2>
        </label>
        <input name="color" id="color" type="color" value={meme.color} onChange={(evt)=>{setstate({...meme,color:evt.target.value})}}/>
        <br />
        <label htmlFor="fontSize">
          <h2 style={{ display: "inline" }}>font-size :</h2>
        </label>
        <input
          className={styles.smallInput}
          name="fontSize"
          id="fontSize"
          type="number"
          min="0"
          value={meme.fontSize}
          onChange={(evt)=>{setstate({...meme,fontSize:evt.target.value})}}
        />
        px
        <br />
        <label htmlFor="fontWeight">
          <h2 style={{ display: "inline" }}>font-weight :</h2>
        </label>
        <input
          className={styles.smallInput}
          name="fontWeight"
          id="fontWeight"
          type="number"
          min="100"
          step="100"
          max="900"
          value={meme.fontWeight}
          onChange={(evt)=>{setstate({...meme,fontWeight:evt.target.value})}}
        />
        <br />
        <input name="underline" id="underline" type="checkbox" checked={meme.underline} onChange={(evt)=>{setstate({...meme,underline:evt.target.checked})}}/>
        &nbsp;
        <label htmlFor="underline">
          <h2 style={{ display: "inline" }}>underline</h2>
        </label>
        &nbsp;
        <h2 style={{ display: "inline" }}>/</h2>&nbsp;
        <label htmlFor="italic">
          <h2 style={{ display: "inline" }}>italic</h2>
        </label>
        &nbsp;
        <input name="italic" id="italic" type="checkbox" checked={meme.italic} onChange={(evt)=>{setstate({...meme,italic:evt.target.checked})}}/>
        <hr />
        <br />
        <label htmlFor="frameSizeX">
          <h2 style={{ display: "inline" }}>frame size X :</h2>
        </label>
        <input
          className={styles.smallInput}
          name="frameSizeX"
          id="frameSizeX"
          type="number"
          min="0"
          value="0"
        />
        px
        <label htmlFor="frameSizeY">
          <h2 style={{ display: "inline" }}>frame size y :</h2>
        </label>
        <input
          className={styles.smallInput}
          name="frameSizeY"
          id="frameSizeY"
          type="number"
          min="0"
          value="0"
        />
        px
        <br />
        <Button type="reset">reset</Button>
        <Button type="submit">save</Button>
      </form>
    </div>
  );
};

MemeForm.propTypes = {
  meme: PropTypes.object.isRequired,
  onMemeChange: PropTypes.func.isRequired,
};

MemeForm.defaultProps = {};

export default MemeForm;