export function handleEscapeSearchbox(element, searchbox, e) {
    // The searchbox should only be blurred if there is no input. If there is
    // input, cr-searchbox will clear the input and keep focus in the
    // searchbox.
    if (e.detail.emptyInput) {
        searchbox.blur();
        e.detail.event.preventDefault();
    }
    else {
        // If searchbox input is not empty, the searchbox will still have focus,
        // but the ghost loader should not show since zero suggest is not queried.
        element.suppressGhostLoader = true;
    }
}
