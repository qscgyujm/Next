import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { demoAction } from '../src/store/demo';

import { compose } from '../src/helper/compose';

const PageA = (props) => {
  console.log('props PageB', props);
  return (
    <div>
      B
    </div>
  );
};

export const mapStateToProps = (state) => state;

export const mapDispatchToProps = (dispatch: Dispatch) => {
  const {
    fetchDemo,
  } = demoAction;
  return {
    ...bindActionCreators({
      fetchDemo,
    }, dispatch),
  };
};


export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  <P extends {}>(
    BaseComponent: React.ComponentType<P>,
  ): React.FC<P> => (props) => {
    console.log('compose', props);

    return (
      <BaseComponent
        {...props}
      />
    );
  },
)(PageA);
