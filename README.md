# [BainyAi]([https://github.com/facebook/create-react-app](https://predust.vercel.app))

Deployed Link: https://predust.vercel.app

## Tech Stack
 - ReactJs
 - Javascript
 - Typescript
 - Context Hook (For State Management)
 - Tailwind CSS
 - JSON Data(For Models and Templates)
 - Story Book

## Research
   Researched Multiple AI Tools, explored and developed the Components, like Prompt Editor, Model Selector, Parameters Panel, Chat/Output Area, etc.

## Design 
  Designed a Responsive Layout and its components by using the Tailwind CSS Library,  like Prompt Editor, Model Selector, Parameters Panel, Chat/Output Area Theme Toggle, etc.
## Development 
    - Model Selector: dropdown to pick AI models
    - Prompt Editor: a text area where the user types prompts.
    - Parameters Panel: sliders for temperature, max tokens, etc.
    - Chat/Output Area: shows prompt + response, includes “copy” and “download JSON” options.
    - Theme Toggle: dark/light mode switch (store preference in localStorage).
    - Responsive Layout: works on mobile and desktop.
    - Data & State: fetched model/template options from a JSON file.
    - Accessibility: ARIA labels, focus states.
    - Animations:  button hover.
    - Component Library & Storybook
    -Built reusable components (e.g., Button, Slider, Modal).

### Json Data
     - Json Data For Templates:-
            {
              "templates": [
                { "id": 1, "name": "Summarize Text", "prompt": "Summarize the following text:" },
                { "id": 2, "name": "Translate (French)", "prompt": "Translate this text to French:" },
                { "id": 3, "name": "Explain Simply", "prompt": "Explain the topic in simple terms:" },
                { "id": 4, "name": "Blog Outline", "prompt": "Create a blog outline about:" }
              ]
            }
      - Json Data For Models:-
            {
              "models": [
                { "id": "bai-3.5", "name": "BAI-3.5" },
                { "id": "Bai-4", "name": "BAI-4" },
                { "id": "bai-4.5", "name": "BAI-4.5" }
              ]
            }

# Have a Look at UI 
### Light Theme
<img width="1890" height="889" alt="home-l" src="https://github.com/user-attachments/assets/30e62c9f-b04f-45b6-a03c-10507995946a" />
<img width="1920" height="880" alt="home4-chat" src="https://github.com/user-attachments/assets/dcd6a4d1-462c-4fab-a98d-2a2a74d082ed" />
<img width="1920" height="899" alt="home2-l" src="https://github.com/user-attachments/assets/9be7eb4e-7d9b-40d6-8011-571921a10661" />
<img width="1920" height="880" alt="home3-temp" src="https://github.com/user-attachments/assets/2b5cc1c0-cb11-4ad3-9dd9-e092c6a311b6" />

### Dark Theme
<img width="1920" height="908" alt="b-home1" src="https://github.com/user-attachments/assets/82c97b6d-2de8-4e91-aa16-08ca977be28e" />
<img width="1920" height="900" alt="d-hom2" src="https://github.com/user-attachments/assets/b4c52fc3-8974-4ee2-8d2c-86a902fa07d4" />
<img width="1654" height="902" alt="b-3 home" src="https://github.com/user-attachments/assets/b63cf039-a7f5-47c8-8dc1-abc0e6e28789" />
