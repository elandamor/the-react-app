import React, { FC, useState, useEffect, useMemo } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'react-feather';
import { useTransition } from 'react-spring';
import { StyledSystemProps } from 'styled-system';
import Measure from 'react-measure';
// Styles
import { Scrim, Portal, PortalInner, PortalInnerHeader } from './styles';

import Button from '../Button';
import ErrorBoundary from '../ErrorBoundary';
import ScrollView from '../ScrollView';

import { useWindowSize } from '@app/hooks';

import { makeDebugger } from '@app/utils';
const debug = makeDebugger('Modal');

const portalContainer = document.getElementById('portals');

interface IModalProps extends StyledSystemProps {
  children?: React.ReactNode;
  className?: string;
  closeOnDocumentClick?: boolean;
  closeOnEscape?: boolean;
  defaultOpen?: boolean;
  fullscreen?: boolean;
  modalTitle?: string;
  onClose?: () => void;
  onOpen?: () => void;
  open?: boolean;
  trigger: React.ReactNode;
};

/**
 * @render react
 * @name Modal component
 * @description Modal component.
 * @example
 *  <Modal
 *    trigger={<button>Open Modal</button>}
 *  >
 *    <Component />
 *  </Modal>
 */

const Modal: FC<IModalProps> = (props) => {
  const { children, defaultOpen } = props;

  const { height: windowHeight } = useWindowSize();

  const [contentHeight, setContentHeight] = useState<number>(-1);
  const [isFullscreen, setFullscreen] = useState(Boolean(props.fullscreen));
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const WRAPPER = useMemo(() => (document.createElement('div')), []);
  WRAPPER.className = "c-portal";
  WRAPPER.setAttribute('role', 'dialog');

  const portalTransition = useTransition(isOpen, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 195 }
  });

  const portalInnerTransition = useTransition(isOpen, null, {
    from: { opacity: 0, transform: 'scale(0.8)' },
    enter: { opacity: 1, transform: 'scale(1)' },
    leave: { opacity: 0, transform: 'scale(0.8)' },
  });

  /**
   * Close modal
   */
  const _close = () => {
    setIsOpen(false);
    props.onClose && props.onClose();
  }

  /**
   * Open modal
   */
  const _open = () => {
    setIsOpen(true);
    props.onOpen && props.onOpen();
  }

  const TRIGGER = props.trigger
    ? React.cloneElement(props.trigger, { onClick: _open })
    : null;

  const childrenWithProps = React.Children.map(children, child => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child);
    }

    return child;
  });

  useEffect(() => {
    if (portalContainer && WRAPPER) {
      portalContainer.appendChild(WRAPPER);
    }
    return () => {
      if (portalContainer && WRAPPER) {
        portalContainer.removeChild(WRAPPER);
      }
    };
  }, [WRAPPER]);

  useEffect(() => {
    const makeFullscreen = contentHeight > windowHeight;
    setFullscreen(makeFullscreen);
  }, [contentHeight]);

  return (
    <React.Fragment>
      {TRIGGER}
      <ErrorBoundary>
        {
          createPortal(
            <React.Fragment>
              {
                portalTransition.map((portal) => portal.item && (
                  <Portal
                    key={portal.key}
                    style={portal.props}
                    justifyContent={props.justifyContent}
                    p={isFullscreen ? '0' : props.p}
                  >
                    <Scrim onClick={() => _close()} />
                    {
                      portalInnerTransition.map((portalInner) => portalInner.item && (
                        <PortalInner
                          key={portalInner.key}
                          style={portalInner.props}
                          fullscreen={isFullscreen}
                          maxWidth={isFullscreen ? '100%' : props.maxWidth}
                          height={isFullscreen ? '100%' : 'auto'}
                        >
                          <PortalInnerHeader
                            p={2}
                            flexDirection="row"
                            justifyContent="flex-end"
                          >
                            <Button
                              bg="surface"
                              borderRadius="100%"
                              onClick={() => _close()}
                              icon={<X />}
                              iconOnly={true}
                              minWidth={40}
                              text="Close"
                              size="40px"
                            />
                          </PortalInnerHeader>
                          <Measure
                            bounds
                            onResize={(rect) => {
                              setContentHeight(rect.bounds!.height + 320)
                            }}
                          >
                            {({ measureRef }) => (
                              <ScrollView p={2}>
                                <div ref={measureRef}>
                                  {React.Children.toArray(childrenWithProps)}
                                </div>
                              </ScrollView>
                            )}
                          </Measure>
                        </PortalInner>
                      ))
                    }
                  </Portal>
                ))
              }
            </React.Fragment>,
            WRAPPER
          )
        }
      </ErrorBoundary>
    </React.Fragment>
  );
};

Modal.defaultProps = {
  defaultOpen: false,
  p: 2,
}

export default Modal;
