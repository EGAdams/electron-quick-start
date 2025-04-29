// require( "./defines.js" );
/** @class RemoteEventHandlers */
class RemoteEventHandlers {
    constructor() {
        // Assumes RemoteCodeTranslator is globally available
        const translator = new RemoteCodeTranslator();

        // Button mapping: [selector, mousedown code, mouseup code]
        const buttonMap = [
            // Red remote
            [".red_remote_red_score", RED_REMOTE_RED_SCORE, UNKNOWN_REMOTE_BUTTON],
            [".red_remote_green_score", RED_REMOTE_GREEN_SCORE, UNKNOWN_REMOTE_BUTTON],
            [".red_remote_undo", RED_REMOTE_UNDO, UNKNOWN_REMOTE_BUTTON],
            [".red_remote_reset", RED_REMOTE_RESET, UNKNOWN_REMOTE_BUTTON],
            // Green remote
            [".green_remote_green_score", GREEN_REMOTE_GREEN_SCORE, UNKNOWN_REMOTE_BUTTON],
            [".green_remote_red_score", GREEN_REMOTE_RED_SCORE, UNKNOWN_REMOTE_BUTTON],
            [".green_remote_undo", GREEN_REMOTE_UNDO, UNKNOWN_REMOTE_BUTTON],
            [".green_remote_reset", GREEN_REMOTE_RESET, UNKNOWN_REMOTE_BUTTON]
        ];

        // Attach event listeners to each button
        buttonMap.forEach(([selector, downCode, upCode]) => {
            const el = document.querySelector(selector);
            if (el) {
                el.addEventListener("mousedown", () => translator.translatePinWrite(downCode));
                el.addEventListener("mouseup", () => translator.translatePinWrite(upCode));
                el.addEventListener("mouseleave", () => translator.translatePinWrite(upCode));
                // Optional: add touch support for mobile
                el.addEventListener("touchstart", (e) => { e.preventDefault(); translator.translatePinWrite(downCode); });
                el.addEventListener("touchend", (e) => { e.preventDefault(); translator.translatePinWrite(upCode); });
            }
        });
    }
}

// Initialize handlers on DOMContentLoaded
document.addEventListener("DOMContentLoaded", () => {
    new RemoteEventHandlers();
});
