```mermaid
sequenceDiagram
participant browser
participant server

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
    Note left of server: Note saved in the server
    server-->>browser: 201 Created
    Note right of browser: Note added to the list without browser reload
    deactivate server
```