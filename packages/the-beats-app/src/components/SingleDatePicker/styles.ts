import { Box } from '@elandamor/tra-components';
import { color, css, layout, styled, theme } from '@elandamor/tra-theme';

export const Wrapper = styled(Box)<{ activated: boolean }>`
  .label {
    opacity: 0.6;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
    transition: transform 0.195s ease-in-out;
    transform-origin: left top;

    ${({ activated }) =>
      activated &&
      css`
        transform: translateY(-80%)
          scale(${theme.fontSizes[1] / theme.fontSizes[3]});
      `}

    span {
      letter-spacing: 0.009375em;
    }
  }

  .SingleDatePicker {
    border-radius: ${theme.space[1] / 2}px;
    position: relative;
    width: 100%;

    &:focus-within {
      ~ .label {
        opacity: 0.87;
      }
    }

    &_picker {
      background: ${({ theme }) => theme.colors.background.surface};
    }

    &Input {
      align-items: center;
      background-color: transparent;
      border: none;
      display: flex;

      &_calendarIcon {
        align-items: center;
        display: flex;
        margin-right: 4px;
        pointer-events: none;
        position: absolute;
        right: 0;
      }
    }
  }


  .DateInput {
    background-color: transparent;
    width: 100%;

    &_input {
      ${color};
      ${layout}
      background: ${({ theme }) =>
        theme.isDark
          ? theme.colors.opacity.whites[2]
          : theme.colors.opacity.blacks[2]};
      border: none;
      border-bottom: ${theme.borders[1]} ${theme.colors.border.default};
      border-radius: ${theme.space[1] / 2}px;
      font-size: ${theme.fontSizes[3]}px;
      font-weight: ${theme.fontWeights[3]};
      letter-spacing: .009375em;
      padding: ${theme.space[2]}px ${theme.space[2]}px 0;
      position: relative;
      width: 100%;

      &:focus {
        border-bottom-color: ${({ theme }) => theme.colors.primary.base};
      }
    }

    &_fang {
      display: none;
    }
  }

  .CalendarMonth,
  .CalendarMonthGrid,
  .CalendarDay,
  .DayPicker,
  .DayPickerNavigation_button {
    background-color: transparent;
  }

  .CalendarMonth_caption,
  .CalendarDay {
    color: ${({ theme }) => theme.colors.text.default};
  }

  .CalendarMonth_caption {
    text-align: left;
  }

  .DayPickerNavigation_button {
    border: none;
  }

  .CalendarDay {
    border-color: ${({ theme }) => theme.colors.background.base};
  }

  .CalendarDay__blocked_out_of_range {
    opacity: 0.3;
  }

  .CalendarDay__selected, .CalendarDay__selected:active, .CalendarDay__selected:hover {
    background-color: ${({ theme }) => theme.colors.primary.base};
    border: none;
    color: ${({ theme }) => theme.colors.text.onPrimary};
  }

  .DayPicker_weekHeader {
    color: ${({ theme }) => theme.colors.text.default};
    opacity: 0.6;
    top: 56px;
  }

  .DayPickerNavigation {
    align-items: center;
    display: flex;
    opacity: 0.87;
    position: absolute;
    right: 8px;
    top: 32px;
  }
`;

Wrapper.defaultProps = {
  color: 'text.default',
  height: '56px',
};