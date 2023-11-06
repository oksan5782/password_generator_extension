# Password Generator 

The Password Generator is a browser extension that allows you to generate strong and secure passwords directly in your browser. It provides a convenient way to create passwords of varying lengths and character sets. Extension is made for Google Chrome with JavaScript and HTML. 

## Features

- Generate random passwords of customizable length from 8 to 32 characters.
- Choose from various character sets, including lowercase letters, uppercase letters, numbers, and special characters.
- Copy the generated password to your clipboard with a single click.
- Simple and intuitive user interface.
- Uses [Crypto.getRandomValues](https://developer.mozilla.org/en-US/docs/Web/API/Crypto/getRandomValues) method to generate cryptographically strong random values for a password.

## Libraries/Frameworks Used 

1. [Web Crypto API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Crypto_API).  [Crypto.getRandomValues()](https://developer.mozilla.org/en-US/docs/Web/API/Crypto/getRandomValues) method is used to generate random values for a password.
2. [Bootstrap](https://getbootstrap.com/). The extension's style is build using only Bootstrap. 
   
## Installation

1. Download the extension files from the repository or the provided source.
2. Open your Chrome browser and navigate to the extensions page: chrome://extensions.
3. Enable the "Developer mode" option.
4. Click on "Load unpacked" and select the folder containing the extension files.
5. The Password Generator Extension will be installed and ready to use.

## Usage

1. Once the extension is installed, click on the Password Generator icon in your browser toolbar.
2. Specify the desired password length.
3. Select the character sets you want to include in the password generation.
4. Click the "Generate" button.
5. The generated password will be displayed on the screen.
6. If you do not like the result, click "Regenerate" icon.
7. Click the "Copy" icon to copy the password to your clipboard.
<img width="496" alt="Screenshot 2023-11-06 at 13 52 15" src="https://github.com/oksan5782/password_generator_extension/assets/57775793/05ad938f-8337-4677-adc1-7b3c2c3a69ae">

