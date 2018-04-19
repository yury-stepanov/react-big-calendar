import PropTypes from 'prop-types';
import React, { Component } from 'react';
import cn from 'classnames'
import { elementType } from './utils/propTypes'


export default class TimeSlot extends Component {
  static propTypes = {
    dayWrapperComponent: elementType,
    value: PropTypes.instanceOf(Date).isRequired,
    isNow: PropTypes.bool,
    showLabel: PropTypes.bool,
    content: PropTypes.string,
    culture: PropTypes.string,
    dayWrapperComponentProps: PropTypes.object,
    slotPropGetter: PropTypes.func,
  }

  static defaultProps = {
    isNow: false,
    showLabel: false,
    content: '',
    dayWrapperComponentProps: {}
  }

  render() {
    const { value, slotPropGetter, dayWrapperComponentProps } = this.props;
    const Wrapper = this.props.dayWrapperComponent;
    const { className, style } = (slotPropGetter && slotPropGetter(value)) || {};

    return (
      <Wrapper value={value} {...dayWrapperComponentProps}>
        <div
          style={style}
          className={cn(
            'rbc-time-slot',
            className,
            this.props.showLabel && 'rbc-label',
            this.props.isNow && 'rbc-now',
          )}
        >
          {this.props.showLabel &&
            <span>{this.props.content}</span>
          }
        </div>
      </Wrapper>
    )
  }
}
