import React, { useState, useEffect } from "react";
import * as mobilenet from "@tensorflow-models/mobilenet";
import * as cocoSsd from '@tensorflow-models/coco-ssd';
import * as tf from "@tensorflow/tfjs";


const ImageClassifier = () => {
  const [image, setImage] = useState(null);
  const [predictions, setPredictions] = useState([]);

  useEffect(() => {
    if (image) classifyImage();
  }, [image]);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imgURL = URL.createObjectURL(file);
      setImage(imgURL);
    }
  };

  const classifyImage = async () => {
    const model = await cocoSsd.load();
    const img = document.getElementById("uploadedImage");
    const predictions = await model.detect(img);
    setPredictions(predictions);
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>AI Image Classifier</h2>
      <input type="file" accept="image/*" onChange={handleImageUpload} />
      {image && <img id="uploadedImage" src={image} alt="Uploaded" width="300px" />}
      <h3>Predictions:</h3>
      <ul>
        {predictions.map((p, index) => (
          <li key={index}>{p.className} - {Math.round(p.probability * 100)}%</li>
        ))}
      </ul>
    </div>
  );
};

export default ImageClassifier;
