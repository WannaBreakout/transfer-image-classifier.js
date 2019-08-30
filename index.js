let net;

async function app() {
  console.log('Loading mobilenet..');

  // Load the model.
  net = await mobilenet.load();
  console.log('Sucessfully loaded model');

  // Make a prediction through the model on our first image.
  const imgE0 = document.getElementById('img0');
  const result0 = await net.classify(imgE0);
  console.log(result0);

  // Make a prediction through the model on our second image.
    const imgEl = document.getElementById('img1');
    const result1 = await net.classify(imgEl);
    console.log(result1);

  // Make a prediction through the model on our third image.
  const imgE2 = document.getElementById('img2');
  const result2 = await net.classify(imgE2);
  console.log(result2);
}

app();