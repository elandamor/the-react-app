import { Box } from '@elandamor/tra-components';
import { height, styled, width } from '@elandamor/tra-theme';

export const Wrapper = styled(Box)`
  ${height}
  ${width}

  > div {
    ${height}
    ${width}
  }

  /**
   * General Uppy styles that apply to everything inside the .Uppy container
   */
  .uppy-Root {
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial,
      sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
    line-height: 1;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: left;
    position: relative;
    color: #333;
  }

  .uppy-Root *,
  .uppy-Root *:before,
  .uppy-Root *:after {
    box-sizing: inherit;
  }

  .uppy-Root [hidden] {
    display: none;
  }

  .UppyIcon {
    max-width: 100%;
    max-height: 100%;
    fill: currentColor;
    /* no !important */
    display: inline-block;
    overflow: hidden;
  }

  .UppyIcon--svg-baseline {
    bottom: -0.125em;
    position: relative;
  }

  .uppy-u-reset {
    -webkit-appearance: none;
    line-height: 1;
    padding: 0;
    margin: 0;
    border: 0;
    color: inherit;
    -webkit-backface-visibility: visible;
    backface-visibility: visible;
    background: none;
    border: medium none currentColor;
    border-collapse: separate;
    border-image: none;
    border-radius: 0;
    border-spacing: 0;
    box-shadow: none;
    clear: none;
    cursor: auto;
    display: inline;
    empty-cells: show;
    float: none;
    font-family: inherit;
    font-size: inherit;
    font-style: normal;
    font-variant: normal;
    font-weight: normal;
    font-stretch: normal;
    -webkit-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;
    left: auto;
    letter-spacing: normal;
    list-style: none;
    margin: 0;
    max-height: none;
    max-width: none;
    min-height: 0;
    min-width: 0;
    opacity: 1;
    outline: medium none invert;
    overflow: visible;
    overflow-x: visible;
    overflow-y: visible;
    text-align: left;
    text-decoration: none;
    text-indent: 0;
    text-shadow: none;
    text-transform: none;
    top: auto;
    transform: none;
    transform-origin: 50% 50% 0;
    transform-style: flat;
    transition: none 0s ease 0s;
    unicode-bidi: normal;
    vertical-align: baseline;
    visibility: visible;
    white-space: normal;
    z-index: auto;
  }

  .uppy-c-textInput {
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 14px;
    line-height: 1.5;
    padding: 6px 8px;
    background-color: #fff;
  }

  .uppy-size--md .uppy-c-textInput {
    padding: 8px 10px;
  }

  .uppy-c-textInput:focus {
    border-color: rgba(34, 117, 215, 0.6);
    outline: none;
    box-shadow: 0 0 0 3px rgba(34, 117, 215, 0.15);
  }

  .uppy-c-btn {
    display: inline-block;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    font-family: inherit;
    font-size: 16px;
    line-height: 1;
    font-weight: 500;
    transition: background-color 0.3s;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .uppy-c-btn:not(:disabled):not(.disabled) {
    cursor: pointer;
  }

  .uppy-c-btn::-moz-focus-inner {
    border: 0;
  }

  .uppy-c-btn-primary {
    font-size: 14px;
    padding: 10px 18px;
    border-radius: 4px;
    background-color: #2275d7;
    color: #fff;
  }

  .uppy-size--md .uppy-c-btn-primary {
    padding: 13px 22px;
  }

  .uppy-c-btn-primary:hover {
    background-color: #1b5dab;
  }

  .uppy-c-btn-primary:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(34, 117, 215, 0.4);
  }

  .uppy-c-btn-link {
    font-size: 14px;
    line-height: 1;
    padding: 10px 15px;
    border-radius: 4px;
    background-color: transparent;
    color: #525252;
  }

  .uppy-size--md .uppy-c-btn-link {
    padding: 13px 18px;
  }

  .uppy-c-btn-link:hover {
    color: #333;
  }

  .uppy-c-btn-link:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(34, 117, 215, 0.25);
  }

  .uppy-c-btn--small {
    font-size: 0.9em;
    padding: 7px 16px;
    border-radius: 2px;
  }

  .uppy-size--md .uppy-c-btn--small {
    padding: 8px 10px;
    border-radius: 2px;
  }

  .uppy-DragDrop-container {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-pack: center;
    justify-content: center;
    border-radius: 7px;
    background-color: #fff;
    cursor: pointer;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial,
      sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
    max-width: 100%;
  }
  .uppy-DragDrop-container:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(34, 117, 215, 0.4);
  }
  .uppy-DragDrop-container::-moz-focus-inner {
    border: 0;
  }

  .uppy-DragDrop-inner {
    margin: 0;
    text-align: center;
    padding: 80px 20px;
    line-height: 1.4;
  }

  .uppy-DragDrop-input {
    width: 0.1px;
    height: 0.1px;
    opacity: 0;
    overflow: hidden;
    position: absolute;
    z-index: -1;
  }

  .uppy-DragDrop-arrow {
    width: 60px;
    height: 60px;
    fill: #e0e0e0;
    margin-bottom: 17px;
  }

  .uppy-DragDrop--is-dragdrop-supported {
    border: 2px dashed #adadad;
  }

  .uppy-DragDrop--isDraggingOver {
    border: 2px dashed #2275d7;
    background: #eaeaea;
  }
  .uppy-DragDrop--isDraggingOver .uppy-DragDrop-arrow {
    fill: #939393;
  }

  .uppy-DragDrop-label {
    display: block;
    cursor: pointer;
    font-size: 1.15em;
    margin-bottom: 5px;
  }

  .uppy-DragDrop-note {
    font-size: 1em;
    color: #adadad;
  }

  .uppy-DragDrop-browse {
    color: #2275d7;
  }
  .uppy-DragDrop-container {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-pack: center;
    justify-content: center;
    border-radius: 7px;
    background-color: #fff;
    cursor: pointer;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial,
      sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
    max-width: 100%;
  }
  .uppy-DragDrop-container:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(34, 117, 215, 0.4);
  }
  .uppy-DragDrop-container::-moz-focus-inner {
    border: 0;
  }

  .uppy-DragDrop-inner {
    margin: 0;
    text-align: center;
    padding: 80px 20px;
    line-height: 1.4;
  }

  .uppy-DragDrop-input {
    width: 0.1px;
    height: 0.1px;
    opacity: 0;
    overflow: hidden;
    position: absolute;
    z-index: -1;
  }

  .uppy-DragDrop-arrow {
    width: 60px;
    height: 60px;
    fill: #e0e0e0;
    margin-bottom: 17px;
  }

  .uppy-DragDrop--is-dragdrop-supported {
    border: 2px dashed #adadad;
  }

  .uppy-DragDrop--isDraggingOver {
    border: 2px dashed #2275d7;
    background: #eaeaea;
  }
  .uppy-DragDrop--isDraggingOver .uppy-DragDrop-arrow {
    fill: #939393;
  }

  .uppy-DragDrop-label {
    display: block;
    cursor: pointer;
    font-size: 1.15em;
    margin-bottom: 5px;
  }

  .uppy-DragDrop-note {
    font-size: 1em;
    color: #adadad;
  }

  .uppy-DragDrop-browse {
    color: #2275d7;
  }

  img {
    pointer-events: none;
  }

  .uppy-DragDrop-container {
    opacity: 0;
  }

  .uppy-DragDrop-inner {
    opacity: 0;
    padding: 0 !important;
  }

  .uppy-DragDrop-label {
    display: none;
  }
`;
