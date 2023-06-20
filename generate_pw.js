// GET LENGTH AND INFORMATION ABOUT CHECKBOXES
const lengthRangeEl = document.getElementById("password_length")
const numberEl = document.getElementById("password_range")
const checkMarkUppEl = document.getElementById("option_uppercase")
const checkMarkLowEl = document.getElementById("option_lowercase")
const checkMarkNumEl = document.getElementById("option_numbers")
const checkMarkSymbEl = document.getElementById("option_symbols")

// fetch a paragraph with the result
const displayPw = document.getElementById("result")

// get all symbols that could be in the password
let pwCharOption = ""
const upperOptions = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowOptions = "abcdefghijklmnopqrstuvwxyz"
const numOptions = "0123456789"
const symOptions = "!@#$%^&*()_+~`|}{[]\:;?><,./-="

function getLetterOptions() {
    if ( checkMarkUppEl.checked ) {
        pwCharOption = pwCharOption + upperOptions + upperOptions;
    }
    if ( checkMarkLowEl.checked ) {
        pwCharOption = pwCharOption + lowOptions + lowOptions;
    }
    if ( checkMarkNumEl.checked ) {
        pwCharOption = pwCharOption + numOptions + numOptions;
    }
    if ( checkMarkSymbEl.checked ) {
        pwCharOption = pwCharOption + symOptions;
    }

}

// get length value
function getLength() {
    return lengthRangeEl.value 
}

// NOT A SECURE GENERATOR
// function generatePassword(len) {
//     let password = ""
//     for (let i = 0; i < len; i++) {
//         let randomIndex = Math.floor(Math.random() * pwCharOption.length);
//         password += pwCharOption[randomIndex];
//       }
//     return password;
// }

// generate password
function generatePassword(len) {
    let password = ""
    var randomValues = new Uint32Array(len);
    window.crypto.getRandomValues(randomValues);
    
    for (var i = 0; i < len; i++) {
        var randomIndex = randomValues[i] % pwCharOption.length;
        password += pwCharOption[randomIndex];
    }
      return password;
}

function runPwGeneration() {
    // get letter options
    getLetterOptions()

    // run password select function according to the selected length
    let pwLen = getLength()
    let generatedPw = generatePassword(pwLen)
    
    // display result in textarea block
    displayPw.value = generatedPw

    // clear options
    pwCharOption = ""
}

// connect input number and input range
lengthRangeEl.addEventListener("change", () =>  {
    numberEl.value = lengthRangeEl.value
})

numberEl.addEventListener("change", () =>  {
    lengthRangeEl.value = numberEl.value
})


// add function to the generate button
const generateBtn = document.getElementById("generate-button")
generateBtn.addEventListener("click", runPwGeneration)


// add function to the regenerate button
const regenerateBtn = document.getElementById("regenerate")
regenerateBtn.addEventListener("click", runPwGeneration)

// add function to the copy button
const copyBtn = document.getElementById("copy")

function makeCopy() {
  // Select the text field
  displayPw.select();
   // Copy the text inside the text field
  navigator.clipboard.writeText(displayPw.value);
    
}

copyBtn.addEventListener("click", makeCopy)


