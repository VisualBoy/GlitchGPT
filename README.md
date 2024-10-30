# GlitchGPT

**GlitchGPT** is an advanced AI-powered chat application that leverages the OpenAI API to provide a seamless and unrestricted conversational experience. It goes beyond basic text chat by incorporating voice input/output, OCR integration, and code execution capabilities.

![Intefaccia principale di GlitchGPT in versione mobile](https://github.com/user-attachments/assets/a0cb2006-3f00-42f7-af20-8adccfa4a872)

## I. Core Functionality & Features: (in progress)

### Unlimited Free Messages:

* Utilize the OpenAI API to allow users to send and receive messages with ChatGPT.
* **No restrictions** on the number of messages or conversations.

### Voice Input/Output:

* Integrate a speech-to-text library (e.g., Android's SpeechRecognizer or Vosk) for voice input.
* Use a text-to-speech engine (e.g., Android's TextToSpeech) for voice output.
* Support multiple languages, accents, and dialects (consider using language detection).


> [!WARNING]
> TO-DO:


### OCR Integration:

* Allow image uploads from the device gallery or direct camera capture.
* Implement an OCR library (e.g., Google ML Kit's Text Recognition API, Tesseract) to extract text from images.
* Send the extracted text to ChatGPT for processing.

### Predefined Prompts:

* Include a library of predefined prompts, categorized for easy access (e.g., "Creative Writing," "Code Generation," "General Questions").
* Feature the "ChatGPT Jailbreak" prompt and other popular options.

### RunGPT Integration:

* Enable code execution within the app using RunGPT or a similar service.
* Allow users to select from various programming languages.
* Display code output and provide options to edit and re-run code.

## II. Potential Future Enhancements:

* **Conversation History:** Store and allow users to access past conversations.
* **Customization:**  Enable users to personalize the app's appearance and behavior (e.g., themes, font sizes).
* **Cloud Sync:**  Offer cloud storage integration to sync conversations and settings across devices.
* **Plugin System:** Allow developers to create and integrate plugins to extend GlitchGPT's functionality.

## III. Installation:

> [!NOTE]
> Remenber to edit [.env](.env) file and put you OpenAI API KEY  into placeholder:

```
VITE_OPENAI_API_KEY="INSERT_YOUR:OPENAI_API_KEY_HERE"
```

## IV. License:

This project is licensed under the [MIT License](LICENSE). 
