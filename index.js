import "./styles.css";
import formatInput from "./formatInput.js";

// selector
const input = document.querySelector("#phone");

// event listener
input.addEventListener("input", onInput);
input.addEventListener("keydown", onKeyDown);

// previous text
let text = "";

/**
 * Keydown event handler
 */
function onKeyDown(event) {
  // handle backspace,digits and arrows key only
  if (
    /\d/.test(event.key) ||
    event.key === "Backspace" ||
    event.key.contains("Arrow")
  ) {
    return true;
  } else {
    event.preventDefault();
  }
}

/**
 * Input event handler
 */
function onInput(event) {
  // get previous caret
  const prevCaret = event.currentTarget.selectionStart;
  const formattedInput = formatInput(event.currentTarget.value);
  event.currentTarget.value = formattedInput;
  if (text.length > formattedInput.length) {
    // set previous caret if removing values
    event.currentTarget.setSelectionRange(prevCaret, prevCaret);
  }
  text = formattedInput;
}
