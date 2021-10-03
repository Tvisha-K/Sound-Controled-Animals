function start() {

    navigator.mediaDevices.getUserMedia({
        audio: true
    });

    model = ml5.soundClassifier("/models/swQjolR17/model.json", modelLoaded)

}

function modelLoaded() {

    model.classify(getResult);

}

function getResult(error, result) {

    if (error) {

        console.error(error);

    } else {

        red = Math.floor(Math.random() * 250);

        green = Math.floor(Math.random() * 250);

        blue = Math.floor(Math.random() * 250);

        //console.log(result);

        sound_name = result[0].label;

        sound_accuracy = (result[0].confidence * 100).toFixed(2);

        document.getElementById("sound_result").innerHTML = "I Can Hear " + sound_name;

        document.getElementById("sound_accuracy").innerHTML = "Accuracy " + sound_accuracy + " %";

        document.getElementById("sound_result").style.color = "rgb(" + red + "," + green + "," + blue + ")";

        document.getElementById("sound_accuracy").style.color = "rgb(" + red + "," + green + "," + blue + ")";

        

        if (sound_name == "Barking") {

            document.getElementById("image").src = "dog.png";

            document.getElementById("sound_result").innerHTML = "I can hear Barking";
            

        } else if (sound_name == "Meowing") {

            document.getElementById("image").src = "cat.png";

            document.getElementById("sound_result").innerHTML = "I can hear Meowing";

    
        } else {

            document.getElementById("image").src = "ear.png";

            document.getElementById("sound_result").innerHTML = "I can hear Background Noise";
            
        }


    }

}