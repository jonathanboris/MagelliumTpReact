import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styles from "./MemeForm.module.css";
import { emptyMeme } from "orsys-tjs-meme";
import Button from "../ui/Button/Button";

const MemeForm = (props) => {
 
  return (
    <div className={styles.MemeForm} data-testid="MemeForm">
      <form  onSubmit={(evt)=>{
          evt.preventDefault();
          //props.onMemeChange(props.meme)
        }}
        
        onReset={(evt)=>{
          //evt.preventDefault();
          props.onMemeChange(emptyMeme)
        }}>
        <label htmlFor="titre">
          <h1>Titre</h1>
        </label>
        <br />
        <input name="titre" id="titre" value={props.meme.titre} onChange={(evt)=>{props.onMemeChange({...props.meme,titre:evt.target.value})}}/>
        <hr />
        <label htmlFor="image">
          <h2>Image</h2>
        </label>
        <br />
        <select name="image" id="image" value={props.meme.imageId} onChange={(evt)=>{props.onMemeChange({...props.meme,imageId:Number(evt.target.value)})}}>
          {props.images.map((img,position)=>{
               return <option value={img.id} key={`option-img-${position}`}>{img.titre}</option>
          })}
          
        </select>
        <hr />
        <label htmlFor="text">
          <h2>texte</h2>
        </label>
        <br />
        <input name="text" id="text" type="text" value={props.meme.text} onChange={(evt)=>{props.onMemeChange({...props.meme,text:evt.target.value})}} />
        <br />
        <label htmlFor="x">
          <h2 style={{ display: "inline" }}>x :</h2>
        </label>
        <input
          className={styles.smallInput}
          name="x"
          id="x"
          type="number"
          value={props.meme.x}
          onChange={(evt)=>{props.onMemeChange({...props.meme,x:Number(evt.target.value)})}}
        />
        <label htmlFor="y">
          <h2 style={{ display: "inline" }}>y :</h2>
        </label>
        <input
          className={styles.smallInput}
          name="y"
          id="y"
          type="number"
          value={props.meme.y}
          onChange={(evt)=>{props.onMemeChange({...props.meme,y:Number(evt.target.value)})}}
        />
        <hr />
        <br />
        <h2>Decorations</h2>
        <label htmlFor="color">
          <h2 style={{ display: "inline" }}>color :</h2>
        </label>
        <input name="color" id="color" type="color" value={props.meme.color} onChange={(evt)=>{props.onMemeChange({...props.meme,color:evt.target.value})}}/>
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
          value={props.meme.fontSize}
          onChange={(evt)=>{props.onMemeChange({...props.meme,fontSize:evt.target.value})}}
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
          value={props.meme.fontWeight}
          onChange={(evt)=>{props.onMemeChange({...props.meme,fontWeight:evt.target.value})}}
        />
        <br />
        <input name="underline" id="underline" type="checkbox" checked={props.meme.underline} onChange={(evt)=>{props.onMemeChange({...props.meme,underline:evt.target.checked})}}/>
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
        <input name="italic" id="italic" type="checkbox" checked={props.meme.italic} onChange={(evt)=>{props.onMemeChange({...props.meme,italic:evt.target.checked})}}/>
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
  images: PropTypes.array.isRequired
};

MemeForm.defaultProps = {};

export default MemeForm;