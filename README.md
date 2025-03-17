# AI_MilesperGallon
Tensorflow AI test follows the codepen example 
https://codelabs.developers.google.com/codelabs/tfjs-training-regression/index.html#0

1. Introduction
In this codelab you will train a model to make predictions from numerical data describing a set of cars.

This exercise will demonstrate steps common to training many different kinds of models, but will use a small dataset and a simple (shallow) model. The primary aim is to help you get familiar with the basic terminology, concepts and syntax around training models with TensorFlow.js and provide a stepping stone for further exploration and learning.

Because we are training a model to predict continuous numbers, this task is sometimes referred to as a regression task. We will train the model by showing it many examples of inputs along with the correct output. This is referred to as supervised learning.

What you will build
You will make a webpage that uses TensorFlow.js to train a model in the browser. Given "Horsepower" for a car, the model will learn to predict "Miles per Gallon" (MPG).

To do this you will:

Load the data and prepare it for training.
Define the architecture of the model.
Train the model and monitor its performance as it trains.
Evaluate the trained model by making some predictions.
What you'll learn
Best practices for data preparation for machine learning, including shuffling and normalization.
TensorFlow.js syntax for creating models using the tf.layers API.
How to monitor in-browser training using the tfjs-vis library.
What you'll need
A recent version of Chrome or another modern browser.
A text editor, either running locally on your machine or on the web via something like Codepen or Glitch.
Knowledge of HTML, CSS, JavaScript, and Chrome DevTools (or your preferred browsers devtools).
A high-level conceptual understanding of Neural Networks. If you need an introduction or refresher, consider watching this video by 3blue1brown or this video on Deep Learning in Javascript by Ashi Krishnan.